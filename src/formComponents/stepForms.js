import React, { useState } from "react";
import { ExitButton, ToggleButton } from "./buttonComponent";
import { CarpetCleaning, UpholsteryCleaning } from "./cleaningServices";
import { GetZipCode } from "./inputZipcodeComponent";

export function Form1(props) {
     // the markup for get zipcode step
     return (
        <React.Fragment>
        <div className="form-group zip-form">
            <ExitButton exit={props.exit}/>
            <h3>BUILD YOUR QUOTE</h3>
            <h1>PLEASE ENTER YOUR ZIP CODE</h1>
            <p>Tell us the zipcode of the location you want us to have serviced</p>
            <GetZipCode buttonText='Continue' handleClick={props.handleClick} />
        </div>
        </React.Fragment>
    );
}

export function CarpetCleaningServiceForm(props) {
    const [displayForm, setDisplayForm] = useState(false);

    return (
        <React.Fragment>
            <article className="service-option">
                <div className="service-head">
                <h3>
                    {'CARPET CLEANING'} 
                    <ToggleButton Display={displayForm} setDisplay={setDisplayForm}/>
                </h3>
                </div>
                <CarpetCleaning displayForm={displayForm}/>
            </article>

            
        </React.Fragment>
    );
}

export function UpholsteryCleaningServiceForm(props) {
    const [displayForm, setDisplayForm] = useState(false);

    return (
        <React.Fragment>
            <article className="service-option">
                <div className="service-head">
                <h3>
                    {'UPHOLSTERY CLEANING'} 
                    <ToggleButton Display={displayForm} setDisplay={setDisplayForm}/>
                </h3>
                </div>
                <UpholsteryCleaning displayForm={displayForm}/>
            </article>

            
        </React.Fragment>
    );
}
