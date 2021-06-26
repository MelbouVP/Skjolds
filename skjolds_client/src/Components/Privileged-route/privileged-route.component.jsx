import React from 'react';
import { Redirect, Route } from 'react-router-dom'


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsPrivileged} from '../../Redux/user/user.select';

const PrivilegedRoute = ({ children, isPrivileged, ...rest }) => {
    return (
      <Route {...rest} render={({location}) => {
        return isPrivileged === true
          ? children
          : <Redirect to={{
            pathname: "/"
          }} />
      }} />
    )
}

const mapStateToProps = createStructuredSelector({
    isPrivileged: selectIsPrivileged
})

export default connect(mapStateToProps)(PrivilegedRoute);