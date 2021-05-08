import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';
import adminReducer from './admin/admin.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    admin: adminReducer
})

export default rootReducer;