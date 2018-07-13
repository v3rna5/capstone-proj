import selectedPropertyReducer from './selected-property-reducer';
import propertyListReducer from './property-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedProperty: selectedPropertyReducer,
  masterPropertyList: propertyListReducer
});

export default rootReducer;
