import { combinReducer } from 'redux';
import itemReducer from './itemReducer';

const rootReducer = combinReducer({
  item: itemReducer,
});
export default rootReducer;
