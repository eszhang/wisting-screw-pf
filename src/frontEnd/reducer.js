/**
 * root reducer
 */

import { combineReducers } from 'redux';
import { reducer as home } from './pages/home';

console.log(home);
export default combineReducers({
    a: home
});
