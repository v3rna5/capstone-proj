import React from 'react';
import PropTypes from 'prop-types';

function PropertyDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedProperty.propname} - {props.selectedProperty.location}</h1>
      <h2>Submitted {props.selectedProperty.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedProperty.description}</em></h4>
      <hr/>
    </div>
  );
}

PropertyDetail.propTypes = {
  selectedProperty: PropTypes.object
};

export default PropertyDetail;
