import About from "../About/About";
import Cart from "../Cart/Cart";
import "./CardContainer.css";
import PropTypes from "prop-types";

const CardContainer = ({
  isActive,
  handleIsActiveStatus,
  selectedProducts,
  handleDelete,
}) => {
  //   console.log(handleIsActiveStatus);
  //   console.log(isActive);
  return (
    <div>
      <h1>Card container</h1>
      <div className="flexx">
        <div
          onClick={() => handleIsActiveStatus("cart")}
          className={`${isActive.cart ? "btnn activee" : "btnn"}`}
        >
          CART
        </div>

        <div
          onClick={() => handleIsActiveStatus("about")}
          className={`${isActive.cart ? "btnn" : "btnn activee"}`}
        >
          About
        </div>
      </div>
      {isActive.cart ? (
        <Cart
          selectedProducts={selectedProducts}
          handleDelete={handleDelete}
        ></Cart>
      ) : (
        <About></About>
      )}
    </div>
  );
};

CardContainer.propTypes = {
  isActive: PropTypes.object.isRequired,
  handleIsActiveStatus: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  selectedProducts: PropTypes.array.isRequired,
};

export default CardContainer;
