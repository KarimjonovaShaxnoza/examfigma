import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
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
          <div className="flex items-center w-[270px] h-10 bg-gray-100 px-4 rounded-lg">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none flex-1 text-gray-500"
            />
            <img src="/component.svg" alt="search" className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-6 ">
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
