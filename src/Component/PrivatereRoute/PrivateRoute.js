import React from 'react';
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    // let auth = useAuth();
    const user = JSON.parse(localStorage.getItem('user')) || {};
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;