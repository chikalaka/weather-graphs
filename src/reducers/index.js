import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;



// const rootReducer = combineReducers({
//   books: BooksReducer,
//   activeBook: ActiveBook
// });
