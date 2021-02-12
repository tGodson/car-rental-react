import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import CarDetails from '../components/CarDetails';
import { fetchCarItem } from '../redux/actions';

function CarItemContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const carItem = useSelector(state => state.carItem);
  const loading = useSelector(state => state.carItem.loading);
  useEffect(() => {
    dispatch(fetchCarItem(id));
  }, []);

  return loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="white" />
    </h2>
  ) : (
    <CarDetails car={carItem.car} />
  );
}

export default CarItemContainer;
