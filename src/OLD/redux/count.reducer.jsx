import { fromJS } from 'immutable';

export const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  MODIFY: 'MODIFY',
};

const INITIAL_STATE = fromJS({
  counter: 0,
  name: 'Cybercom',
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

    default:
      return state;
  }
};

export default countReducer;
