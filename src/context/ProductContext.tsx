import { createContext } from "react";
import { Product } from "../interfaces/ProductInterface";

export interface ProductContextData {
  data: { myName: string; myAge: number };
  addToCart: (product: Product) => void;
  products: Product[];
  removeProduct: (productId: number) => void
}

const ProductContext = createContext<ProductContextData | null>(null);

export default ProductContext;
