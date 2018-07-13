import React from 'react';
import PropTypes from 'prop-types';

function PropertyDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedProperty.names} - {props.selectedProperty.location}</h1>
      <h2>Submitted {props.selectedProperty.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedProperty.issue}</em></h4>
      <hr/>
    </div>
  );
}

PropertyDetail.propTypes = {
  selectedProperty: PropTypes.object
};

export default PropertyDetail;
