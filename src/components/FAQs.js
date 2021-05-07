import React from "react"
import OnPageSignUp from "./OnPageSignUp";
import FaqsHeader from "./FaqsHeader";
const Faqs = () => {
    document.title = "EaziCred - FAQs"
    return (
        <div>
            <FaqsHeader/>
            <OnPageSignUp/>
        </div>
    )
}
export default Faqs