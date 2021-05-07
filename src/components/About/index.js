import React from "react"
import AboutHeader from "./AboutHeader";
import Info from "./Info";
import TeamGallery from "./TeamGallery";
import OnPageSignUp from "../OnPageSignUp";

const About = () => {
    document.title = "EaziCred - Index Us"
    return (
        <React.Fragment>
            <AboutHeader/>
            <Info/>
            <TeamGallery/>
            <OnPageSignUp/>
        </React.Fragment>
    )
}
export default About