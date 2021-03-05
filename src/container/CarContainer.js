import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import CarItem from '../components/CarItem';
import { fetchCars, addFavourites, removeFavourites } from '../redux/actions';

function CarContainer({ carData, getCars }) {
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getCars();
    closeModal();
  }, []);

  const token = useSelector(state => state.user.token);
  const favState = useSelector(state => state.favourites);

  const handleFavourite = (id, favourit) => {
    const carInfo = {
      car_id: id,
    };

    if (favourit === 'Yes') {
      dispatch(removeFavourites(id));
      openModal();
    } else {
      dispatch(addFavourites(carInfo));
      openModal();
    }
    getCars();
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
            handleFavourite={() => handleFavourite(carInfo.id, carInfo.fav)}
          />
        )) }
        <Modal visible={visible} width="300" height="100" effect="fadeInUp" onClickAway={() => closeModal()}>
          <div className="modal-popup">
            <p className="text-center">{favState.message || favState.error}</p>
            <button type="button" className="btn-oval" onClick={() => closeModal()}>Close</button>
          </div>
        </Modal>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  carData: state.cars,
});

const mapDispatchToProps = dispatch => ({
  getCars: () => dispatch(fetchCars()),
});

CarContainer.propTypes = {
  carData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    cars: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
    token: PropTypes.string,
  }),
  getCars: PropTypes.func.isRequired,
};

CarContainer.defaultProps = {
  carData: {
    cars: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
