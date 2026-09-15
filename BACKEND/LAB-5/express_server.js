import express from 'express';
const app = express();
const userData = [
    {
        id:101,
        name : "Arush Yadav",
        email : "arushyadav3983@gmail.com"
    }
];
app.get("/",(req,res)=>{
    res.status(200).json({
        message : "Welcome to Express Server"
    });
});
app.get("/msg",(req,res)=>{
    res.status(200).json({
        message : "These are the user details",
    });
});

app.get("/users",(req,res)=>{
    res.status(200).json({
        message : "Data go Recieved",
    });
});
