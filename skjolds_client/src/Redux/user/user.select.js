  
import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectIsAuthenticated = createSelector(
    [selectUser],
    user => user.isAuthenticated
);