import React from "react";

const TeamGallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="h-2">Meet The Team</h2>
                <p>Meet the awesome team building EaziCred</p>
                <div className="gallery__inner">
                    <div className="gallery__box">
                        <img src="assets/member-1.jpg" alt="eazicred member picture"/>
                            <p className="title">CEO &amp; Founder</p>
                            <h3 className="h-3">Dany Monson</h3>
                    </div>

                    <div className="gallery__box">
                        <img src="assets/member-2.jpg" alt="eazicred member picture"/>
                            <p className="title">Art Director</p>
                            <h3 className="h-3">Baha Moretz</h3>
                    </div>

                    <div className="gallery__box">
                        <img src="assets/member-3.jpg" alt="eazicred member picture"/>
                            <p className="title">Front End Developer</p>
                            <h3 className="h-3">Dima Grinchenko</h3>
                    </div>

                    <div className="gallery__box">
                        <img src="assets/member-4.jpg" alt="eazicred member picture"/>
                            <p className="title">Manager</p>
                            <h3 className="h-3">Polly Clark</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamGallery