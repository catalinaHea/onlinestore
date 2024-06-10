import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css"
import Faqsection from "../../components/Faq";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <Faqsection />
    </div>
  );
};