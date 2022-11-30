const express = require("express");
const app = express();
const port = 3000;

app.get("/onWriteWeatherTrigger", (req, res) => {
    console.log(JSON.stringify(req));
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
