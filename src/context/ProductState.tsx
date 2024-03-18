import { ReactNode, useContext, useState } from "react";
import ProductContext from "./ProductContext";
import { Product } from "../interfaces/ProductInterface";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const ProductState = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = async (product: Product): Promise<Product[]> => {
    return new Promise((resolve) => {
      setProducts([...products, product]);
      resolve(products);
    });
  };

  const AddProductMutation = useMutation({
    mutationFn: addToCart,
    onError: () => {
      toast.error("Failed to add Item.");
    },
    onSuccess: () => {
      toast.success("Item added to cart.");
    },
  });

  const removeProduct = (productId: number): Promise<Product[]> => {
    return new Promise((resolve) => {
      const filteredProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(filteredProducts);
      resolve(filteredProducts);
    });
  };

  const RemoveProductMutation = useMutation({
    mutationFn: removeProduct,
    onError: () => {
      toast.error("Failed to Remove the Product.");
    },
    onSuccess: () => {
      toast.success("Item Removed.");
    },
  });

  const data = {
    myName: "Vikas",
    myAge: 23,
  };

  return (
    <ProductContext.Provider
      value={{ data, AddProductMutation, products, RemoveProductMutation }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;

export const UserProductsState = () => {
  const productState = useContext(ProductContext);
  if (!productState) {
    throw Error("ProductState must be wrapped in ProductsProvider");
  }

  return productState;
};
