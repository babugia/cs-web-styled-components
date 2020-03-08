import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';
import { setMenuSelectedDispatcher } from '../Common/actionsDispatcher';
import { menuItemType } from '../Header/headerUtils';

const Matches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(allActions.setMenuSelected(menuItemType.MATCHES));
    dispatch(setMenuSelectedDispatcher(menuItemType.MATCHES));
  }, [dispatch]);

  return <div>Matches</div>;
};
export default Matches;
