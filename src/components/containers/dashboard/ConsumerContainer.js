import React from 'react';

import { useDispatch } from 'react-redux';

import applyPaydayLoan from '../../../redux/actions/paydayThunk';
import Consumer from '../../Dashboard/Consumer';
import FormStep1 from '../../Dashboard/steps/FormStep1';
import FormStep2 from '../../Dashboard/steps/FormStep2';
import FormStep3 from '../../Dashboard/steps/FormStep3';
import FormStep4 from '../../Dashboard/steps/FormStep4';

const ConsumerContainer = () => {
    const [field, setField] = React.useState({
        user_id: '',
        BVN: '',
        DOB: '',
        Means_of_ID: '',
        ID_number: '',
        date_issued: '',
        expiry_date: '',
        alt_number: '',
        home_address: '',
        landmark: '',
        LGA_of_residence: '',
        state: '',
        length_of_time_at_current_address: '',
        marital_status: '',
        employment_status: '',
        current_employer: '',
        current_employer_address: '',
        current_employer_landmark: '',
        current_employer_LGA: '',
        current_employer_state: '',
        current_employer_office_number: '',
        staff_id: '',
        department: '',
        job_title: '',
        date_employed: '',
        previous_employer: '',
        previous_employer_address: '',
        length_of_time_with_previous_employer: '',
        jobs_in_last_5_years: '',
        current_paydate: '',
        existing_loan: '',
        existing_loan_type: '',
        next_of_kin_surname: '',
        next_of_kin_firstname: '',
        next_of_kin_relationship: '',
        next_of_kin_phone: '',
        next_of_kin_address: '',
        loan_amount: '',
        loan_tenure: '',
        account_number: '',
        account_name: '',
        bank_name: '',
        hear_about_us: '',
        passport: '',
        government_ID: '',
        company_id: '',
        letter_of_employment: '',
        HR_letter_of_comfirmation: '',
        utility_bill: '',
        created_at: '',
        draft: false
    })
    const [step, setStep] = React.useState(1)
    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
    }

    const handleChange = (e) => {
        setField({...field, [e.target.name]: e.target.value})
    }
    document.title = "Eazicred - Consumer Loan"
    const switchForm = () => {
        switch (step) {
            case 1:
                return <FormStep1 field={field} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>
            case 2:
                return <FormStep2 field={field} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>
            case 3:
                return <FormStep3 field={field} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>
            case 4:
                return <FormStep4 field={field} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep}/>
        }
    }
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(applyPaydayLoan(field))
    }

    return (
        <Consumer handleSubmit={handleSubmit} switchForm={switchForm} step={step}/>
    );
}

export default ConsumerContainer;