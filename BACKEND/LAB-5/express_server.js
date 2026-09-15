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

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.put("/edit/:id",(req,res) =>{
    const { id } = req.params;
    const userIndex = userData.findIndex((user) => user.id === parseInt(id));
    if(userIndex === -1){
        return res.status(404).json({ message : "User not found" });
}

const { name, email } = req.body;
userData[userIndex] = { id: parseInt(id), name, email };
res.status(200).json({ message : "User updated successfully", user : userData[userIndex] });
});