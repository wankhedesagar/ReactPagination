import React, { useEffect, useState } from "react";

function PaginationReact() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https:dummyjson.com/products?limit=100");
      const data = await res.json();
      console.log(data);

      if (data && data.products) {
        setProducts(data.products);
        setPage(1);
      }
    };
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const previousClick = async () => {
    const res = await fetch("https:dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setPage(page - 1);
      setProducts(data.products);
    }
  };
  const nextClick = async () => {
    const res = await fetch("https:dummyjson.com/products?limit=100");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setPage(page + 1);
    }
  };

  return (
    <React.Fragment>
      <div className="products">
        {products.slice(page * 10 - 10, page * 10).map((prod) => {
          return (
            <span key={prod.id} className="products__single">
             <img src={prod.thumbnail} alt={prod.title} />
              <h2>{prod.title}</h2>
              <h3>{prod.brand}</h3>
              <div className="section">
              <span>{prod.category}</span>
              <p>₹{prod.price}</p>
              <p>⭐{prod.rating}</p>
              </div>
             

            </span>
          );
        })}
      </div>

      <div className="pagination">
        {/* <span className={page > 1 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page - 1)}>⬅️</span> */}
        <button
          className={page > 1 ? "" : "pagination__disable"}
          onClick={previousClick}
        >
          ⬅️
        </button>

        {[...Array(products.length / 10)].map((_, i) => {
          return (
            <button
              className={page === i + 1 ? "pagination__selected" : ""}
              onClick={() => selectPageHandler(i + 1)}
              key={i}
            >
              {i + 1}
            </button>
          );
        })}

        {/* <span className={page < products.length / 10 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page + 1)}>➡️</span> */}
        <button
          className={page < products.length / 10 ? "" : "pagination__disable"}
          onClick={nextClick}
        >
          ➡️
        </button>
      </div>
    </React.Fragment>
  );
}

export default PaginationReact;
