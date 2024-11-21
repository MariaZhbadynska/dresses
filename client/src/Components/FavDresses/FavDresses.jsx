import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavs } from "../../slices/FavsSlice";
import DressCard from "../Dress/Dress";

export default function FavDresses() {
  const dispatch = useDispatch();
  const dresses = useSelector((state) => state.favs.data);

  useEffect(() => {
    dispatch(fetchFavs());
  }, [dispatch]);

  return (
    <div className="view">
      <div className="container">
        <div className="view_text p-4">
          <p>
            Home/<span>Favorites</span>
          </p>
          <h3 id="titleView">Favorites</h3>
        </div>
        <div className="dress-list">
          {dresses.map((dress) => (
            <DressCard key={dress._id} dress={dress} />
          ))}
        </div>
      </div>
    </div>
  );
}
