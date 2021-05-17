import React from 'react';

import { connect } from 'react-redux';

import {
  fetchSelectedPaydayLoan,
  fetchSelectedSmeLoan,
} from '../../redux/actions/loanThunk';

const LoanDetailsModal = ({setOpen, selectedLoan, getPaydayLoan, getSmeLoan, selectedSme, selectedPayday}) => {
    React.useEffect(() => {
        if(selectedLoan.type === "payday"){
            getPaydayLoan(selectedLoan.id)
        }else{
            getSmeLoan(selectedLoan.id)
        }
    }, [])

    function PaydayLoanDetail() {
        return (
            <div className="modal">
                <div className="modal-inner">
                    <div className="modal__top">
                        <h3>Loan Details</h3>
                        <button onClick={() => setOpen(false)} className="close">x</button>
                    </div>
                    <div className="modal__middle">
                        <div>
                            <h5>Loan ID</h5>
                            <span>{selectedPayday.loan.id}</span>
                        </div>
                        <div>
                            <h5>Duration</h5>
                            <span>6 Months</span>
                        </div>
                        <div>
                            <h5>Loan Status</h5>
                            <span>Overdue</span>
                        </div>
                        <div>
                            <h5>Over Due Date</h5>
                            <span>16th June 2021</span>
                        </div>
                    </div>
                    <div className="modal__bottom">
                        <div>
                            <span>Amount</span>
                            <span>₦12,293,300</span>
                        </div>
                        <div>
                            <span>Interest</span>
                            <span>₦1,000,000</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>₦13,293,300</span>
                        </div>
                    </div>
                </div>
                {selectedPayday.loading && <div className="modal-preloader"/>}
            </div>
        )
    }

    function SmeLoanDetail() {
        return (
            <div className="modal">
                <div className="modal-inner">
                    <div className="modal__top">
                        <h3>Loan Details</h3>
                        <button onClick={() => setOpen(false)} className="close">x</button>
                    </div>
                    <div className="modal__middle">
                        <div>
                            <h5>Loan ID</h5>
                            <span>{selectedSme.loan.id}</span>
                        </div>
                        <div>
                            <h5>Duration</h5>
                            <span>6 Months</span>
                        </div>
                        <div>
                            <h5>Loan Status</h5>
                            <span>Overdue</span>
                        </div>
                        <div>
                            <h5>Over Due Date</h5>
                            <span>16th June 2021</span>
                        </div>
                    </div>
                    <div className="modal__bottom">
                        <div>
                            <span>Amount</span>
                            <span>₦12,293,300</span>
                        </div>
                        <div>
                            <span>Interest</span>
                            <span>₦1,000,000</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>₦13,293,300</span>
                        </div>
                    </div>
                </div>
                {selectedSme.loading && <div className="modal-preloader"/>}
            </div>
        )
    }
    if (selectedLoan.type === "payday"){
        return <PaydayLoanDetail/>
    }else{
        return <SmeLoanDetail/>
    }
}


const mapState = (state) => {
    return {
        selectedSme: state.userLoans.selectedSme,
        selectedPayday: state.userLoans.selectedPayday
    }
}

const mapDispatch = (dispatch) => {
    return {
        getPaydayLoan: (id) => dispatch(fetchSelectedPaydayLoan(id)),
        getSmeLoan: (id) => dispatch(fetchSelectedSmeLoan(id))
    }
}

export default connect(mapState, mapDispatch)(LoanDetailsModal);