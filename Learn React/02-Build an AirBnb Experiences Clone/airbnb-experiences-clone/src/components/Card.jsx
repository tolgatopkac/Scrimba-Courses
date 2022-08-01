import React from "react";

const Card = (props) => {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="w-40 text-xs flex flex-col card-flex relative ">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        className="w-full  rounded-2xl mb-3"
        src={`./images/${props.coverImg}`}
        alt="katie-zaferes"
      />

      <div className="flex gap-0.5 items-center mb-4">
        <img className="w-4 h-4" src="./images/star.png" alt="star" />
        <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount}) •</span>
        <span>{props.location}</span>
      </div>
      <p className="mb-2">{props.title}</p>
      <p className="card--price">
        <span className="font-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
};
export default Card;
