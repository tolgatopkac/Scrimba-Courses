import React from "react";
// import { GoLocation } from "react-icons/go";

const Card = (props) => {
  let url = props.googleMapsUrl;
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-12">
      <img
        className="mr-5 border rounded-md w-48"
        src="./images/resim.png"
        alt="card-resim"
      />
      <div className="">
        <p className="inline pr-6 items ">
          {/* <GoLocation className="inline pr-1 text-red-500 w-5 h-5" /> */}
          <span className="uppercase tracking-widest "> {props.location}</span>
        </p>
        <a
          className="text-[#918e9b] leading-9   border-solid border-b-2"
          href={url}
        >
          View on Google Maps
        </a>
        <h2 className="font-bold text-4xl leading-snug mt-3">{props.title}</h2>
        <p className="font-bold">
          {props.startDate} - {props.endDate}
        </p>
        <p className="max-w-xl">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
