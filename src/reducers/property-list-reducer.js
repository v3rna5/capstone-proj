import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_PROPERTY:
    return action.propertyId;
  default:
    return state;
  }
};
