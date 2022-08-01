import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-400 flex items-center justify-center h-12 gap-3">
      <img src="./images/logo.png" alt="site logo" />
      <p className="leading-6 text-2xl text-white">my travel journal.</p>
    </div>
  );
};

export default Navbar;
