const { read, write } = require("../read-write");

const getExcavators = async (req, res) => {
  try {
    const excavators = await read("data.json");
    return res.status(200).send(excavators);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createExcavator = async (req, res) => {
  try {
    const excavators = await read("data.json");
    const newExcavator = req.body;
    cars.push(newExcavator);
    await write("data.json", excavators);
    return res.status(200).send("New Excavator added!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateExcavator = async (req, res) => {
  try {
    let excavators = await read("data.json");
    const excavatorId = Number(req.params.id);
    const newData = req.body;

    cars = excavators.map((excavator, index) => {
      if (index === excavatorId) {
        return {
          ...excavator,
          ...newData,
        };
      }

      return excavator;
    });

    await write("data.json", excavators);
    return res.status(200).send("Excavator updated successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const deleteExcavator = async (req, res) => {
  try {
    const excavatorId = Number(req.params.id);
    let excavators = await read("data.json");

    excavators = excavators.filter((_, index) => index !== excavatorId);

    await write("data.json", excavators);
    return res.status(200).send("Excavator deleted successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getExcavators,
  createExcavator,
  updateExcavator,
  deleteExcavator,
};

