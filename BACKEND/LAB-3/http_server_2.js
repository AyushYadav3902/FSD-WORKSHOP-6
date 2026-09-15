import http from "http";
const userdata =[{
    id : 101 ,
    name : "Arush Yadav" ,
    email : "georgianarush3983@gmail.com" 
}]
const server=http.createServer((req,res)=>{
    //   res.statusCode=201;
    //   res.setHeader("Content-type","text/plane");
    //   res.end("Hello Serever.")
    const url=req.url;
    const method=req.method;
    if(url=="/msg" && method == "GET"){
        res.end("This is welcome message from server");
    }
    else if(url=="/sys" && method == "GET"){
        res.end("This is system information");
    }
    else if (url =="/data" && method =="GET") {
        res.end(JSON.stringify(userdata)) ;
    }
    else if(url.startsWith("/user") && method == "GET") {
        const id = url.split("/")[2]; 
        console.log("User ID:", id);
        const user = userdata.find(u => u.id == id);
        if (!user) {
            return res.end("user not Found");
        }
        res.end(JSON.stringify(user));
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port number 3000");
})
