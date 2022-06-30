export function ProgressBar(props) {
    if (props.currentStep === 1) {
      return (
        <ul className="progress-bar">
          <li onClick={() => props.recall(1)} className="bar-active">
            Select Service
          </li>
          <li className="bar-gray">Scheduling</li>
          <li className="bar-gray">Your Information</li>
          <li className="bar-gray">Review Your Order</li>
        </ul>
      );
    }
  
    if (props.currentStep === 2) {
      return (
        <ul className="progress-bar">
          <li onClick={() => props.recall(1)} className="bar-active">
            Select Service
          </li>
          <li onClick={() => props.recall(2)} className="bar-active">
            Scheduling
          </li>
          <li className="bar-gray">Your Information</li>
          <li className="bar-gray">Review Your Order</li>
        </ul>
      );
    }
  
    if (props.currentStep === 3) {
      return (
        <ul className="progress-bar">
          <li onClick={() => props.recall(1)} className="bar-active">
            Select Service
          </li>
          <li onClick={() => props.recall(2)} className="bar-active">
            Scheduling
          </li>
          <li onClick={() => props.recall(3)} className="bar-active">
            Your Information
          </li>
          <li className="bar-gray">Review Your Order</li>
        </ul>
      );
    }
  
    if (props.currentStep === 4) {
      return (
        <ul className="progress-bar">
          <li onClick={() => props.recall(1)} className="bar-active">
            Select Service
          </li>
          <li onClick={() => props.recall(2)} className="bar-active">
            Scheduling
          </li>
          <li onClick={() => props.recall(3)} className="bar-active">
            Your Information
          </li>
          <li onClick={() => props.recall(4)} className="bar-active">
            Review Your Order
          </li>
        </ul>
      );
    }
  } // progress bar