import "./SingleProduct.css";

const SingleProduct = ({ product, handleSelectProduct }) => {
  const { id, name, image, description, price, isFeatured } = product;
  //   console.log(product);
  return (
    <div className="cardd">
      <img className="img" src={image} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="cat-price">
        <p>${price}</p>
        <p>{isFeatured ? "Feature category" : "not category"}</p>
      </div>

      <button onClick={() => handleSelectProduct(product)} className="btn">
        Add to cart
      </button>
    </div>
  );
};

export default SingleProduct;
