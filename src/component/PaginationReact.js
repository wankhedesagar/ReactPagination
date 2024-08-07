import React, { useEffect } from "react";

function PaginationReact() {
  const [products, setProducts] = useState([]);



  const fetchProducts = async () => {
    const res = await fetch(
      "https://dummyjson.com/products?limit=100"
    );
    const data = await res.json();
    console.log(data);
  }

  if (data && data.products) {
    setProducts(data.products);
    setTotalPages(Math.ceil(data.total / 10));
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
 
    </div>
  );
}

export default PaginationReact;
