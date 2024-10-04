const express = require("express");
const app = express();
PORT = 5000;
app.get("/", (req,res) => {
    res.json({
        name:"Jayram",
        age:69
    }
    )
});

app.get("/login", (req,res) => {
    res.send("hellop")
});
app.listen(PORT,()=> {
    console.log(`Server is running on ${PORT}`)
});

