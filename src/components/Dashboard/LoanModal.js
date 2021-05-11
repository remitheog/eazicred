import React from 'react';

import { useDispatch } from 'react-redux';

import { hideNotification } from '../../redux/actions/actions';

const LoanModal = () => {
    const dispatch = useDispatch()
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Loan Application Sent</h3>
                <p>Your loan application has been sent successfully. An EaziCred agent would contact you soon</p>
                <button onClick={() => dispatch(hideNotification())} id="close" className="btn btn-blue">Okay</button>
            </div>
        </div>
    );
}

export default LoanModal;