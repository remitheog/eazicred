import React from 'react';

import { useSelector } from 'react-redux';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import { LOGIN_URL } from '../routes/paths';
import Loader from './Loader';

const ProtectedRoute = ({component:Component, ...rest}) => {
    const auth = useSelector(state => state.auth)
    return (
        <Route {...rest}
            render={props => {
                if(auth.loading){
                    return <Loader />
                }
                else if(!auth.isAuthenticated){
                    return <Redirect to={{pathname: LOGIN_URL, state: {from: props.location}}}/>
                } else {
                    return <Component {...props}/>
                }
            }}
        />
    );
}
//
// const ProtectedRoute = ({component:Component, ...rest}) => {
//     const isAuth = useSelector(state => state.auth.isAuthenticated)
//     return (
//         <Route {...rest}
//             render={props => {
//                 if(isAuth){
//                     return <Component {...props} />
//                 } else {
//                     return <Redirect to={{pathname: LOGIN_URL, state: {from: props.location}}}/>
//                 }
//             }}
//         />
//     );
// }

export default ProtectedRoute;