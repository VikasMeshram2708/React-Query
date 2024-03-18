import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/ProductInterface";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<null | boolean>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products);
        setLoading(false);
      } catch (e) {
        const err = e as Error;
        console.log(err.message);
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center text-7xl text-white font-semibold text-red-500">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <section className="min-h-screen bg-slate-800 py-8 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-slate-700 shadow-lg p-4 rounded-lg"
            >
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.thumbnail}  
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
              </Link>
              <h2 className="text-xl font-semibold mb-2 line-clamp-1">
                {item.title}
              </h2>
              <p className="line-clamp-1 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="">${item.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
