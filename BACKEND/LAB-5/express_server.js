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
        message : "Data got Recieved",
    });
});

app.post("/create",(req,res) =>{
    const{id,name,email}= req.body;
    const newuser = {
        id,
        name,
        email
    };
    userData.push(newuser);
    res.status(201).json({
        message : "User created successfully",
        user : newuser
    });
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});