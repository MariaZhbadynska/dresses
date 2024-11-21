import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";
import Nav from "../NavComponent/NavComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchDress } from "../../slices/DressesSlice";
import { fetchFav } from "../../slices/FavsSlice";

export default function LookDressPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const dress = useSelector((state) => state.dresses.selectedDress);
  const dressFav = useSelector((state) => state.favs.selectedDress);

  const [bigImage, setBigImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  const dressData = dress || dressFav;

  useEffect(() => {
    dispatch(fetchDress(id));
    dispatch(fetchFav(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (dressData?.colors) {
      const defaultColor = Object.keys(dressData.colors)[0];
      setSelectedColor(defaultColor);
      setBigImage(dressData.colors[defaultColor]?.images[0]);
    }
  }, [dressData]);

  const handleSmallImageClick = (imageUrl) => setBigImage(imageUrl);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBigImage(dressData.colors[color]?.images[0]);
  };

  const handleAddToCart = () => {
    console.log("Item added to cart:", dressData?.name);
  };

  return (
    <div>
      <Nav />
      <div className="view">
        <div className="container">
          <div className="view_text p-4">
            <p>
              Home / <span>Clothing</span>
            </p>
            <h3 id="titleView">{dressData?.name}</h3>
          </div>

          <ul className="row list-unstyled topsection-dress">
            {" "}
            <li className="col-md-8">
              <div className="d-flex flex-column flex-md-row">
                <div className="imgg-container view-imgg-container col-md-10 col-12">
                  <img
                    src={bigImage || "default_image_url_here"}
                    className="img-onview view-img img-fluid"
                    alt={dressData?.name || "Dress image"}
                  />
                </div>
                <div
                  id="smallImgs"
                  className="col-md-2 col-12 d-md-block d-flex"
                >
                  {dressData?.colors &&
                    Object.entries(dressData.colors).map(
                      ([colorKey, { images }]) => (
                        <div key={colorKey}>
                          {images?.map((img, index) => (
                            <img
                              key={`${colorKey}-${index}`}
                              src={img}
                              alt={`small-img-${index}`}
                              className="img-onview img-fluid"
                              onClick={() => handleSmallImageClick(img)}
                            />
                          ))}
                        </div>
                      )
                    )}
                </div>
              </div>
            </li>
            <li className="col-md-4">
              <h4 id="view-title">{dressData?.name}</h4>
              <h6 id="view-price">{dressData?.price} UAH</h6>

              <div id="colors">
                <p id="color">
                  Color: <span id="view-colorNow">{selectedColor}</span>
                </p>
                <div id="view-colors">
                  {dressData?.colors &&
                    Object.keys(dressData.colors).map((color) => (
                      <div
                        key={color}
                        id="view-color_one"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                      ></div>
                    ))}
                </div>
              </div>

              <div className="dropdown mt-3">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  id="view_size-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select size
                </button>
                <ul className="dropdown-menu">
                  {["XS", "S", "M", "L"].map((size) => (
                    <li>
                      <a className="dropdown-item" href="#">
                        {size}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <input
                type="button"
                value="Add to Cart"
                id="view-add"
                className="btn btn-primary mt-3"
                onClick={handleAddToCart}
              />

              <button
                className="btn btn-link mt-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
              >
                Delivery, Exchange, Returns
              </button>

              <div
                className="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="staticBackdropLabel">
                    Information
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div>
                    Details about delivery, exchange, and return policies.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
