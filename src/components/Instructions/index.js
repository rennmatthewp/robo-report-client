import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Instructions = () => {
  return (
    <div className="instructions">
      <div className="instruction-group">
        <h4 className="instructions__heading">How it works:</h4>
        <p className="instructions__body">
          When you choose to submit a new complaint, you will be taken through
          all of the questions needed to complete the report. The questions are
          taken directly from the FCC&#39;s complaint form for unwanted calls.
          Once you have completed all of the required parts of the form, Robo
          Report will pull up the FCC form and complete it for you! <br />
          <br />
        </p>
      </div>
      <div className="instruction-group">
        <p>To finish the process, all you will need to do is:</p>
        <ol className="instruction-group__ol">
          <li className="instruction-group__li">
            Scoll through and review the form, making any edits as needed.
          </li>
          <li className="instruction-group__li">
            Read and click the attest statement near the bottom.
          </li>
          <li className="instruction-group__li">
            Check the Captcha that you are not a robot (ironic, we know)
          </li>
          <li className="instruction-group__li">Submit the form!</li>
        </ol>
      </div>
      <div className="instruction__btn-block">
        <Link className="submit-new-complaint-btn" to="/newComplaint">
          Submit New Complaint
        </Link>
      </div>
    </div>
  );
};

export default Instructions;
