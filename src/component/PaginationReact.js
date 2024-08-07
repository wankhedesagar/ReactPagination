import React, { useEffect } from "react";

function PaginationReact() {


  const fetchProducts = async () => {
    const res = await fetch(
      "https://dummyjson.com/products?limit=100"
    );
    const data = await res.json();
    console.log(data);
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
