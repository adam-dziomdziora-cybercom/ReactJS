export const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  MODIFY: 'MODIFY',
};

const INITIAL_STATE = {
  counter: 0,
  name: 'Cybercom',
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const countReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.INCREMENT: {
      const newState = { ...state };
      newState.counter += 1;
      return newState;
    }
    case TYPES.DECREMENT: {
      const newState = { ...state };
      newState.counter -= 1;
      return newState;
    }
    case TYPES.MODIFY: {
      const newState = { ...state };
      newState.counter += action.valueToModify;

      const random = getRandomInt(80, 90);
      const randomizedChar = String.fromCharCode(random);
      newState.name += randomizedChar;

      return newState;
    }

    default:
      return state;
  }
};

export default countReducer;
