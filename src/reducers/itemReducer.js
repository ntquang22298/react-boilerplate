import * as itemAction from '../actions/index';
const initialState = {
  item: {},
  listItem: [],
  newItem: {},
  editedItem: {},
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case itemAction.type.GET:
      return {
        ...state,
        item: res,
      };
    case itemAction.type.GETALL:
      return {
        ...state,
        listItem: res,
      };
    case itemAction.type.POST:
      return {
        ...state,
        newItem: res,
      };
    case itemAction.type.PUT:
      return {
        ...state,
        editedItem: res,
      };
  }
};
export default itemReducer;
