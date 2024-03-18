import { ReactNode, useContext, useState } from "react";
import ProductContext from "./ProductContext";
import { Product } from "../interfaces/ProductInterface";
import toast from "react-hot-toast";

const ProductState = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setProducts([...products, product]);
    return toast.success("Item Added to Cart.");
  };

  const removeProduct = (productId: number) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(filteredProducts);
    return toast.success("Product was removed from your cart.");
  };

  const data = {
    myName: "Vikas",
    myAge: 23,
  };

  return (
    <ProductContext.Provider value={{ data, addToCart, products , removeProduct}}>
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
