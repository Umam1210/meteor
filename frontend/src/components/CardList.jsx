import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CardList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setProducts(response.data);
  };
  console.log("ini product", products);
  return (
    <div className="bg-white" tabIndex={"#"}>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-7 xl:aspect-h-8 bg-gray-300">
                  <img
                    src={product?.url}
                    alt={product?.image}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                <h3 className="mt-1 text-sm text-gray-700 ">{product?.desc}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product?.title.substring(0, 10)}</p>
                <button className="col-span-2 bg-indigo-700 my-2 text-white rounded-lg">Borrow a book</button>
                </div>
                  
              </a>
            ))}
          </div>
        </div>
      </div>
  )
}
