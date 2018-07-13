import rootReducer from './../../src/reducers/index';
import selectedPropertyReducer from './../../src/reducers/selected-property-reducer';
import propertyListReducer from './../../src/reducers/property-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
    masterPropertyList: {},
    selectedProperty: {}
  });
  test('Should contain propertyListReducer logic', () => {
    expect(store.getState().masterPropertyList).toEqual(propertyListReducer(undefined, { type: null }));
  });
});
  test('Should contain selectedPropertyReducer logic', () => {
    expect(store.getState().selectedProperty).toEqual(selectedPropertyReducer(undefined, { type: null }));
  });
});
