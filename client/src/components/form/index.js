import React from "react";
import "./form.css";

function Form(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="zipcode">Search for an adoptable pet in your area:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="zipcode"
          list="zipcodes"
          type="text"
          className="form-control"
          placeholder="Type in zipcode to begin"
          id="zipcode"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
