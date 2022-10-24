import React from 'react';
import { Row, Col } from 'react-bootstrap';
import car from '../imgs/feature-ride.png';

export default function FeatureSection() {
  return (
    <section className="about-section feature-section">
      <Row className="mt-2">
        <Col sm={6}>
          <img src={car} className="img-fluid" alt="ride" />
        </Col>
        <Col sm={6} className=" info">
          <h4 className="about-section__left-title ">
            Best rides for your trips
          </h4>
          <p className="about-section__desc">
            More than hundreds of rides at your disposal. Only the best and checked with owners.
            We will find best place for you and conditions for a safe parking.
          </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
      </Row>
    </section>
  );
}
