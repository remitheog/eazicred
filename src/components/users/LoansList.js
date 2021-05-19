import React, { useState } from 'react';

import LoanDetailsModal from './LoanDetailsModal';

export const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'NGN'});

const LoansList = ({loanData}) => {
    const [open, setOpen] = useState(false)
    const [loan, setLoan] = useState(null)

    function formatDate(date) {
        return new Date(date).toDateString()
    }

    const showLoanDetails = (loan) => {
        setOpen(true)
        setLoan(loan)
    }
    const loanType = (type) => {
        switch (type) {
            case 1:
                return "Payday Loan"
            case 2:
                return "SME Loan"
        }
    }

    return (
        <div>
            <div className="main__loan-history--box">
                <div className="loan__row loan__heading">
                    <span>Date</span>
                    <span>Transaction ID</span>
                    <span>Transaction Type</span>
                    <span>Amount</span>
                    <span>Action</span>
                </div>
                {loanData.map(loan => (
                    <div className="loan__row" key={loan.id}>
                        <span>{formatDate(loan.created_at)}</span>
                        <span>#{loan.id}</span>
                        <span>{loanType(loan.type)}</span>
                        <span>{loan.type === 1 && currency.format(loan.loan_amount)}</span>
                        <button onClick={() => showLoanDetails(loan)} className="view-details">View Detail</button>
                    </div>
                ))}
            </div>
            {open && <LoanDetailsModal loan={loan} setLoan={setLoan} setOpen={setOpen}/>}
        </div>
    );
}

export default LoansList;