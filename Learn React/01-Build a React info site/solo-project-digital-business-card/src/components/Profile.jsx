import React from "react";
import profile from "../img/profile.jpg";
import { MailIcon } from "@heroicons/react/solid";
import { BsLinkedin } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="container flex flex-col text-center ">
      <img src={profile} alt="" />
      <h1 className="text-white text-4xl font-bold mt-8 ">Tolga Topkaç</h1>
      <p className="mt-2 text-sm text-[#f3bf99]">Frontend Developer</p>
      <p className="mt-2.5 text-xs text-white">
        <a href="#">tolgatopkac.com</a>
      </p>
      <div className="flex flex-row justify-center gap-6">
        <button className="all-button bg-white text-[#374151] border border-[#d1d5db] flex justify-center items-center gap-1">
          <MailIcon className="w-5 h-5" />
          <span>Email</span>
        </button>
        <button className="all-button bg-[#5093e2] text-white border border-[#5093e2] flex justify-center items-center gap-1">
          <BsLinkedin className="w-4 h-4" />
          Linkedin
        </button>
      </div>
    </div>
  );
};

export default Profile;
