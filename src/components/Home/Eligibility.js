import React from "react";

const Eligibility = () => {
    return (
        <section className="eligibility">
            <div className="container">
                <div className="eligibility__inner">
                    <div className="eligibility__image-box">
                        <img src="assets/eligibility-img.png" alt="a woman laughing"/>
                    </div>
                    <div className="eligibility__text-box">
                        <h2 className="h-2">Check If You Are Eligible</h2>
                        <p className="p-2">For An EaziCred Loan</p>
                        <p className="p">To be eligible for an Eazicred loan:</p>
                        <ul>
                            <li>You must be between 22 – 58 years old</li>
                            <li>You must be a resident of Lagos State</li>
                            <li>You must be a salary earner or own a small or medium enterprise (duly registered with
                                CAC)
                            </li>
                            <li>You must have bank statement dating back to the last 6months</li>
                            <li>You must have a valid government issued ID card</li>
                            <li>You must have a guarantor (conditional) You must have proof of residence (Utility
                                bill)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Eligibility