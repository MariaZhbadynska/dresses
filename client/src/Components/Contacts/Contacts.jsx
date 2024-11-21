import React, { useEffect } from 'react';
import Nav from '../NavComponent/NavComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

export default function Contacts() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwPrFHf7ocdSNu2XRorp-pKq15iHD8vzk&libraries=places&callback=initMap`;
    document.head.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 49.842957, lng: 24.031111 }, 
        zoom: 12,
      });
    };
  }, []);

  return (
    <div>
      <Nav />
      <div className="view">
        <div className="container">
          <div className="view_text p-4">
            <p>Home/<span>Contacts</span></p>
            <h3 id="titleView">Contact Us</h3>
          </div>
          <div className="row">
            <div className="contact-inform col-12 col-md-6">
              <div className="contact-tel">
                <h6>Phone</h6>
                <p>+380 99 365 2353</p>
              </div>
              <div className="contact-email">
                <h6>E-mail</h6>
                <p>online_store@gmail.com</p>
              </div>
              <div className="contact-adress">
                <h6>Showroom Address</h6>
                <p>
                  Lviv, Volodymyr Velikiy Street, 32".
                  <br />
                  Working Hours: Mon-Sun 12:00 PM – 9:00 PM
                </p>
              </div>

              <div className="contact-ideas">
                <form>
                  <input type="text" name="name" id="name" placeholder="Name*" aria-label="Name" required />
                  <input type="tel" name="phone" id="phone" placeholder="Phone*" aria-label="Phone" required />
                  <p className="contact-ideas_inf">Fields marked with * are required</p>
                  <p className="contact-ideas_inf2">
                    By clicking "Submit," I agree to the privacy policy and processing of personal data
                  </p>
                  <button type="submit" id="view-add" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div id="contact-map" className="col col-12 col-md-6">
              <div id="map" style={{ width: '100%', height: '400px' }}></div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
