import React from 'react';
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsPrivileged} from '../../Redux/user/user.select';

const PrivilegedRoute = ({ children, isPrivileged, ...rest }) => {
    return (
      <div>
        {
          isPrivileged === true
            ? children
            : <Redirect to='/' />
        }
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isPrivileged: selectIsPrivileged
})

export default connect(mapStateToProps)(PrivilegedRoute);