import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const products = [
  {
    id: 1,
    name: "Gucci Duffle Bag",
    image: "/frame.svg",
    price: 960,
    discount: 1160,
  },
  {
    id: 2,
    name: "RGB Liquid CPU Cooler",
    image: "/frame1.svg",
    price: 1960,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    image: "frame2.svg",
    price: 550,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    image: "frame3.svg",
    price: 750,
  },
  {
    id: 5,
    name: "ASUS FHD Gaming Laptop",
    image: "frame4.svg",
    price: 960,
    discount: 65,
  },
  {
    id: 6,
    name: "IPS LCD Gaming Monitor",
    image: "frame5.svg",
    price: 1160,
    discount: 65,
  },
  {
    id: 7,
    name: "HAVIT HV-G92 Gamepad",
    image: "frame6.svg",
    price: 560,
    discount: 65,
  },
  {
    id: 8,
    name: "AK-900 Wired Keyboard",
    image: "frame7.svg",
    price: 200,
    discount: 65,
  },
  {
    id: 9,
    name: "Breed Dry Dog Food",
    image: "frame8.svg",
    price: 100,
    discount: 35,
  },
  {
    id: 10,
    name: "CANON EOS DSLR Camera",
    image: "frame9.svg",
    price: 360,
    discount: 95,
  },
  {
    id: 11,
    name: "ASUS FHD Gaming Laptop",
    image: "frame10.svg",
    price: 700,
    discount: 325,
  },
  {
    id: 12,
    name: "Curology Product Set",
    image: "frame.png",
    price: 500,
    discount: 145,
  },
  {
    id: 13,
    name: "Kids Electric Car",
    image: "frame12.svg",
    price: 960,
    discount: 65,
  },
  {
    id: 14,
    name: "Jr. Zoom Soccer Cleats",
    image: "frame13.svg",
    price: 1160,
    discount: 35,
  },
  {
    id: 15,
    name: "GP11 Shooter USB Gamepad",
    image: "frame14.svg",
    price: 660,
    discount: 55,
  },
  {
    id: 16,
    name: "Quilted Satin Jacket",
    image: "frame15.svg",
    price: 660,
    discount: 55,
  },
];

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="container mx-auto px-4 ">
          <div className="flex justify-between items-center mt-20">
            <p className="text-2xl font-semibold">Products</p>
            <button className="border border-gray-400 px-6 py-2 rounded-md text-black font-bold">
              Move All To Bag
            </button>
          </div>
          <div className="grid grid-cols-4 gap-6 items-center mb-50">
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
