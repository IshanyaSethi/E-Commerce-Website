import React, { useState, useEffect } from "react";
import Layout from "./../components/layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from "./../fireconfig";
import { fireproducts } from "./../firecommerce-products";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Homepage() {
  const [products, setProducts] = useState([]);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getdata();
  }, []);

  async function addproducts() {
    fireproducts.map(async (product) => {
      try {
        await addDoc(collection(fireDB, "products"), product);
      } catch (error) {
        console.log(error);
      }
    });
  }

  async function getdata() {
    try {
      const users = await getDocs(collection(fireDB, "products"));
      const productsarray = [];
      users.forEach((doc) => {
        // console.log(data);
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsarray.push(obj);
      });
      setProducts(productsarray);
      console.log(productsarray);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addtoCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Layout>
      <button onClick={addproducts} className="btn btn-primary">
        Add data to firebase
      </button>
      <div className="container">
        <div className="row">
          {products.map((item) => {
            // const product = item.product;
            return (
              <div className="col-md-4">
                <div className="m-2 p-1 product position-relative">
                  <div className="product-content">
                    <p>{item.product.name}</p>
                    <div className="text-center">
                      <img
                        // src={product.img}
                        // alt=""
                        src={item.product.imageURL}
                        alt=""
                        // className="product-info-image"
                        className="product-img"
                      />
                    </div>
                  </div>
                  <div className="product-actions">
                    <h2>{item.product.price}</h2>
                    <div className="d-flex">
                      <button className="mx-2" onClick={() => addtoCart()}>
                        Add To Cart
                      </button>
                      <button
                        onClick={() => {
                          navigate(`./Productinfo/${item.id}`);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
export default Homepage;
