const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id:{
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
    },
    screen: {
      type: String,
    },
    processor: {
      type: String,
    },
    ram: {
      type: Number,
    },
  },
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
