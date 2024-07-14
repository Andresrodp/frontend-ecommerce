import { useEffect } from "react";

export default function ProductPage() {
  useEffect(() => {
    console.log("ProductPage mounted");

    return () => {
      console.log("ProductPage unmounted");
    };
  }, []);
  return <div>Product Page</div>;
}
