import { type Product } from "../../interfaces/products";
import axiosIntance from "../config/axiosIntance";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosIntance.get(`/products`);
    const data: Product[] = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getProduct = async (id: number): Promise<Product> => {
  try {
    const response = await axiosIntance.get(`/products/${id}`);
    const data: Product = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return {} as Product;
  }
};
