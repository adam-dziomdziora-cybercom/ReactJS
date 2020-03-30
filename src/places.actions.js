import { TYPES } from './OLD/redux/count.reducer';

export const editPlace = place => {
  return {
    type: TYPES.PARKING_EDIT_PLACE,
    data: place,
  };
};
