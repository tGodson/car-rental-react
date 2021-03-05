import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CarContainer from '../container/CarContainer';

export default function Cars() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <CarContainer />
      <Footer />
    </Container>
  );
}
