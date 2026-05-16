const axios=require("axios");
const url="http://4.224.186.213/evaluation-service/auth";
const data={
    email:"lokeshkumar.v2025@vitstudent.ac.in",
    name:"Lokeshkumar V",
    rollNo:"25MCS0097",
    accessCode:"SfFuWg",
    clientID:"43add08e-fb21-48d0-96be-d773384a59d6",
    clientSecret:"cMzkZCrBjzZmeQQr"
};
async function authenticate(){
    try{
        const response=await axios.post(url,data);
        console.log(response.data);
    }
    catch(error){
        console.log(error.response.data);
    }
}
authenticate();