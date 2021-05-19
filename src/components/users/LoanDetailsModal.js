import React from 'react';
import {currency} from "./LoansList";

export const loanStatus = status => {
    switch (status) {
        case 1:
            return "Pending"
        case 2:
            return "Approved"
        case 3:
            return "Rejected"
        default:
            return "NOT ON API"
    }
}


const LoanDetailsModal = ({setOpen, loan, setLoan}) => {

    const handleClose = () => {
        setOpen(false)
        setLoan(null)
    }
    const {id, status} = loan
    return (
        <div className="modal">
            <div className="modal-inner">
                <div className="modal__top">
                    <h3>Loan Details</h3>
                    <button onClick={handleClose} className="close">x</button>
                </div>
                <div className="modal__middle">
                    <div>
                        <h5>Loan ID</h5>
                        <span>{id}</span>
                    </div>
                    <div>
                        <h5>Duration</h5>
                        <span>{loan.loan_tenure}</span>
                    </div>
                    <div>
                        <h5>Loan Status</h5>
                        <span>{loanStatus(status)}</span>
                    </div>
                    <div>
                        <h5>Over Due Date</h5>
                        <span>16th June 2021</span>
                    </div>
                </div>
                <div className="modal__bottom">
                    <div>
                        <span>Amount</span>
                        <span>{loan.type === 1 && currency.format(loan.loan_amount)}</span>
                    </div>
                    <div>
                        <span>Interest</span>
                        <span>%7.5</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>₦13,293,300</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanDetailsModal