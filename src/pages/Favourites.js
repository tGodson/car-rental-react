import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import FavouritesContainer from '../container/FavouritesContainer';

export default function Favourites() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <FavouritesContainer />
      <Footer />
    </Container>
  );
}
