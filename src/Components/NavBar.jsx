import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

function NavBar() {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="m-2">cart Item: {items.length}</div>

      <Link to="/cart" className="m-2">
        Cart
      </Link>
      <Link to="/">Home</Link>
    </>
  );
}

export default NavBar;
