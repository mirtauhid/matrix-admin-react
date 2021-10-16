/* eslint-disable import/no-cycle */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem('token') || sessionStorage.getItem('user') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRouter;
