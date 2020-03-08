import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuSelectedDispatcher } from '../Common/actionsDispatcher';
import { menuItemType } from '../Header/headerUtils';

const Events = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuSelectedDispatcher(menuItemType.EVENTS));
  }, [dispatch]);

  return <div>Events</div>;
};

export default Events;
