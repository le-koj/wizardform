import React from "react";

class StateValueDependentButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        false: false,
      }

    // Bind methods to class
  
    }

    render() {
        if (this.props.activeState) {
            return (
              <button
                className="btn btn-continue btn-active"
                type="button"
                onClick={this.props.handleClick}
              >
                {this.props.buttonText}
              </button>
            );
        }

        return (
            <button
              className="btn btn-continue btn-gray"
              type="button"
              onClick={null}
            >
              {this.props.buttonText}
            </button>
          );

    }
}

export function ExitButton(props) {
    return (
        <button className="btn btn-exit" type="button" onClick={props.exit}> 
          x
        </button>
      );
}

export function ToggleButton(props) {
    if (props.Display) {
        return (
          <span onClick={() => props.setDisplay(false)} className="togg-icon">
            &#x2191;
          </span>
        );
      } else {
        return (
          <span onClick={() => props.setDisplay(true)} className="togg-icon">
            &#x2193;
          </span>
        );
      }
}

export { StateValueDependentButton };
