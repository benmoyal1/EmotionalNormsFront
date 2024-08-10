import { conf } from "../../ExperimentClasses/timeTable.js";
import { instJsonHTML as instJson } from "./instHTML.js";
const adjustCSSForInstTrials = () => {
    // Apply styles to prevent overflow and disable scrolling
    const style = document.createElement('style');
    style.innerHTML = `
        .jspsych-content-wrapper, .jspsych-content {
            overflow: hidden;
            max-height: 100vh;
            max-width: 100vw;
        }
        .jspsych-display-element {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
  };
const generateWelcomeSlides = () => {
  const locked = {
    type: "html-keyboard-response",
    stimulus: instJson["welcome"],
    choices: null,
    response_ends_trial: false,
    trial_duration: conf.stage1InstHold,
    on_load:adjustCSSForInstTrials,
  };
  const withCont = {
    type: "html-keyboard-response",
    stimulus: instJson["welcome_continue"],
    choices: ["space"],
  };

  return [locked, withCont];
};

const generateSlides = (stage, gender) => {
  const adjusted_stage = stage + 1;
  const stimulusLockedHtml = instJson[`instructions_${adjusted_stage}_stage_${stage}_${gender}`];
  const stimulusWithContHtml = instJson[`instructions_${adjusted_stage}_stage_${stage}_${gender}_continue`];

  const locked = {
    type: "html-keyboard-response",
    stimulus: stimulusLockedHtml,
    choices: null,
    response_ends_trial: false,
    trial_duration: conf.stage1InstHold,
    on_load:adjustCSSForInstTrials,

  };

  const withCont = {
    type: "html-keyboard-response",
    stimulus: stimulusWithContHtml,
    choices: ["space"],
  };

  return [locked, withCont];
};


var generateLastSlide = (expObj) => {
  const gender = expObj.gender;
  const stimulous = instJson[`instructions_5_ending_${gender}`]
  return {
    type: "html-keyboard-response",
    stimulus: stimulous,
    choices: null,
    response_ends_trial: false,
    on_load: function () {
    adjustCSSForInstTrials()
      expObj.dataToServer();
    },
  };
};

export { generateSlides,generateWelcomeSlides, generateLastSlide as lastSlide };
