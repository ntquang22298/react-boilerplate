import React, { useEffect, useState } from 'react';
import * as action from '../../actions/index';
import { useDispatch, useSelector } from 'react-redux';
const Item = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.item);
  useEffect(() => {
    dispatch(action.getAllAction());
  }, []);

  return (
    <div>
      {reducer.listItem ? reducer.listItem.map((item, index) => <p key={index}>{item}</p>) : ''}
    </div>
  );
};
export default Item;
