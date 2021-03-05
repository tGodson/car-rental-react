import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import CarItemContainer from '../container/CarItemContainer';

export default function CarItemDetail() {
  return (
    <Container>
      <CarItemContainer />
      <Footer />
    </Container>
  );
}
