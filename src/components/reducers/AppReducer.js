import { ADD, EDIT, DELETE } from '../actions/AppActions'

export const appReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map(currentStateElement => {
        if (currentStateElement.id !== action.payload.id) {
          return currentStateElement;
        }
        return ({
          author: action.payload.author,
          comment: action.payload.comment,
          rate: action.payload.rate,
          id: currentStateElement.id,
        })
      });
    case DELETE:
      return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);

    default:
      console.warn(`Nie ma akcji typu: ${action.type}`)
      return state;
  }
}