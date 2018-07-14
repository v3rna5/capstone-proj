import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';


function Property(props){

    function handleSavingSelectedProperty(propertyId){
      const { dispatch } = props;
      const action = {
        type: c.SELECT_PROPERTY,
        propertyId: propertyId
      };
      dispatch(action);
      }

  const propertyInformation =
    <div>
      <h3>{props.location} - {props.propname}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedProperty(props.propertyId);}}>
        {propertyInformation}
      </div>
    );
  } else {
    return (
      <div>
        {propertyInformation}
      </div>
    );
  }
}

Property.propTypes = {
  propname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.sring,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  propertyId: PropTypes.string.isRequired
};

export default connect()(Property);
