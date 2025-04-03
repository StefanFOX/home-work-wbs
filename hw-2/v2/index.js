const express = require("express");

const connectToDB = require("./db/config");
connectToDB();

const {
  getVehicle,
  createVehicle,
  removeVehicle,
  updateVehicle,
} = require("./handlers/excavatores");

const app = express();
app.use(express.json());

app.get("/excavatores", getVehicle);
app.post("/excavatores", createVehicle);
app.put("/excavatores/:id", updateVehicle);
app.delete("/excavatores/:id", removeVehicle);

app.listen(3000, () => console.log("Server started at port 3000!"));
