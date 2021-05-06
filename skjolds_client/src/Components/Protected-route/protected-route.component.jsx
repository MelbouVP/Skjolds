import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthenticated } from '../../Redux/user/user.select';

const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => {
    return (
      <Route {...rest} render={() => {
        return isAuthenticated === true
          ? children
          : <Redirect to='/login' />
      }} />
    )
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selectIsAuthenticated
})

export default connect(mapStateToProps)(ProtectedRoute);