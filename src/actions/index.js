import { services } from '../services/index';
import { item } from '../models/Item';
export const type = {
  POST: 'POST',
  PUT: 'PUT',
  GET: 'GET',
  GETALL: 'GETALL',
};
export const postAction = (item) => (dispatch) => {
  let res = services.postAPI(item);
  dispatch({
    type: type.POST,
    res: res,
  });
};
export const putAction = (item) => (dispatch) => {
  let res = services.putAPI(item);
  dispatch({
    type: type.PUT,
    res: res,
  });
};
export const getAction = (id) => (dispatch) => {
  let res = services.getAPI(id);
  dispatch({
    type: type.GET,
    res: res,
  });
};
export const getAllAction = () => (dispatch) => {
  let res = services.getAllAPI();
  dispatch({
    type: type.GETALL,
    res: res,
  });
};
