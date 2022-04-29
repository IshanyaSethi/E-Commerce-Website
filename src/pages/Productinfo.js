import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import fireDB from "./../fireconfig";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { fireproducts } from "./../firecommerce-products";
import { useParams } from "react-router-dom";

function Productinfo() {
  const [product, setProduct] = useState([]);

  const params = useParams();
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    try {
      const producttemp = await getDoc(
        doc(collection(fireDB, "products", params.productid))
      );
      setProduct(producttemp.data());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      {product && (
        <div>
          hhh
          <p>
            <b>{product.name} </b>
          </p>
          <img src={product.imageURL} alt="" className="product-image" />
          <hr></hr>
        </div>
      )}
    </Layout>
  );
}
export default Productinfo;
