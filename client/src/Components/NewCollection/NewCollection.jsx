import React, { useEffect } from "react";
import Dress from "../Dress/Dress";
import { useDispatch, useSelector } from "react-redux";
import { fetchDresses } from "../../slices/DressesSlice";

export default function NewCollection() {
  const dispatch = useDispatch();

  const dresses = useSelector((state) => state.dresses.data);

  useEffect(() => {
    dispatch(fetchDresses());
  }, [dispatch]);

  const newCollectionDresses = dresses.filter(
    (dress) => dress.type === "newCollection"
  );

  return (
    <div>
      <h4 className="new-col_title titles">New collection</h4>

      <ul className="row col new-collection list-unstyled">
        <div className="row tops-img_section">
          {newCollectionDresses.map((dress) => (
            <Dress key={dress.id} dress={dress} />
          ))}
        </div>
      </ul>
    </div>
  );
}
