import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { propname, location, description, price, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
    case c.ADD_PROPERTY:
    newState = Object.assign({}, state, {
      [id]: {
        propname: propname,
        location: location,
        description: description,
        price: price,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

    case c.UPDATE_TIME:
    const newProperty = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newProperty
    });
    return newState;

    default:
    return state;
  }
};
