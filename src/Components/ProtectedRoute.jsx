import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../api';

const ProtectedRoute = ({ children }) => {
  const token = getCookie('token');
  console.log(token);
  
  if (!token || token == 'undefined') {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
