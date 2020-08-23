const mongoose = require("mongoose");

const Form = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "form",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  carBrand: {
    type: String,
    required: true,
  },
  fastFoodBrand: {
    type: String,
    required: true,
  },
  cellPhoneBrand: {
    type: String,
    required: true,
  },
  computerBrand: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("form", Form);
