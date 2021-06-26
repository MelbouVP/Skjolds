  
import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectUserData = createSelector(
    [selectUser],
    user => user.data
);

export const selectIsAuthenticated = createSelector(
    [selectUser],
    user => user.isAuthenticated
);

export const selectIsCurrentlyAuthenticating = createSelector(
    [selectUser],
    user => user.isCurrentlyAuthenticating
);

export const selectIsPrivileged = createSelector(
    [selectUserData],
    user => user.privileged
);