import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-20">
          <div className="logo">
            <p className="font-bold text-2xl">Exclusive</p>
          </div>
          <ul className="flex gap-20 font-semibold">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>
          <div className=" w-[270px] h-10 bg-gray-100 items-center flex">
            <button className="ml-5 text-gray-500">
              What are you looking for?
            </button>
            <span className="ml-5">
              <img src="/component.svg" alt="" />
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <img src="/wishlist.svg" alt="" />
            <img src="/korzina.svg" alt="" />
            <img src="/user.svg" alt="" />
          </div>
        </div>
      </div>
      <hr className="mt-5 text-gray-300" />
    </>
  );
};

export default Navbar;
