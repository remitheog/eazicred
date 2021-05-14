import React from 'react';

import MessageAlert from '../MessageAlert';

const FormStep4 = ({showMsg, prevStep, handleChange, field}) => {
    return (
        <React.Fragment>
            <span>Step 4 / 4</span>
            <h3>Loan &amp; Verification</h3>
            <p>Fill in the required information and upload documents</p>
            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="existing_loan">Do you have any existing loan?</label>
                    <input value={field.existing_loan} onChange={handleChange}  type="text" name="existing_loan" id="existing_loan" placeholder="Yes or No" />
                </div>
                <div className="input-group">
                    <label htmlFor="existing_loan_type">What is your existing loan type?</label>
                    <input value={field.existing_loan_type} onChange={handleChange}  type="text" name="existing_loan_type" id="existing_loan_type" placeholder="Mortgae, car, business loan" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_surname">Surname of Next of Kin</label>
                    <input value={field.next_of_kin_surname} onChange={handleChange}  type="text" name="next_of_kin_surname" id="next_of_kin_surname" placeholder="Surname of next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_firstname">First Name of Next of Kin</label>
                    <input value={field.next_of_kin_firstname} onChange={handleChange}  type="text" name="next_of_kin_firstname" id="next_of_kin_firstname" placeholder="Firstname of next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_relationship">Relationship with Next of Kin</label>
                    <input value={field.next_of_kin_relationship} onChange={handleChange}  type="text" name="next_of_kin_relationship" id="next_of_kin_relationship" placeholder="State your relationship with next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_phone">Phone Number of Next of Kin</label>
                    <input value={field.next_of_kin_phone} onChange={handleChange}  type="text" name="next_of_kin_phone" id="next_of_kin_phone" placeholder="Phone number of next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="next_of_kin_address">Address of Next of Kin</label>
                    <input value={field.next_of_kin_address} onChange={handleChange}  type="text" name="next_of_kin_address" id="next_of_kin_address" placeholder="Address of next of kin" />
                </div>
                <div className="input-group">
                    <label htmlFor="loan_amount">Loan Amount</label>
                    <input value={field.loan_amount} onChange={handleChange}  type="number" name="loan_amount" id="loan_amount" placeholder="₦" />
                </div>
                <div className="input-group">
                    <label htmlFor="loan_tenure">Loan Duration</label>
                    <input value={field.loan_tenure} onChange={handleChange}  type="number" name="loan_tenure" id="loan_tenure" placeholder="Specify in months" />
                </div>
                <div className="input-group">
                    <label htmlFor="account_number">Account Number</label>
                    <input value={field.account_number} onChange={handleChange}  type="text" name="account_number" id="account_number" placeholder="Account number" />
                </div>
                <div className="input-group">
                    <label htmlFor="account_name">Account Name</label>
                    <input value={field.account_name} onChange={handleChange}  type="text" name="account_name" id="account_name" placeholder="Account Name" />
                </div>
                <div className="input-group">
                    <label htmlFor="bank_name">Bank Name</label>
                    <input value={field.bank_name} onChange={handleChange}  type="text" name="bank_name" id="bank_name" placeholder="Bank Name" />
                </div>
                <div className="input-group">
                    <label htmlFor="hear_about_us">How did you hear about us?</label>
                    <input value={field.hear_about_us} onChange={handleChange}  type="text" name="hear_about_us" id="hear_about_us" placeholder="How did you hear about us?" />
                </div>
                <div className="input-group">
                    <label htmlFor="bvn">BVN</label>
                    <input value={field.BVN} onChange={handleChange}  type="text" id="bvn" name="BVN" placeholder="Enter your BVN" />
                </div>
                <div className="input-group">
                    <label htmlFor="passport">Passport</label>
                    <input value={field.passport} onChange={handleChange}  type="file" id="passport" />
                </div>
                <div className="input-group">
                    <label htmlFor="government_ID">Government ID</label>
                    <input value={field.government_ID} onChange={handleChange} name={'government_ID'}  type="file" id="government_ID" />
                </div>
                <div className="input-group">
                    <label htmlFor="company_id">Company ID</label>
                    <input value={field.company_id} onChange={handleChange} name={"company_id"} type="file" id="company_id" />
                </div>
                <div className="input-group">
                    <label htmlFor="letter_of_employment">Letter of Employment</label>
                    <input  value={field.letter_of_employment} onChange={handleChange} name={"letter_of_employment"} type="file" id="letter_of_employment" />
                </div>
                <div className="input-group">
                    <label htmlFor="HR_letter_of_comfirmation">HR Letter of Confrimation</label>
                    <input  value={field.HR_letter_of_comfirmation} onChange={handleChange} name={"HR_letter_of_comfirmation"} type="file" id="HR_letter_of_comfirmation" />
                </div>
                <div className="input-group">
                    <label htmlFor="utility_bill">Utility Bill</label>
                    <input value={field.utility_bill} onChange={handleChange} name={"utility_bill"} type="file" id="utility_bill" />
                </div>
            </div>
            {!showMsg() && (
                <div className="form-btns">
                    <input onClick={() => prevStep()} type="button" className="btn btn-blue btn-transparent" value="Back" />
                    <input type="submit" className="btn btn-blue" value="Submit" />
                </div>
            )}
            {showMsg() && <MessageAlert/>}
        </React.Fragment>
    );
}

export default FormStep4;