import React, { useState } from "react";
import { IProduct } from "../models";

interface ProcuctProps {
  product: IProduct;
}

export function Product({ product }: ProcuctProps) {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="product-bold">Price: {product.price} EUR</p>
      {/* <p className="product-bold">{product.description}</p> */}
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>
      <div>{details && <p>{product.description}</p>}</div>
      <p>
        Rating:{" "}
        <span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
      </p>
    </div>
  );
}
