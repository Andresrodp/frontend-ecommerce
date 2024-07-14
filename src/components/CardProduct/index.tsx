import React from "react";
import { type CardProductProps } from "../../interfaces/products";
import styles from "./index.module.css";

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <article className={styles.mainContainer}>
      <img className={styles.img} src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </article>
  );
};

export default CardProduct;
