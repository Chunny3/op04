import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("首頁");
});

app.get("/ting", (req, res) => {
    res.send(" ting dev");
});

app.get("/ting", (req, res) => {
    res.send(" ting dev try2");
});

app.listen(3005, ()=>{});