import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddProduct = () => {
  const [values, setvalues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const { name, description, price, stock } = values;

  const onSubmit = () => {
    //
  };

  const handleChange = (name) => (event) => {
    //
  };

  const createProductForm = () => (
    <form>
      <span className="m-2">Post photo</span>
      <div className="form-group m-2">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group m-2">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group m-2">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group m-2">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group m-2">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
      </div>
      <div className="form-group m-2" >
        <input
          onChange={handleChange("quantity")}
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-success m-2"
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add Product here !"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-dark text-white">
        <div className="col-md-8 offset-md-2">{createProductForm()}</div>
      </div>
    </Base>
  );
};

export default AddProduct;
