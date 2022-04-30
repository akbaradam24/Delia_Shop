import React from "react";
import Navbar from "./navbar";
import "../Styling/home.scss";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <h1>Welcome to Delia Shop</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi iure vel quam fuga laborum, doloribus dolores ullam ducimus aliquid asperiores id voluptatum, quas earum vero optio dicta, molestias placeat?</p>
        <br />
        <table>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Book</td>
            <td>How to train your amet</td>
            <td>Rp.99.000</td>
          </tr>
          <tr>
            <td>Medicine</td>
            <td>Paracetamol</td>
            <td>Rp.23.000</td>
          </tr>
        </table>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis consequuntur incidunt dolore cum? Ex maxime, dignissimos saepe doloremque alias minus ratione nam excepturi ipsa illo atque repellendus dicta dolor laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi iure vel quam fuga laborum, doloribus dolores ullam ducimus aliquid asperiores id voluptatum, quas earum vero optio dicta, molestias placeat?</p>
        <br />

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis consequuntur incidunt dolore cum? Ex maxime, dignissimos saepe doloremque alias minus ratione nam excepturi ipsa illo atque repellendus dicta dolor laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi iure vel quam fuga laborum, doloribus dolores ullam ducimus aliquid asperiores id voluptatum, quas earum vero optio dicta, molestias placeat?</p>
        <br />
        <table></table>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis consequuntur incidunt dolore cum? Ex maxime, dignissimos saepe doloremque alias minus ratione nam excepturi ipsa illo atque repellendus dicta dolor laudantium.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi iure vel quam fuga laborum, doloribus dolores ullam ducimus aliquid asperiores id voluptatum, quas earum vero optio dicta, molestias placeat?</p>
        <br />

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis consequuntur incidunt dolore cum? Ex maxime, dignissimos saepe doloremque alias minus ratione nam excepturi ipsa illo atque repellendus dicta dolor laudantium.</p>
      </div>
    </div>
  );
}

export default Home;
