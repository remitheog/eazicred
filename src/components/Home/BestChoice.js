import React from "react";

const BestChoice = () => {
    return (
        <section className="choice">
            <div className="container">
                <div className="choice__inner">
                    <div className="choice__text-box">
                        <h2 className="h-2">Why EaziCred Is The Best</h2>
                        <p className="p-2">Choice For You</p>

                        <p className="p">Life happens, emergencies happens. Eazicred is your trusted partner to fill in
                            those financial gaps till you get back on your feet. From the application process to the
                            disbursement of funds to repayment, we make it an EAZI experience for you</p>

                        <div>
                            <a href="" className="btn btn-blue">Apply For A Loan</a>
                            <a href="" className="btn btn-dark">Learn More</a>
                        </div>
                    </div>
                    <div className="choice__image-box">
                        <img src="assets/choice-img.png" alt="a guy who is suprised"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestChoice