const Show = ({ selectedProducts, price }) => {
  // console.log(selectedProducts);
  return (
    <div className="flex justify-between my-6">
      <h1 className="text-2xl font-semibold">Product</h1>
      <p className="text-2xl font-semibold">Cart: {selectedProducts.length}</p>
      <h6 className="text-2xl font-semibold">$ {price}</h6>
    </div>
  );
};

export default Show;
