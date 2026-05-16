const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Notification Backend Running");

});

app.post("/notify", (req, res) => {

    res.json({
        success: true,
        message: "Notification sent successfully"
    });

});

app.listen(3000, () => {

    console.log(
        "Server running on port 3000"
    );

});