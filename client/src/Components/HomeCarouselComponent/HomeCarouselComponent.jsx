import React from "react";

export default function HomeCarouselComponent() {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="./../img/mainPhoto.png"
              className="photo-main w-100"
              alt="Весна - лето 2022"
            />
            <div className="carousel-caption">
              <span>Spring - Summer 2024</span>
              <h1>
                WITH LOVE,
                <br /> TO YOU
              </h1>
              <input id="catalog" type="button" value="Go to Catalog" />
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div id="imgs" className="d-flex">
              <img
                src="./../img/mainphoto-2.png"
                className="photo-main d-block w-50"
                alt="Spring 2022 Collection"
              />
              <img
                src="./../img/main-photo-3.png"
                className="photo-main d-block w-50"
                alt="Spring Collection Images"
              />
            </div>
            <div className="carousel-caption">
              <h1 className="text-dark">HELLO SPRING 2022</h1>
            </div>
          </div>
        </div>

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
      </div>
    </div>
  );
}
