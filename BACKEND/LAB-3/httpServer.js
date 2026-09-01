import http from  'http';
// import { type } from 'os';
const server = http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/msg' && method=='GET')
        res.end("This is welcome message from server")
    else if (url=="/sys" && method=="GET"){
       res.end("This is system information");
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port : 3000");
});

 import http from  'http';
// import { type } from 'os';
const server = http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/msg' && method=='GET')
        res.end("This is welcome message from server")
    else if (url=="/sys" && method=="GET"){
       res.end("This is system information");
    }
});
server.listen(3000,()=>{
    console.log("Server is running on port : 3000");
});


else if(url=="/data" && method=="GET"){
    res.end("JSON Stringify(userData)");
}
else if(url=="/data" && method=="POST"){
    const body = "____.....";
    req.on("data",(chunk)=>{
        body += chunk; 
    }
    req.on("end",()=>{
    }
        const newdata = JSON.parse(body);
        const newuserdata = {
            id: newdata.id,
            name: newdata.name,
            e-mail: newdata.email,
        };
        userdata.push(newuserdata);
        respond("Data Converted Successfully");