import React from 'react';
import Header from './Header';
import PropertyList from './PropertyList';
import NewPropertyControl from './NewPropertyControl';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import c from './../constants';

class App extends React.Component {
  //
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedProperty: nullP
  //   };
  //   this.handleChangingSelectedProperty = this.handleChangingSelectedProperty.bind(this);
  // }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePropertyElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePropertyElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterPropertyList).map(propertyId => {
      const property = this.props.masterPropertyList[propertyId];
      const newFormattedWaitTime = property.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: propertyId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    // var newMasterPropertyList = Object.assign({}, this.state.masterPropertyList);
    // Object.keys(newMasterPropertyList).forEach(propertyId => {
    //   newMasterPropertyList[propertyId].formattedWaitTime = (newMasterPropertyList[propertyId].timeOpen).fromNow(true);
    // });
    // this.setState({masterPropertyList: newMasterPropertyList});
  });
}

  // handleChangingSelectedProperty(propertyId){
  //   this.setState({selectedProperty: propertyId});
  // }

  render(){
    return (
      <div>
        <Header/>

        <Switch>
          <Route exact path='/' render={()=><PropertyList propertyList={this.props.masterPropertyList} />} />
          <Route path='/newproperty' render={()=><NewPropertyControl />} />
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterPropertyList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPropertyList: state.masterPropertyList
  };
};

export default withRouter(connect(mapStateToProps)(App));
