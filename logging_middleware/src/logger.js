process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";
const axios=require("axios");
const {STACK,LEVEL,BACKEND_PACKAGES}=require("./constant");
const API_URL="http://4.224.186.213/evaluation-service/logs";
async function Log(stack,level,packageName,message){
    try{
        if(!STACK.includes(stack)){
            throw new Error("Invalid Stack");
    }
    if(!LEVEL.includes(level)){
        throw new Error("Invalid level");
    }
    if(!BACKEND_PACKAGES.includes(packageName)){
        throw new Error("Invalid package");
    }
    const payload={
        stack,level,package:packageName,message
    };
    const response=await axios.post(API_URL,payload,{
        headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJsb2tlc2hrdW1hci52MjAyNUB2aXRzdHVkZW50LmFjLmluIiwiZXhwIjoxNzc4OTM0MDc5LCJpYXQiOjE3Nzg5MzMxNzksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmNjcwMDdmNy0zZDY2LTRmMzUtOWYwMC02YTYyNzMxMjM3OGIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJsb2tlc2hrdW1hciB2Iiwic3ViIjoiNDNhZGQwOGUtZmIyMS00OGQwLTk2YmUtZDc3MzM4NGE1OWQ2In0sImVtYWlsIjoibG9rZXNoa3VtYXIudjIwMjVAdml0c3R1ZGVudC5hYy5pbiIsIm5hbWUiOiJsb2tlc2hrdW1hciB2Iiwicm9sbE5vIjoiMjVtY3MwMDk3IiwiYWNjZXNzQ29kZSI6IlNmRnVXZyIsImNsaWVudElEIjoiNDNhZGQwOGUtZmIyMS00OGQwLTk2YmUtZDc3MzM4NGE1OWQ2IiwiY2xpZW50U2VjcmV0IjoiY016a1pDckJqelptZVFRciJ9.2SXvP7pGg6JDB0uV0itU11iYEHlzvJp8SeF4Zo8eARs","Content-Type":"application/json"
        }
    });
    console.log(response.data);
}
catch (error){
    if(error.response){
        console.log(error.response.data);
    }
    else{
    console.log(error.message);
    }
}
}
module.exports=Log;