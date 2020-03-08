import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuSelectedDispatcher } from '../Common/actionsDispatcher';
import { menuItemType } from '../Header/headerUtils';

const Matches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuSelectedDispatcher(menuItemType.MATCHES));
  }, [dispatch]);

  return <div>Matches</div>;
};
export default Matches;
