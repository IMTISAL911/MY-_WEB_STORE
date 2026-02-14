export const fetchProductsApi = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export const fetchProductByIdApi = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
