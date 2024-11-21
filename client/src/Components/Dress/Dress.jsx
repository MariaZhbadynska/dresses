import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../slices/FavsSlice";

const DressCard = ({ dress }) => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.data); 
  const isFav = favs.some((fav) => fav.name === dress.name); 


  const toggleFav = () => {
    if (isFav ) {
      dispatch(removeFav(dress._id));
    } else {
      dispatch(addFav(dress)); 
    }
  };

  return (
    <>
      <li className="itemss d-block justify-center new-collection_item col-12 col-sm-4 col-md-3 mb-3">
        <div className="imgg-container">
          <img
            src={dress.img}
            alt={dress.name}
            className="imgg d-block w-100"
          />
          <button 
            onClick={toggleFav} 
            className={`heart-link ${isFav ? "filled" : ""}`}
          >
          </button>
        </div>
        <Link to={`/dresses/${dress._id}`}>
          <div className="inf">
            <h4>{dress.name}</h4>
            <p>{dress.price} UAH</p>
            <button className="add">Додати </button>
          </div>
        </Link>
      </li>
    </>
  );
};

export default DressCard;
