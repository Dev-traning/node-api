const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.json([{
            id: 1,
            name: "dimpy",
            age: 21
        },


    ])
});
app.listen(55000, () => {
    console.log("As it is working on  55000 server ")
})