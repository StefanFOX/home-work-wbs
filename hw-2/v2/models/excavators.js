const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
 
  model: String,
      manufacturer: String,
      year: Number,
      weight_tons: Number,
      engine_power_hp: Number,
      bucket_capacity_m3: Number,
      max_digging_depth_m: Number,
      fuel_type: String,
});

const excavatoreModel = mongoose.model("excavatore", excavatoreSchema, "excavatores");

const get = async () => {
  return await excavatoreModel.find();
};

const create = async (data) => {
  
  const newExcavatore = new excavatoreModel(data);
  return await newExcavatore.save();
};

const update = async (id, data) => {
  return await excavatoreModel.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await excavatoreModel.deleteOne({ _id: id });
};

module.exports = {
  get,
  create,
  update,
  remove,
};
