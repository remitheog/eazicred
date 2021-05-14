import React from 'react';

const FormStep1 = ({nextStep, handleChange, field}) => {
    return (
        <React.Fragment>
            <span>Step 1 / 4</span>
            <h3>Personal Information</h3>
            <p>Tell us about yourself by completing the form below</p>
            <div className="input-groups">
                <div className="input-group">
                    <label htmlFor="DOB">Date Of Birth</label>
                    <input value={field.DOB} onChange={handleChange} type="date" id="DOB" name="DOB" placeholder="DD / MM / YYYY"/>
                </div>
                <div className="input-group">
                    <label htmlFor="marital_status">Marital Status</label>
                    <input value={field.marital_status} onChange={handleChange}  type="text" name="marital_status" id="marital_status" placeholder="Enter your marital status"/>
                </div>
                <div className="input-group input-group-tel">
                    <label htmlFor="alt_number">Mobile</label>
                    <div className="tel">
                        <select id="alt_number" onChange={handleChange}>
                            <option value={234}>+234</option>
                        </select>
                        <input type="text" value={field.alt_number} name="alt_number" onChange={handleChange} placeholder={"Enter your telephone number"}/>
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor={'state'}>State Of Origin</label>
                    <input value={field.state} name={"state"} id="state" onChange={handleChange}  type="text" placeholder="Enter your state of origin"/>
                </div>
                <div className="input-group">
                    <label htmlFor="home_address">Home Address</label>
                    <input value={field.home_address} onChange={handleChange}  type="text" id="home_address" name="home_address" placeholder="enter your home address"/>
                </div>
                <div className="input-group">
                    <label htmlFor="Means_of_ID">Means of ID</label>
                    <select name="Means_of_ID" id="Means_of_ID" value={field.Means_of_ID} onChange={handleChange} >
                        <option value="driverlicense">Driver License</option>
                        <option value="governmentid">Government ID</option>
                        <option value="passport">Passport</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="ID_number">ID Number</label>
                    <input value={field.ID_number} onChange={handleChange}  type="text" name="ID_number" id="ID_number" placeholder="ID Number"/>
                </div>
                <div className="input-group">
                    <label htmlFor="date_issued">Date Issued</label>
                    <input type="date" id="date_issued" name="date_issued" value={field.date_issued} onChange={handleChange}  placeholder="DD / MM / YYYY"/>
                </div>
                <div className="input-group">
                    <label htmlFor="expiry_date">Expiry Date</label>
                    <input  value={field.expiry_date} onChange={handleChange}  type="date" id="expiry_date" name="expiry_date" placeholder="DD / MM / YYYY"/>
                </div>
            </div>
            <input onClick={() => nextStep()} type="button" className="btn btn-blue" value="Continue"/>
        </React.Fragment>
    );
}

export default FormStep1;