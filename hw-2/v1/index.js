const express = require("express");

const { getExcavators, createExcavator, updateExcavator, deleteExcavator } = require("./handlers/cars");

const app = express();
app.use(express.json());

// ruti
app.get("/excavators", getExcavators);
app.post("/excavators", createExcavator);
app.put("/excavators/:id", updateExcavator);
app.delete("/excavators/:id", deleteExcavator);

app.listen(3000, () => console.log("Server started at port 3000!"));
