import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { getUser } from '../../../redux/actions/dashboard/userThunk';
import Dashboard from '../../Dashboard/Dashboard';

const DashboardContainer = () => {
    const user = useSelector(state => state.user)
    document.title = `${user.firstname} Dashboard`.toUpperCase()
    const dispatch = useDispatch()
    

    React.useEffect(() => {
        dispatch(getUser(user.id))
    }, [])
    return (
        user.loading? <div>Loading</div>:<Dashboard user={user.data}/>
    );
}

export default DashboardContainer;