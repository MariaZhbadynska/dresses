import React from "react";
import Nav from "../../Components/NavComponent/NavComponent";
import FavDresses from "../../Components/FavDresses/FavDresses.jsx";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";

export default function LikedPage() {
  return (
    <div>
      <Nav />

      <FavDresses />

      <hr />
      <FooterComponent />
    </div>
  );
}
