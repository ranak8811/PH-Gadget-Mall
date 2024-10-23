import { useState } from "react";
import "./App.css";
import AllProducts from "./components/AllProducts/AllProducts";
import CardContainer from "./components/CadContainer/CardContainer";
import Navbar from "./components/Header/Navbar";
import Show from "./components/Show/Show";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [price, setPrice] = useState(0);

  const handleSelectProduct = (product) => {
    // console.log(product);
    const isExist = selectedProducts.find((p) => p.id === product.id);
    // console.log(isExist);

    if (isExist) {
      alert("Selected product already added before");
    } else {
      const newProduct = [...selectedProducts, product];
      setSelectedProducts(newProduct);
      handleIncreasedPrice(product.price);
    }
  };

  // console.log(selectedProducts);

  // console.log(isActive);

  const handleIsActiveStatus = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  // console.log(isActive);

  const handleDelete = (id) => {
    // console.log(id);
    const remainingProducts = selectedProducts.filter((p) => p.id !== id);
    setSelectedProducts(remainingProducts);
    handleDeletePrice(id);
  };

  const handleIncreasedPrice = (newProductPrice) => {
    setPrice(price + newProductPrice);
  };

  const handleDeletePrice = (id) => {
    const product = selectedProducts.find((p) => p.id === id);
    setPrice(price - product.price);
  };

  return (
    <div className="container mx-auto px-4">
      <Navbar></Navbar>
      <Show selectedProducts={selectedProducts} price={price}></Show>
      <div className="flexx">
        <AllProducts handleSelectProduct={handleSelectProduct}></AllProducts>
        <CardContainer
          isActive={isActive}
          handleIsActiveStatus={handleIsActiveStatus}
          selectedProducts={selectedProducts}
          handleDelete={handleDelete}
        ></CardContainer>
      </div>
    </div>
  );
}

export default App;
