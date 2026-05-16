process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";
const axios = require("axios");
const acios=require("axios");
const url="https://4.224.186.213/evaluation-service/register";
const data={email:"lokeshkumar.v2025@vitstudent.ac.in",
    name:"Lokeshkumar V",
    mobileNo:"9384071281",
    githubUsername:"LokeshkumarVD",
    rollNo:"25MCS0097",
    accessCode:"SfFuWg"
};
async function register(){
    try{
        const response=await axios.post(url,data);
        console.log(response.data);
    }
    catch(error){
        if(error.response){
            console.log(error.response.data);
        }
        else{
            console.log(error.message);
        }
    };
}
register();