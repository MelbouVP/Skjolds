import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthenticated } from '../../Redux/user/user.select';

const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
      <Route {...rest} render={({location}) => {
        return isAuthenticated === true
          ? children
          : <Redirect to={{
            pathname: "/login",
            state: { from: location }
          }} />
      }} />
    )
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsAuthenticated
})

export default connect(mapStateToProps)(ProtectedRoute);