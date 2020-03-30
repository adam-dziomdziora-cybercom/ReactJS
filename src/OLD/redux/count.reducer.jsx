import { fromJS, List } from 'immutable';

export const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  MODIFY: 'MODIFY',
  PARKING_EDIT_PLACE: 'PARKING_EDIT_PLACE',
};

const INITIAL_STATE = fromJS({
  counter: 0,
  name: 'Cybercom',
  places: fromJS([
    { id: 1, name: 'Place #1', occupied: false },
    { id: 2, name: 'Place #2', occupied: true },
    { id: 3, name: 'Place #3', occupied: false },
    { id: 4, name: 'Place #4', occupied: false },
    { id: 5, name: 'Place #5', occupied: true },
  ]),
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const countReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.INCREMENT: {
      const actualValue = state.get('counter', 0);
      const newState = state.set('counter', actualValue + 1);
      return newState;
    }
    case TYPES.DECREMENT: {
      const actualValue = state.get('counter', 0);
      const newState = state.set('counter', actualValue - 1);
      return newState;
    }
    case TYPES.MODIFY: {
      const actualValue = state.get('counter', 0);
      const actualName = state.get('name', '');

      const random = getRandomInt(80, 90);
      const randomizedChar = String.fromCharCode(random);
      const newName = actualName + randomizedChar;

      const newState = state
        .set('counter', actualValue + action.valueToModify)
        .set('name', newName);

      return newState;
    }
    case TYPES.PARKING_EDIT_PLACE: {
      const updatedPlace = action.data;
      const places = state.get('places', List());

      const placeIndex = places.findIndex(
        p => p.get('id', -1) === updatedPlace.id
      );
      if (placeIndex === -1) {
        return;
      }

      const newPlaces = places.set(placeIndex, fromJS(updatedPlace));
      const newState = state.set('places', newPlaces);
      return newState;
    }

    default:
      return state;
  }
};

export default countReducer;
