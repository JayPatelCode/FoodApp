// import React from "react";
// import { IMG_CDN_URL } from "../constants";

// // Restaurant card component: Image, name, 
// const FoodItem = ({
//   cloudinaryImageId,
//   name,
//   description,
//   areaName,
//   sla,
//   costForTwo,
//   price,
// }) => {
//   return (
//     <div className="card">
//       <img src={IMG_CDN_URL + cloudinaryImageId} />
//       <h3>{name}</h3>
//       <h5>{description}</h5>
//       <h5>{areaName}</h5>
//       <span>
//         <h4
        
//         >
//           <i className="fa-solid fa-star"></i>
//           {price}
//         </h4>
//         <h4>•</h4>
//         <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
//         <h4>•</h4>
//         <h4>{costForTwo ?? '₹200 for two'}</h4>
//       </span>
//     </div>
//   );
// };

// export default FoodItem;


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
      <h4>🤑💲{price}</h4>
    </div>
  );
};

export default FoodItem;