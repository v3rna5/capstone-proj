import propertyListReducer from './../../src/reducers/property-list-reducer';
import Moment from 'moment';
import c from './../../src/constants';

describe('propertyListReducer', () => {

  let action;
  const samplePropertyData = {
    names : 'Ryan & Aimen',
    location : '4b',
    issue : 'Jest is being a diva and won\'t work with Webpack!',
    timeOpen : 1500000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(propertyListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new property data to masterPropertyList', () => {
    const { names, location, issue, timeOpen, id } = samplePropertyData;
    action = {
      type: c.ADD_PROPERTY,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id
    };
    expect(propertyListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
  });

  test('New property should include Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = samplePropertyData;
    action = {
      type: c.ADD_PROPERTY,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(propertyListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

  test('Should add freshly-calculated Moment-formatted wait time to property entry', () => {
    const { names, location, issue, timeOpen, id } = samplePropertyData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(propertyListReducer({ [id] : samplePropertyData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

});
