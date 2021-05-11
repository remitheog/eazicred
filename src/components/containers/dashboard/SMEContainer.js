import React from 'react';

import { useDispatch } from 'react-redux';

import applySmeLoan from '../../../redux/actions/smeThunk';
import SmeLoan from '../../Dashboard/SmeLoan';
import SmeForm1 from '../../Dashboard/steps/SMEForm1';

const SMEContainer = () => {
    const [field, setField] = React.useState({
        "user_id": "",
        "business_name": "",
        "business_address": "",
        "RC_number": "",
        "TIN_number": "",
        "business_up_time": "",
        "purpose_of_loan": "",
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
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(applySmeLoan(field))
    }

    document.title = "Eazicred - SME Loan"
    const switchForm = () => {
        switch (step) {
            // case 1:
            //     return <SmeForm1 field={field} handleChange={handleChange}  nextStep={nextStep}/>
            // case 2:
            //     return <SmeForm2 field={field} handleChange={handleChange} prevStep={prevStep}/>
            default:
                return <SmeForm1 field={field} handleChange={handleChange}/>
        }
    }

    return (
        <SmeLoan switchForm={switchForm} step={step} handleSubmit={handleSubmit}/>
    );
}

export default SMEContainer;