import React from "react";
import Nav from "../../Components/NavComponent/NavComponent";
import NewCollection from "../../Components/NewCollection/NewCollection";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import HomeCarouselComponent from "../../Components/HomeCarouselComponent/HomeCarouselComponent";
import HomeGallery from "../../Components/HomeGallery/HomeGallery";
export default function HomePage() {
  return (
    <div>
      <Nav />

      <HomeCarouselComponent />
      <main className="main">
        <div className="container">
          <NewCollection />
          <HomeGallery />
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}
