import React from 'react';
import Property from './Property';
import PropTypes from 'prop-types';

function PropertyList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.propertyList).map(function(propertyId) {
        var property = props.propertyList[propertyId];
        return <Property names={property.names}
          location={property.location}
          issue={property.issue}
          formattedWaitTime={property.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={propertyId}
          propertyId={propertyId}/>;

      })}
    </div>
  );
}

PropertyList.propTypes = {
  propertyList: PropTypes.object,
  currentRouterPath: PropTypes.string,

};

export default PropertyList;
