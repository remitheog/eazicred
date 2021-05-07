import React from "react";

const Stats = () => {
    return (
        <section className="stats">
            <div className="container-sm">
                <div className="stats__inner">
                    <div className="stats__customers">
                        <h5 className="h-5">1000+</h5>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stats__sme">
                        <h5 className="h-5">500+</h5>
                        <p>SMEs Loans Disbursed</p>
                    </div>
                    <div className="stats__consumer">
                        <h5 className="h-5">500+</h5>
                        <p>Consumer Loans Disbursed</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats