import React from "react";
import { StateValueDependentButton } from "./buttonComponent";

class GetZipCode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        zipcode: 90709,
        buttonActive: false,
      }

    // Bind methods to class
     this.handleChange = this.handleChange.bind(this);
     this.setButtonActive = this.setButtonActive.bind(this);
    }

    // use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target;
        
        this.setState({
        [name]: value,
        });

        // check button active
        this.setButtonActive(value);
    } // handleChange

    setButtonActive(eventValue) {
        if (eventValue.length === 5) {
            this.setState({
                buttonActive: true,
                });
        } else {
            this.setState({
                buttonActive: false,
                });
        }
    }

    render() {
         // the markup for get zipcode step
        return (
            <React.Fragment>
            <div className="zip-form-container">
                <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    value={this.state.zipcode}
                    onChange={(event) => this.handleChange(event)}
                />
                <StateValueDependentButton 
                    buttonText={this.props.buttonText} 
                    handleClick={this.props.handleClick}
                    activeState={this.state.buttonActive}
                />
            </div>
            </React.Fragment>
        );
    }
}

export { GetZipCode };