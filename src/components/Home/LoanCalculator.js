import React from 'react';

const LoanCalculator = () => {
    return (
        <section className="calculator">
            <div className="container">
                <div className="calculator__inner">
                    <div>
                        <div className="calculation">
                            <h2 className="h-2">Loan Calculator</h2>
                            <p>Quickly calculate, how much you have to pay back</p>
                            <div>
                                <div className="calculation__amount">
                                    <label>Amount</label>
                                    <input type="text" placeholder="₦0.00"/>
                                </div>
                                <div className="calculation__period">
                                    <label>Period</label>
                                    <select name="months">
                                        <option value="one">1 Month</option>
                                        <option value="two">2 Months</option>
                                        <option value="three">3 Months</option>
                                        <option value="four">4 Months</option>
                                        <option value="five">5 Months</option>
                                    </select>
                                </div>
                                <div className="calculation__period">
                                    <label>Interest Rate</label>
                                    <select name="interest">
                                        <option value="2.5">2.5%</option>
                                        <option value="3">3%</option>
                                        <option value="3.5">3.5%</option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn btn-dark">Calculate</button>
                        </div>
                        <div className="results">
                            <div>
                                <label>Interest Rate</label>
                                <p className="results--interest">2.5%</p>
                            </div>
                            <div>
                                <label>Monthly Payment</label>
                                <p className="results-payment">₦0.00</p>
                            </div>
                            <div>
                                <label>Duration</label>
                                <p className="results--duration">1 month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoanCalculator;