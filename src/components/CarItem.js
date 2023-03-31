import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

export default function CarItem({ car, handleFavourite }) {
  return (

    <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={car.image} />
      <Card.Body>
        <Card.Title className="font-weight-bold">
          <BsHeartFill size={20} color={car.fav === 'Yes' ? 'red' : 'gray'} title="Add to Favourite" onClick={handleFavourite} />
          {' '}
          { car.name }
        </Card.Title>
        <Card.Text>
          <span className="badge badge-secondary">{ car.transmission }</span>
          {' '}
          {' '}
          <span className="badge badge-pill badge-success">
            AC -
            { car.ac }
          </span>
          {' '}
          <span className="badge badge-info">{ car.date_added }</span>
        </Card.Text>
        <Link to={`cars/${car.id}`} className="btn-oval p-2">Learn more</Link>
      </Card.Body>
    </Card>

  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    ac: PropTypes.string.isRequired,
    fav: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
  }).isRequired,
  handleFavourite: PropTypes.func.isRequired,
};
