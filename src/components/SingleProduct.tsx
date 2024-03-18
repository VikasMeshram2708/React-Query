import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function SingleProduct() {
  const productParam = useParams();
  console.log("param", productParam.id);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/${productParam.id}`
    );
    const result = await response.json();
    return result;
  };

  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["singleProduct", productParam.id],
    queryFn: fetchProducts,
    staleTime: 10000,
  });

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return (
    <section className="min-h-screen bg-slate-800 text-white">
      {isLoading && (
        <h1 className="text-red-500 font-semibold text-3xl">Loading...</h1>
      )}
      {!isLoading && (
        <div className="flex justify-center pt-16">
          <div
            key={product?.id}
            className="bg-slate-700 shadow-lg p-4 rounded-lg"
          >
            <Link to={`/product/${product?.id}`}>
              <img
                src={product?.thumbnail}
                alt={product?.title}
                className="w-full h-80 bg-contain mb-4 rounded-md"
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
      )}
    </section>
  );
}
