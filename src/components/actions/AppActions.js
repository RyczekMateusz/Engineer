export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';


export const addOffer = ({ offersName, cityName, districtName, fullAddres, rent, mediaInRent, id }) => ({
  type: ADD,
  payload: {
    offersName,
    cityName,
    districtName,
    fullAddres,
    rent,
    mediaInRent,
    id: Math.floor(Math.random() * 2137),
  }
})

export const deleteOffer = (id) => ({
  type: DELETE,
  payload: {
    id,
  }
});

export const editOffer = ({ offersName, cityName, districtName, fullAddres, rent, mediaInRent, id }) => ({
  type: EDIT,
  payload: {
    offersName,
    cityName,
    districtName,
    fullAddres,
    rent,
    mediaInRent,
    id,
  }
})