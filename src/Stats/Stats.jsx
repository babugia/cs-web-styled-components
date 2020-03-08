import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuSelectedDispatcher } from '../Common/actionsDispatcher';
import { menuItemType } from '../Header/headerUtils';

const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuSelectedDispatcher(menuItemType.STATS));
  }, [dispatch]);

  return <div>Stats</div>;
};

export default Stats;
