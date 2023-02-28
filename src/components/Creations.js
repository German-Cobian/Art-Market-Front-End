import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { displayCreations } from '../redux/actions/creations';
import creationsReducer from '../redux/reducers/creations';

const Creations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayCreations());
  }, [dispatch]);

  const creations = useSelector((state) => state.creations);

  return (
    <div className="">
      <h2>Creations</h2>
      {creations.map((creation) => (
      <div key={creation.id + 1}>
        <img className="" src={creation.image_url} alt="creation-img" style={{ height: '50' }} />
        <p className="">{creation.image_url}</p>
        <p>{creation.artist}</p>
        <p>{creation.title}</p>
        <p>{creation.type_of_work}</p>
        <p>{creation.medium}</p>
        <p>{creation.dimensions}</p>
        <p>{creation.date_of_composition}</p>
        <p>{creation.art_category}</p>
        <p>{creation.country_of_origin}</p>
        <p>{creation.price}</p>
      </div>
      ))};
    </div>
  )
};

export default Creations;
