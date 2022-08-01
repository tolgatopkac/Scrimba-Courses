import React from "react";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Logo = () => {
  return (
    <div className="max-w-sm text-2xl bg-[#161619] mt-10 flex justify-center gap-3 p-5">
      <p>
        <FaGithubSquare className="text-[#918E9B] w-10 h-10" />
      </p>

      <p>
        <FaTwitterSquare className="text-[#918E9B] w-10 h-10" />
      </p>
      <p>
        <FaFacebookSquare className="text-[#918E9B] w-10 h-10" />
      </p>
      <p>
        <FaInstagramSquare className="text-[#918E9B] w-10 h-10" />
      </p>
    </div>
  );
};

export default Logo;
