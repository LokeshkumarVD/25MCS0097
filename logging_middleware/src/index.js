const Log=require("./logger");
async function runLogs() {
    await Log("backend","info","service","Server started successfully");
    await Log("backend","error","handler","Invalid boolean value");
}
runLogs();