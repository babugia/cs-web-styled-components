import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuSelectedDispatcher } from '../Common/actionsDispatcher';
import { menuItemType } from '../Header/headerUtils';

const Teams = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuSelectedDispatcher(menuItemType.TEAMS));
  }, [dispatch]);

  return <div>Teams</div>;
};

export default Teams;
