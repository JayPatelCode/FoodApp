import React from "react";
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({
  imageId,
  name,
  description,
  category,
  price,
  
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL+ imageId } />
      <h3 className="nameFood">😋{name} </h3><br/>
      <h2>{description}</h2><br/>
      {/* <h2>{category}</h2> */}
      <h4>🤑 RS. {price/100}</h4>
    </div>
  );
};

export default FoodItem;
