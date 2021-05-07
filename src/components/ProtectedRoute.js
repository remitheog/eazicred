import React from 'react';

import { useSelector } from 'react-redux';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import { LOGIN_URL } from '../routes/paths';

const ProtectedRoute = ({component:Component, ...rest}) => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    return (
        <Route {...rest}
            render={props => {
                if(isAuth){
                    return <Component {...props} />
                } else {
                    return <Redirect to={{pathname: LOGIN_URL, state: {from: props.location}}}/>
                }
            }}
        />
    );
}

export default ProtectedRoute;