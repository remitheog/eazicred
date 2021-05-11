import React from 'react';

const FormStep3 = ({nextStep, prevStep, handleChange, field}) => {
    return (
        <React.Fragment>
            <span>Step 3 / 4</span>
            <h3>Employment</h3>
            <p>Fill in information about your employment status</p>
            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="employment_status">Employment Status</label>
                    <select  value={field.employment_status} onChange={handleChange}  name="employment_status" id="employment_status">
                        <option>Select Employment Status</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="current_employer">Current Employer</label>
                    <input value={field.current_employer} onChange={handleChange}  type="text" id="current_employer" name="current_employer" placeholder="Name of the company you work for" />
                </div>
                <div className="input-group">
                    <label htmlFor="current_employer_address">Current Employer Address</label>
                    <input value={field.current_employer_address} onChange={handleChange}  type="text" name="current_employer_address" id="current_employer_address" placeholder="Address of the company" />
                </div>
                <div className="input-group">
                    <label htmlFor="current_employer_state">Current Employer State</label>
                    <input value={field.current_employer_state} onChange={handleChange}  type="text" name="current_employer_state" id="current_employer_state" placeholder="Lagos" />
                </div>
                <div className="input-group">
                    <label htmlFor="current_employer_lga">Current Employer LGA</label>
                    <input value={field.current_employer_LGA} onChange={handleChange}  type="text" name="current_employer_LGA" id="current_employer_lga" placeholder="Lagos" />
                </div>
                <div className="input-group">
                    <label htmlFor="current_employer_office_number">Current Employer Office Number</label>
                    <input value={field.current_employer_office_number} onChange={handleChange}  type="text" name="current_employer_office_number" id="current_employer_office_number" placeholder="Number" />
                </div>
                <div className="input-group">
                    <label htmlFor="date_employed">Date Employed</label>
                    <input value={field.date_employed} onChange={handleChange}  type="date" name="date_employed" id="date_employed" />
                </div>
                <div className="input-group">
                    <label htmlFor="current_employer_landmark">Current Employer Landmark</label>
                    <input value={field.current_employer_landmark} onChange={handleChange}  type="text" name="current_employer_landmark" id="current_employer_landmark" placeholder="Closest landmark to the company" />
                </div>
                <div className="input-group">
                    <label htmlFor="staff_id">Staff ID No</label>
                    <input value={field.staff_id} onChange={handleChange}  type="text" name="staff_id" id="staff_id" placeholder="Staff ID No" />
                </div>
                <div className="input-group">
                    <label htmlFor="job_title">Job Title</label>
                    <input value={field.job_title} onChange={handleChange}  type="text" name="job_title" id="job_title" placeholder="Job Title" />
                </div>
                <div className="input-group">
                    <label htmlFor="department">Department</label>
                    <input value={field.department} onChange={handleChange}  type="text" name="department" id="department" placeholder="Department" />
                </div>
                <div className="input-group">
                    <label htmlFor="previous_employer">Previous Employer</label>
                    <input type="text" name="previous_employer" id="previous_employer" placeholder="Previous Employer" />
                </div>
                <div className="input-group">
                    <label htmlFor="previous_employer_address">Previous Employer Address</label>
                    <input value={field.previous_employer_address} onChange={handleChange}  type="text" name="previous_employer_address" id="previous_employer_address" placeholder="Previous Employer Address" />
                </div>
                <div className="input-group">
                    <label htmlFor="length_of_time_with_previous_employer">Duration With Previous Employer</label>
                    <input value={field.length_of_time_with_previous_employer} onChange={handleChange}  type="number" name="length_of_time_with_previous_employer" id="length_of_time_with_previous_employer" placeholder="Specify the number of months" />
                </div>
                <div className="input-group">
                    <label htmlFor="jobs_in_last_5_years">Number of Jobs</label>
                    <input  value={field.jobs_in_last_5_years} onChange={handleChange}  type="number" name="jobs_in_last_5_years" id="jobs_in_last_5_years" placeholder="Number of jobs in the last five years" />
                </div>
                <div className="input-group">
                    <label htmlFor="current_paydate">Current Paydate</label>
                    <input value={field.current_paydate} onChange={handleChange}  type="date" name="current_paydate" id="current_paydate" placeholder="Current Paydate" />
                </div>
            </div>
            <div className="form-btns">
                <button onClick={() => prevStep()} type="button" className="btn btn-blue btn-transparent">Back</button>
                <button onClick={() => nextStep()} type="button" className="btn btn-blue">Continue</button>
            </div>
        </React.Fragment>
    );
}

export default FormStep3;