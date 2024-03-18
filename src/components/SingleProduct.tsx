import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/ProductInterface";

export default function SingleProduct() {
  const productParam = useParams();
  console.log("param", productParam.id);

  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<null | boolean>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products/${productParam.id}`
        );
        const result = await response.json();
        console.log("result", result);
        setProduct(result);
        setLoading(false);
      } catch (e) {
        const err = e as Error;
        console.log(err.message);
        setError(err.message);
      }
    };

    fetchProducts();
  }, [productParam]);

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
    <section className="min-h-screen bg-slate-800">
      <div className="flex justify-center pt-16">
        <div key={product?.id} className="bg-slate-700 shadow-lg p-4 rounded-lg">
          <Link to={`/product/${product?.id}`}>
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
          </Link>
          <h2 className="text-xl font-semibold mb-2 line-clamp-1">
            {product?.title}
          </h2>
          <p className="line-clamp-1 mb-4">{product?.description}</p>
          <div className="flex justify-between items-center">
            <span className="">${product?.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
