import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import c from './../constants';

function NewPropertyForm(props){
  let _propname = null;
  let _location = null;
  let _description = null;

  function handleNewPropertyFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_PROPERTY,
      id: v4(),
      propname: _propname.value,
      location: _location.value,
      description: _description.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _propname.value = '';
    _location.value = '';
    _description.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPropertyFormSubmission}>
        <input
          type='text'
          id='propname'
          placeholder='Property Name'
          ref={(input) => {_propname = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='description'
          placeholder='Describe your description.'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default connect()(NewPropertyForm);
