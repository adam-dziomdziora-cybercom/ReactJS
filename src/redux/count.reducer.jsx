export const TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  MODIFY: 'MODIFY',
};

export const countReducer = function(state = 0, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return state + 1;
    case TYPES.DECREMENT:
      return state - 1;
    case TYPES.MODIFY:
      return state + action.valueToModify;

    default:
      return state;
  }
};

export default countReducer;
