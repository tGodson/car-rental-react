import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function CarDetails({ car }) {
  const Carwrap = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${car.image}) center no-repeat;
    background-size: cover;
    padding: 30px;
    `;

  return (
    <>
      <Carwrap>
        <Navigation />
      </Carwrap>
      <section className="about-section">
        <h2 className="about-section__primary pb-4">
          { car.name }
        </h2>
        <h4 className="about-section__sub">
          <span className="badge badge-secondary">{ car.transmission }</span>
          {' '}
          {' '}
          <span className="badge badge-pill badge-success">
            AC -
            { car.ac }
          </span>
          {' '}
          <span className="badge badge-info">{ car.date_added }</span>
        </h4>
        <hr />
        <Link className="nav-link text-danger text-center" to="/cars">
          &larr; Back to Cars
        </Link>
      </section>
    </>
  );
}

CarDetails.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  ac: PropTypes.string.isRequired,
  date_added: PropTypes.string.isRequired,
};
