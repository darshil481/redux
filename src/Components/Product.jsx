import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { add } from "../Store/CardSlice";
import { useDispatch,useSelector } from "react-redux";
import { fetchData } from "../Store/ProdcutSlice";
import { statuses } from "../Store/ProdcutSlice";

const Product = () => {
  //const [products, setProducts] = useState([]);

  const dispatch=useDispatch();
  const {data:products,status}=useSelector((state)=>state.product)

  const handleAdd=(product)=>{
        dispatch(add(product));
        
  }
  
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchData();
    dispatch(fetchData());
  }, []);
  if (status == statuses.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status == statuses.ERROR) {
    return <h2>Something want wrong...</h2>;
  }
  return (
    <div className="productWrapper d-flex flex-wrap">
      {products.map((product) => (
        <Card
          key={product.id}
          className="card mb-3 d-flex align-items-center text-break border-0"
          style={{ width: "20%" }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "200px ", height: "200px" }}
            className="card-img-top"
          />
          <Card.Body className="text-break d-flex flex-column justify-content-between ">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>USD ${product.price} </Card.Text>
            <Button onClick={() => handleAdd(product)} variant="primary">
              Add Card
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Product;
