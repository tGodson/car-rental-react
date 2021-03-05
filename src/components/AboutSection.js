import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ride from '../imgs/ride.jpg';

export default function AboutSection() {
  return (
    <section className="about-section">
      <h4 className="about-section__sub">Confort is Priceless</h4>
      <h2 className="about-section__primary pb-4">
        Comfortable rides from reliable and experienced people
      </h2>
      <Row className="mt-5">
        <Col sm={6}>
          <h4 className="about-section__left-title">
            A ride is always available for you 24/7
          </h4>
          <p className="about-section__desc">
            We are a car rental service available to you 24/7. We provide the most
            confortable and cheapest rides in the country. Hook us up for your trips and
            get the best confort can offer.
          </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <img src={ride} className="img-fluid" alt="ride" />
        </Col>
      </Row>
    </section>
  );
}
