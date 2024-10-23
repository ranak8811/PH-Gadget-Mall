import { useEffect, useState } from "react";
import "./AllProducts.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import PropTypes from "prop-types";

const AllProducts = ({ handleSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // console.log(products);
  return (
    <div>
      <h1>AllProducts</h1>
      {products.map((product) => (
        <SingleProduct
          key={product.id}
          product={product}
          handleSelectProduct={handleSelectProduct}
        ></SingleProduct>
      ))}
    </div>
  );
};

AllProducts.propTypes = {
  handleSelectProduct: PropTypes.func.isRequired,
};

export default AllProducts;
