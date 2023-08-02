import React, { useState } from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { remove } from '../Store/CardSlice'

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));

  };
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
            <Card.Text>USD {product.price}</Card.Text>
            <Button variant="primary">buy</Button>
            <Button
              variant="primary mt-2"
              onClick={() => handleRemove(product.id)}
            >
              remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cart