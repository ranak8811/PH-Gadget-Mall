import PropTypes from "prop-types";
const Cart = ({ selectedProducts, handleDelete }) => {
  // console.log(selectedProducts);
  return (
    <div>
      {selectedProducts.map((product) => (
        <div key={product.id}>
          <div className="flexx">
            <img className="selected-img" src={product.image} alt="" />
            <p>{product.name}</p>
            <button onClick={() => handleDelete(product.id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  selectedProducts: PropTypes.array.isRequired,
};

export default Cart;
