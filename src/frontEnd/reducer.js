/**
 * root reducer
 */

import { combineReducers } from 'redux';
import { reducer as home } from './pages/home';

export default combineReducers({
    home
});
