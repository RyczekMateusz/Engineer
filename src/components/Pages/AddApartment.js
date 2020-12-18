import React, { useState } from 'react';

const AddApartment = () => {

  const [offersNameInput, setOffersNameInput] = useState();
  const [cityNameInput, setCityNameInput] = useState();
  const [districtNameInput, setDistrictNameInput] = useState();
  const [fullAddresInput, setFullAddresInput] = useState();
  const [rentInput, setRentInput] = useState();
  const [mediaInRentCheckbox, setMediaInRentCheckbox] = useState('false');

  const handleOfferNameChange = (event) => setOffersNameInput(event.target.value);
  const handleCityChange = (event) => setCityNameInput(event.target.value);
  const handleDistrictChange = (event) => setDistrictNameInput(event.target.value);
  const handleFullAddresChange = (event) => setFullAddresInput(event.target.value);
  const handleRentChange = (event) => setRentInput(event.target.value);
  const handleMediaChange = (event) => setMediaInRentCheckbox(event.target.value);

  return (
    <div>
      <form onSubmit="">
        <label>Nazwa oferty: <input type="text" onChange={handleOfferNameChange} value={offersNameInput} /></label>

        <label>Miasto: <input type="text" onChange={handleCityChange} value={cityNameInput} /></label>

        <label>Dzielnica: <input type="text" onChange={handleDistrictChange} value={districtNameInput} /></label>

        <label>Pełny adres: <input type="text" onChange={handleFullAddresChange} value={fullAddresInput} /></label>

        <label>Czynsz: <input type="number" onChange={handleRentChange} value={rentInput} /></label>
        <label>Media w cenie: <input type="checkbox" onChange={handleMediaChange} value={mediaInRentCheckbox} /></label>
        <button>Dodaj oferte</button>
      </form>
    </div>
  );
}

export default AddApartment;