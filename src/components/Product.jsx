import React from "react";

const Product = ({ name, image, price, discount }) => {
  return (
    <>
      <div className="container mx-auto items-center">
        <div className="w-[300px] h-[250px] bg-gray-100 items-center mt-30">
          <img className="mx-auto w-[170px] h-[200px]" src={image} alt="" />
          <div className="bg-black w-[300px] h-[41px] mt-4">
            <button className="flex items-center justify-center w-full py-2 text-white">
              <img src="/korzina1.svg" alt="cart" className="w-5 h-5 mr-2" />
              Add To Cart
            </button>
          </div>
          <p className="mt-5 font-semibold">{name}</p>
          <div className="flex items-center mt-2">
            <span className="text-red-500 font-semibold text-lg">{price}</span>
            <div className="flex space-x-1">
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
            <span className="ml-1 mt-1 font-bold text-gray-400">
              {discount}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
