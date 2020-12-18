import React from 'react';
//import { useDispatch } from 'react-redux';

const Element = ({ offersName, cityName, districtName, fullAddres, rent, mediaInRent, id }) => {
  return (
    <li>
      <p>Nazwa oferty: {offersName}</p>
      <p>Miasto: {cityName}</p>
      <p>Dzielnica: {districtName}</p>
      <p>Pełny adres: {fullAddres}</p>
      <p>Czynsz: {rent}</p>
      <p>Media wliczone w czynsz?: {mediaInRent ? 'TAK' : 'NIE'}</p>
    </li>
  );
}

export default Element;