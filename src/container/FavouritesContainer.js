import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import CarItem from '../components/CarItem';
import { fetchFavourites } from '../redux/actions';

function FavouritesContainer({ carData, getCars }) {
  useEffect(() => {
    getCars();
  }, []);
  const token = useSelector(state => state.user.token);

  const handleFavourite = id => {
    // eslint-disable-next-line no-unused-vars
    const carInfo = {
      car_id: id,
    };
  };

  // eslint-disable-next-line no-nested-ternary
  return carData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="orange" />
    </h2>
  ) : token === undefined || token === 'undefined' ? (
    <h2 className="text-center pt-5 white">
      { carData.error }
      <Redirect to="/login" />
    </h2>
  ) : (
    <Container className="bg-dark">
      <div className="mt-5 d-flex flex-wrap justify-content-center">
        { carData.cars.map(carInfo => (
          <CarItem
            key={carInfo.id}
            car={carInfo}
            handleFavourite={() => handleFavourite(carInfo.id)}
          />
        )) }
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  carData: state.getFavs,
});

const mapDispatchToProps = dispatch => ({
  getCars: () => dispatch(fetchFavourites()),
});

FavouritesContainer.propTypes = {
  carData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    cars: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
    token: PropTypes.string,
  }),
  getCars: PropTypes.func.isRequired,
};

FavouritesContainer.defaultProps = {
  carData: {
    cars: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesContainer);
