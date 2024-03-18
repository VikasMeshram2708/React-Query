import { createContext } from "react";
import { Product } from "../interfaces/ProductInterface";
import { UseMutationResult } from "@tanstack/react-query";

export interface ProductContextData {
  data: { myName: string; myAge: number };
  AddProductMutation: UseMutationResult<Product[], Error, Product, unknown>;
  RemoveProductMutation: UseMutationResult<Product[], Error, number, unknown>;
  products: Product[];
}

const ProductContext = createContext<ProductContextData | null>(null);

export default ProductContext;
