import { useEffect } from "react";
import { useProducts } from "./hooks/useProducts"
import { Product } from "./utils/types";
import { ProductCard } from "./components/ProductCard";

function App() {

  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>
      <h1>Lesdarus Software</h1>
      <h2>Tienda virtual</h2>
      {products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default App
