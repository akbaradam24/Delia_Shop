import React from "react";
import Navbar from "./navbar";
import "../Styling/home.scss";
import Chart from "chart.js/auto";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <h1>Welcome to Delia Shop</h1>
        <h2> Bingung mencari cara agar konten mu menarik ? </h2>
        <p>Dewasa ini banyak Seller yang mencoba untuk meningkatkan produktifitas dalam penjualan productnya namun sering seakli terkendala hal hal semacam:</p>
        <p>- Design</p>
        <p>- Caption</p>
        <p>- Waktu Publish</p>
        <p>membuat para seller minder sebelum berjualan alhasil mereka tidak percaya diri dan akhirya kembali menggunakan cara tradisional maka dari itu kami Delia Shop menawarkan paket menarik: </p>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Cara Jitu Markom High Class !</td>
              <td>Rp 99.000</td>
            </tr>
            <tr>
              <td>Kumpulan Design Free Royalty</td>
              <td>Rp 123.000</td>
            </tr>
            <tr>
              <td>Closing Anti Minggat</td>
              <td>Rp 75.000</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rp 297.000</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <h1>HANYA DENGAN Rp 297.000 Anda bisa membawa semua set yang anda butuh kan untuk menjadi reseller Jago Abad Ini !!</h1>
      </div>
    </div>
  );
}

export default Home;
