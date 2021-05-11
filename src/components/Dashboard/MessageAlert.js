import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { hideNotification } from '../../redux/actions/actions';

const MessageAlert = () => {
    const message = useSelector(state => state.notify.message)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        setTimeout(()=>dispatch(hideNotification()), 3000)
    },[])
    return (
        <div className={message["type"]}>
            <div>
                <p>{message["message"]}</p>
            </div>
        </div>
    );
}

export default MessageAlert;