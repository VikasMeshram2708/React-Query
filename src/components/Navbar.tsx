import { Link } from "react-router-dom";
import { ImCart } from "react-icons/im";
import { UserProductsState } from "../context/ProductState";

export default function Navbar() {
  const { products } = UserProductsState();
  return (
    <nav className="bg-slate-900 p-3 flex items-center justify-between sticky top-0">
      <h1 className="text-white text-2xl font-semibold">
        <Link to="/">Bumblefuzzle</Link>
      </h1>
      <ul className="flex items-center gap-5 text-white">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>{" "}
        </li>
        <li>
          <Link to="/">Contact Us</Link>{" "}
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <Link to="/cart" className="flex items-center gap-3">
          {products.length && (
            <p className="text-white text-lg font-semibold">
              {products.length}
            </p>
          )}
          <ImCart size={30} className="cursor-pointer" color="white" />
        </Link>
        <button
          type="button"
          className="px-4 py-2 rounded text-white font-semibold bg-red-500"
        >
          Login
        </button>
      </div>
    </nav>
  );
}
