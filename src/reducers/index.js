import { combineReducers } from 'redux';
import currentWeather from './current';

const rootReducer = combineReducers({currentWeather});

export default rootReducer;