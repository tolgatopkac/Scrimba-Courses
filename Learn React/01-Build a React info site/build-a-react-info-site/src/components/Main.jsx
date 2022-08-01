import React from "react";

const Main = () => {
  return (
    <main className="w-[55rem]  h-[35rem]  bg-[#282d35]  text-white   px[2.7rem] py-[5.7rem] container mx-auto">
      <div className="bg-image">
        <h1 className="text-6xl ml-8 tracking-tighter  ">
          Fun facts about React
        </h1>
        <ul className="mt-[4.2rem] text-base max-w-[40rem] pl-[5.2rem] main--list">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
