import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewForm } from "../action/survey";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    zipCode: "",
    carBrand: "",
    fastFoodBrand: "",
    cellPhoneBrand: "",
    computerBrand: "",
  });

  const {
    firstName,
    lastName,
    email,
    city,
    zipCode,
    carBrand,
    fastFoodBrand,
    cellPhoneBrand,
    computerBrand,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createNewForm(formData));
    alert("Thank you for entering!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      zipCode: "",
      carBrand: "",
      fastFoodBrand: "",
      cellPhoneBrand: "",
      computerBrand: "",
    });
  };

  return (
    <div className="survey">
      <h3 className="survey-title">Fill out the form to a chance to WIN!</h3>
      <form className="survey-form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="Enter First Name"
            onChange={(e) => onChange(e)}
            value={firstName}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="Enter City"
            value={city}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="zipCode"
            className="form-control"
            placeholder="Enter Zip Code"
            value={zipCode}
            onChange={(e) => onChange(e)}
          />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="car-brand">Preferred Car Brand</label>
          <select
            className="form-control"
            name="carBrand"
            value={carBrand}
            onChange={(e) => onChange(e)}
          >
            <option>None</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Ford</option>
            <option>Chevrolet</option>
            <option>Mercedes-benz</option>
            <option>Subaru</option>
            <option>BMW</option>
            <option>Nissan</option>
            <option>Jeep</option>
            <option>Audi</option>
            <option>GM</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fast-food-brand">Preferred Fast Food Brand</label>
          <select
            className="form-control"
            name="fastFoodBrand"
            value={fastFoodBrand}
            onChange={(e) => onChange(e)}
          >
            <option>None</option>
            <option>Mcdonals</option>
            <option>Burger King</option>
            <option>Wendy's</option>
            <option>Jack in the Box</option>
            <option>Taco Bell</option>
            <option>KFC</option>
            <option>Chipotle</option>
            <option>Carl Jrs</option>
            <option>Panda Express</option>
            <option>Popeyes</option>
            <option>Subway</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cell-phone-brand">Preferred Phone Brand</label>
          <select
            className="form-control"
            name="cellPhoneBrand"
            value={cellPhoneBrand}
            onChange={(e) => onChange(e)}
          >
            <option>None</option>
            <option>Samsung</option>
            <option>Apple</option>
            <option>Google</option>
            <option>OnePlus</option>
            <option>Nokia</option>
            <option>LG</option>
            <option>Huawei</option>
            <option>Motorola</option>
            <option>Blackberry</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="computer-brand">Preferred Computer Brand</label>
          <select
            className="form-control"
            name="computerBrand"
            value={computerBrand}
            onChange={(e) => onChange(e)}
          >
            <option>None</option>
            <option>Apple</option>
            <option>Dell</option>
            <option>Microsoft</option>
            <option>HP</option>
            <option>Lenovo</option>
            <option>Alienware</option>
            <option>Asus</option>
            <option>Acer</option>
            <option>Other</option>
          </select>
        </div>
        <input type="submit" className="form-group submit-button" />
      </form>
    </div>
  );
};

export default SurveyForm;
