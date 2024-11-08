import ProductContext from "../../../store/product-context";
import { useContext } from "react";
import ProductList from "./ProductList";

const HomeProduct = () => {
  const { productData } = useContext(ProductContext);
  const filteredProducts = productData
    ?.filter((product) => product.class == null)
    .slice(0, 8);


  return (
    <>
      <h1 style={{ textAlign: "center", }}>Popular Product</h1>
      <ProductList productData={filteredProducts} />
    </>
  );
};

export default HomeProduct;
