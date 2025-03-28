import React from "react";

const Product = ({ name, image, price, discount }) => {
  return (
    <>
      <div className=" w-[320px] bg-white rounded-xl p-4">
        <div className="bg-gray-100 p-4 rounded-lg ">
          <img
            src={image}
            alt=""
            className=" w-[180px] h-[180px]  mx-auto rounded-lg"
          />
        </div>
        <button className="bg-black py-3 w-full text-white flex items-center justify-center rounded-lg px-4">
          <img src="/korzina1.svg" alt="cart" />
          Add To Cart
        </button>
        <p className="mt-4 font-semibold">{name}</p>
        <div className="flex mt-2">
          <span className="text-red-500 font-semibold text-lg">{price}</span>
          <div className="flex ">
            <img
              className="w-[20px] h-[20px] mt-1 ml-2 "
              src="/vector.svg"
              alt=""
            />
            <img
              className="w-[20px] h-[20px] mt-1 ml-2 "
              src="/vector.svg"
              alt=""
            />
            <img
              className="w-[20px] h-[20px] mt-1 ml-2 "
              src="/vector.svg"
              alt=""
            />
            <img
              className="w-[20px] h-[20px] mt-1 ml-2 "
              src="/vector.svg"
              alt=""
            />
            <img
              className="w-[20px] h-[20px] mt-1 ml-2 "
              src="/vector.svg"
              alt=""
            />
          </div>
          <span className="text-gray-400  ml-2">{discount}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
