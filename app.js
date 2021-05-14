const app = require("express")();
const express = require("express");
const channel = require("./channel");
//const bp = require("body-parser");
require("./db")

app.set("port", process.env.PORT || 3000);
/*app.use(bp.json());
app.use(bp.urlencoded({extended: true}));*/
app.use(express.json());

const server = app.listen(app.get("port"), ()=>{
    console.log("Server running on port: ", app.get("port"));
})

app.get("/", (req, res)=>{
    res.send("Hi");
})

app.post("/channel", async(req, res)=>{
    const {name, link, category} = req.body;
    const channelList = await channel.find();
    const lastID = parseInt(channelList.length, 10);
    const id= lastID + 1

    const newChannel = new channel({name, link, category, id});

    const verif = await channel.findOne({link: link});
    const verif2 = await channel.findOne({name: name});

    if(verif){
        res.send("C-R");
    }else if(verif2){
        res.send("N-T");
    }

    const n = await newChannel.save();

    if(n){
        res.send("OK");
    }else{
        res.send("ERROR");
    }
    
})

app.get("/channel", async(req, res)=>{
    res.json(await channel.find());
})

app.get("/cat/:c", async(req, res)=>{
    const selectedChannels = await channel.find({category: req.params.c})

    res.json(selectedChannels);
})

