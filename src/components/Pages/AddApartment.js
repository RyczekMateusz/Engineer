import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { addOffer } from '../actions/AppActions'

const AddApartment = ({ offersName,
  cityName,
  districtName,
  fullAddres,
  rent,
  mediaInRent,
  id }) => {

  const dispatch = useDispatch()

  const [offersNameInput, setOffersNameInput] = useState('');
  const [cityNameInput, setCityNameInput] = useState('');
  const [districtNameInput, setDistrictNameInput] = useState('');
  const [fullAddresInput, setFullAddresInput] = useState('');
  const [rentInput, setRentInput] = useState(0);
  const [mediaInRentCheckbox, setMediaInRentCheckbox] = useState('false');


  const handleMediaChange = (event) => setMediaInRentCheckbox(event.target.checked);
  const handleEvent = (event) => { return (fnHandler) => fnHandler(event.target.value) }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newOffer = {
      id,
      offersName: offersNameInput,
      cityName: cityNameInput,
      districtName: districtNameInput,
      fullAddres: fullAddresInput,
      rent: Number(rentInput),
      mediaInRent: mediaInRentCheckbox,
    };

    dispatch(addOffer(newOffer));

    setOffersNameInput('');
    setCityNameInput('');
    setDistrictNameInput('');
    setFullAddresInput('');
    setRentInput(0);
    setMediaInRentCheckbox(false);
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Nazwa oferty: <input type="text" onChange={(event => handleEvent(event)(setOffersNameInput))} value={offersNameInput} /></label> <br />

        <label>Miasto: <input type="text" onChange={(event => handleEvent(event)(setCityNameInput))} value={cityNameInput} /></label> <br />

        <label>Dzielnica: <input type="text" onChange={(event => handleEvent(event)(setDistrictNameInput))} value={districtNameInput} /></label> <br />

        <label>Pełny adres: <input type="text" onChange={(event => handleEvent(event)(setFullAddresInput))} value={fullAddresInput} /></label> <br />

        <label>Czynsz: <input type="number" onChange={(event => handleEvent(event)(setRentInput))} value={rentInput} /></label> <br />

        <label>Media w cenie: <input type="checkbox" onChange={handleMediaChange} value={mediaInRentCheckbox} /></label> <br />



        <button>Dodaj oferte</button>
      </form>
    </div>
  );
}

export default AddApartment;