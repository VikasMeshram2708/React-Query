import { Link } from "react-router-dom";
import { UserProductsState } from "../context/ProductState";
import { Product } from "../interfaces/ProductInterface";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Carts() {
  const { products, removeProduct } = UserProductsState();
  return (
    <section className="min-h-screen bg-slate-800 py-8 px-4 text-white">
      <h1 className="text-yellow-400 text-center">{products?.length < 1 && "You dont' have Products on your cart"}</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item: Product) => (
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
                <div onClick={() => removeProduct(item.id)}  className="flex gap-3 bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-500 cursor-pointer focus:outline-none focus:bg-blue-600">
                  <RiDeleteBin6Fill size={25} color="white" />
                  <p>Remove</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
