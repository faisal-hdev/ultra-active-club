import React from "react";
import "./Category.css";

const Category = (props) => {
  const { category, handleAddToCart } = props;
  const { Time, age, title, img, discretion } = category;
  return (
    <div className="gym-category">
      <img className="card-img" src={img} alt="" />
      <div className="btn-info">
        <p className="card-title">{title}</p>
        <p className="card-dicp">Discretion : {discretion}</p>
        <div className="last-info">
          <p className="age">For Age : {age}</p>
          <p className="time">Time required : {Time}s</p>
          <button
            onClick={() => handleAddToCart(category)}
            className="card-btn"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
