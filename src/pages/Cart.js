import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout";
function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };
  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  hrlo
                  {/* hrlo<img src={item.imageURL} height="80" width="80"></img> */}
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{FaTrash}</td>
                <td>
                  <FaTrash onClick={() => deleteFromCart(item)}></FaTrash>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
export default Cart;
