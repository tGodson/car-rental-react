import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_dark.png';

export default function Footer() {
  return (

    <section className="about-section footer">
      <h2 className="about-section__primary">
        <Link className="nav-link white" to="/">
          <img className="logo" src={logo} alt="Car Rentals" />
        </Link>
      </h2>
      <p>
        Car Rental Cameroon
        {' '}
        <br />
        +237 672-526-097
      </p>
      <p>
        Car Rentals
        { ' ' }
        {new Date().getFullYear()}
        . All rights reserved
      </p>
    </section>

  );
}
