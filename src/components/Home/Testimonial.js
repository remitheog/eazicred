import React from 'react';

const Testimonial = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="h-2">What People Are Saying</h2>
                <p className="p-2">Index Us</p>
                <div className="testimonials__inner">
                    <div className="testimonials__list">
                        <div className="testimonial">
                            <div className="testimonial__user-profile">
                                <img src={"assets/george.png"} alt="George Anderson"/>
                                <div>
                                    <h6 className="h-6">George Anderson</h6>
                                    <p>CEO Johnson LTD</p>
                                </div>
                            </div>
                            <div className="testimonial__text">
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                                <div className="rating">
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="far fa-star"/>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial">
                            <div className="testimonial__user-profile">
                                <img src={"assets/george.png"} alt="George Anderson"/>
                                <div>
                                    <h6 className="h-6">George Anderson</h6>
                                    <p>CEO Johnson LTD</p>
                                </div>
                            </div>
                            <div className="testimonial__text">
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                                <div className="rating">
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="far fa-star"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonials__overview">
                        <div className="arrow-btns">
                            <button><i className="fas fa-chevron-right"/></button>
                            <button><i className="fas fa-chevron-left"/></button>
                        </div>
                        <div className="testimonials__details">
                            <h3 className="h-3">Our customers have amazing reviews<br/> about our service</h3>
                            <div className="quote">
                                <p>It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.</p>
                            </div>
                            <div className="user-profile">
                                <img src={"assets/christian.png"} alt="George Anderson"/>
                                <div>
                                    <h6 className="h-6">George Anderson</h6>
                                    <p>CEO Johnson LTD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial;