export const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export const countReducer = function(state = 0, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return state + 1;
    case TYPES.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default countReducer;
