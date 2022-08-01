import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[55rem] h-[9rem] flex items-center py-[3rem] px-[2rem] bg-[#21222a] container mx-auto">
      <img
        className="w-[2.9rem] h-[2.9rem] mr-[0.7rem]"
        src={"https://i.ibb.co/m6MjqMq/reactjs-icon.png"}
        alt="react-logo"
      />
      <h1 className="text-[#61dafb] text-4xl font-bold  ">React Facts</h1>
      <p className="text-[#deebf8] text-xl ml-auto">React Course - Project 1</p>
    </nav>
  );
};

export default Navbar;
