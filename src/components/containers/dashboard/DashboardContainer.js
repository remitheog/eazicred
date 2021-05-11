import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getUser } from '../../../redux/actions/dashboard/userThunk';
import Dashboard from '../../Dashboard/Dashboard';
import Loader from '../../Loader';

const DashboardContainer = () => {
    const user = useSelector(state => state.user)
    const userID = useSelector(state => state.auth.data.user.id)
    document.title = `${user?user.firstname:""} Dashboard`.toUpperCase()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getUser(userID))
    }, [])
    return (
        user.loading? <Loader/>:<Dashboard user={user.data}/>
    );
}

export default DashboardContainer;