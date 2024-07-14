import { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./utils/methods/products.ts";
import { type Product } from "./interfaces/products.ts";
import CardProduct from "./components/CardProduct/index.tsx";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  return (
    <main>
      <h1>Nuestros productos</h1>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </main>
  );
}

export default App;
