import React from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import SmeLoan from '../../components/Dashboard/SmeLoan';
import SmeForm1 from '../../components/Dashboard/steps/SMEForm1';
import { applySmeLoan } from '../../redux/actions/loanThunk';

const SMEContainer = () => {
    const userID = useSelector(state => state["user"].data.id)
    const [field, setField] = React.useState({
        "user_id": userID,
        "business_name": "",
        "business_address": "",
        "RC_number": "",
        "TIN_number": "",
        "business_up_time": "",
        "purpose_of_loan": "",
    })

    const step = React.useState(1)[0]
    // const nextStep = () => {
    //     setStep(step + 1)
    // }
    // const prevStep = () => {
    //     setStep(step - 1)
    // }

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
                return <SmeForm1 showMsg={showMsg} field={field} handleChange={handleChange}/>
        }
    }
    const showNotification = useSelector(state => state["notify"].show)
    const showMsg = useSelector(state => state["notify"].message.show)
    return (
        <SmeLoan showNotification={showNotification} switchForm={switchForm} step={step} handleSubmit={handleSubmit}/>
    );
}

export default SMEContainer;