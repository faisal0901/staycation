import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKey = Object.keys(steps);
  const [CurrentStep, SetCurrentStep] = useState(
    stepsKey.indexOf(initialStep) > -1 ? initialStep : stepsKey[0]
  );
  const totalStep = stepsKey.length;
  const indexStep = stepsKey.indexOf(CurrentStep);
  function prevStep() {
    if (+indexStep > 0) SetCurrentStep(stepsKey[indexStep - 1]);
  }
  function nextStep() {
    if (+indexStep < totalStep) SetCurrentStep(stepsKey[indexStep + 1]);
  }
  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}
Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";
