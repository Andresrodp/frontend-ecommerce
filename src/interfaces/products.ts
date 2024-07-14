export interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface CardProductProps {
  product: Product;
}
