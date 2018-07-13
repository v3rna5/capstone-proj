import React from 'react';
import PropTypes from 'prop-types';
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import { connect } from 'react-redux';

function Admin(props){
  let optionalSelectedPropertyContent = null;
  if (props.selectedProperty.length > 0){
    optionalSelectedPropertyContent =  <PropertyDetail selectedProperty={props.propertyList[props.selectedProperty]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedPropertyContent}
      <PropertyList
        propertyList={props.propertyList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  propertyList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedProperty: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedProperty: state.selectedProperty,
    propertyList: state.masterPropertyList
  };
};

export default connect(mapStateToProps)(Admin);
