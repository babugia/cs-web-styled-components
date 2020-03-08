import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenuSelectedDispatcher } from '../Common/actionsDispatcher';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuSelectedDispatcher());
  }, [dispatch]);

  return <div>Login</div>;
};

export default Login;
