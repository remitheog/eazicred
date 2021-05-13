/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Dashboard from '../../components/Dashboard/Dashboard';
import { getUser } from '../../redux/actions/authThunks';

const DashboardContainer = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getUser())
    }, [])

    const user = useSelector(state => {
        const {auth:{user}} = state;
        return user;
    })
    document.title = `${user?user.firstname:""} Dashboard`.toUpperCase()
    return (
        <Dashboard user={user}/>
    );
}

export default DashboardContainer;