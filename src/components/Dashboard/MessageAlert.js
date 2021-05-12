import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { hideMessage } from '../../redux/actions/actions';

const MessageAlert = () => {
    const message = useSelector(state => {
        return state.notify.message;
    })
    const dispatch = useDispatch()
    React.useEffect(()=>{
        setTimeout(()=>dispatch(hideMessage()), 5000)
    },[])
    return (
        <div className={message["type"]}>
            <div><p>{message["message"]}</p></div>
        </div>
    );
}

export default MessageAlert;