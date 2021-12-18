import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginAction } from '../redux/actions/authActions';

const PrivateRoute = ({ children }) => {
  const user = true;

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
