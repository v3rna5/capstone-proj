import selectedPropertyReducer from './../../src/reducers/selected-property-reducer';
import c from './../../src/constants';

describe("selectedPropertyReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedPropertyReducer({}, { type: null })).toEqual({});
  });

  test('Should record which property has been selected by user', () => {
    expect(selectedPropertyReducer({}, { type: c.SELECT_PROPERTY, propertyId: 1 })).toEqual(1);
  });

});
