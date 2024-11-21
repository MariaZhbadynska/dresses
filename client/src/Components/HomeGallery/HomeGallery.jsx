import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDresses } from '../../slices/DressesSlice'; 
import Dress from '../Dress/Dress'; 

export default function HomeGallery() {
  const dispatch = useDispatch();
  const dresses = useSelector((state) => state.dresses.data);

  useEffect(() => {
    dispatch(fetchDresses()); 
  }, [dispatch]);

  const galleryDresses = dresses.filter((dress) => dress.type === 'gallery')

  return (
    <div>
      <div className="section-three d-flex">
        <h3 className="section-three_title col-6">Inspired by Spring</h3>
        <div className="section-three_text col-6">
          <p>
            The diverse and rich experience of frameworks and training centers
            contributes to the preparation and implementation of development forms. 
            On the other hand, the realization of planned strategies...
          </p>
          <a className="about-brand_link" href="#">
            About the Brand
          </a>
        </div>
      </div>

      <div className="row tops-img_section">
        {galleryDresses.map((dress) => (
          <Dress key={dress.id} dress={dress} />
        ))}
      </div>
    </div>
  );
}
