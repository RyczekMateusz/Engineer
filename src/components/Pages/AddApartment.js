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

  const handleOfferNameChange = (event) => setOffersNameInput(event.target.value);
  const handleCityChange = (event) => setCityNameInput(event.target.value);
  const handleDistrictChange = (event) => setDistrictNameInput(event.target.value);
  const handleFullAddresChange = (event) => setFullAddresInput(event.target.value);
  const handleRentChange = (event) => setRentInput(event.target.value);
  const handleMediaChange = (event) => setMediaInRentCheckbox(event.target.checked);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(`Dodaje: ${offersNameInput}, ${cityNameInput}, ${districtNameInput}, ${fullAddresInput}, ${rentInput}, ${mediaInRentCheckbox}`);
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
        <label>Nazwa oferty: <input type="text" onChange={handleOfferNameChange} value={offersNameInput} /></label> <br />

        <label>Miasto: <input type="text" onChange={handleCityChange} value={cityNameInput} /></label> <br />

        <label>Dzielnica: <input type="text" onChange={handleDistrictChange} value={districtNameInput} /></label> <br />

        <label>Pełny adres: <input type="text" onChange={handleFullAddresChange} value={fullAddresInput} /></label> <br />

        <label>Czynsz: <input type="number" onChange={handleRentChange} value={rentInput} /></label> <br />

        <label>Media w cenie: <input type="checkbox" onChange={handleMediaChange} value={mediaInRentCheckbox} /></label> <br />



        <button>Dodaj oferte</button>
      </form>
    </div>
  );
}

export default AddApartment;