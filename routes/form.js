const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Form = require("../models/Form");

router.post(
  "/",
  [
    check("firstName", "First Name is required").not().isEmpty(),
    check("lastName", "Last Name is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("city", "Name of city is required").not().isEmpty(),
    check("zipCode", "Zip code of address is required").not().isEmpty(),
    check("carBrand", "Preferred car brand is required").not().isEmpty(),
    check("fastFoodBrand", "Preferred fast food brand is required")
      .not()
      .isEmpty(),
    check("cellPhoneBrand", "Preferred cell phone brand is required")
      .not()
      .isEmpty(),
    check("computerBrand", "Preferred computer brand is required")
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    const formField = {};
    const {
      formId,
      firstName,
      lastName,
      email,
      city,
      zipCode,
      carBrand,
      fastFoodBrand,
      cellPhoneBrand,
      computerBrand,
    } = req.body;

    if (firstName) formField.firstName = firstName;
    if (lastName) formField.lastName = lastName;
    if (email) formField.email = email;
    if (city) formField.city = city;
    if (zipCode) formField.zipCode = zipCode;
    if (carBrand) formField.carBrand = carBrand;
    if (fastFoodBrand) formField.fastFoodBrand = fastFoodBrand;
    if (cellPhoneBrand) formField.cellPhoneBrand = cellPhoneBrand;
    if (computerBrand) formField.computerBrand = computerBrand;

    try {
      let form = new Form(formField);
      await form.save();
      res.json(form);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error in Form");
    }
  }
);

module.exports = router;
