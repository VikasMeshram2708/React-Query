import { Link } from "react-router-dom";

export default function Navbar() {
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
      <button
        type="button"
        className="px-4 py-2 rounded text-white font-semibold bg-red-500"
      >
        Login
      </button>
    </nav>
  );
}
