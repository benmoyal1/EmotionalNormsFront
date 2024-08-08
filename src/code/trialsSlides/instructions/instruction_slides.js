import { conf } from "../../ExperimentClasses/timeTable.js";
import { instJsonHTML as instJson } from "./instHTML.js";
// const generateSlides = (stage, gender) => {
//   const adjusted_stage = stage + 1;
//   const imgSrcContinue =
//     stage == 0
//       ? `./src/data/instructions/instructions_1_opening_page.png`
//       : `./src/data/instructions/instructions_${adjusted_stage}_stage_${stage}_${gender}.png`;
//       const stimulusContinue = `<div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh;">
//       <img src="${imgSrcContinue}" style="width:90%; height: auto; margin-top: 4cm;"></div>`;

//   const imgSrcNoContinue =
//     stage == 0
//       ? `./src/data/instructions/instructions_1_opening_page_no_continue.png`
//       : `./src/data/instructions/instructions_${adjusted_stage}_stage_${stage}_${gender}_no_continue.png`;
//   const stimulusNoContinue = `<div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh;">
//                     <img src="${imgSrcNoContinue}" style="width:90%; height: auto;"></div>`;
//   const locked = {
//     type: "html-keyboard-response",
//     stimulus: stimulusNoContinue,
//     choices: null,
//     response_ends_trial: false,
//     trial_duration: conf.stage1InstHold,
//   };
//   const free = {
//     type: "html-keyboard-response",
//     stimulus: stimulusContinue,
//     choices: ["space"],
//   };
//   return [locked, free];
// };

const generateWelcomeSlides = () => {
  const locked = {
    type: "html-keyboard-response",
    stimulus: instJson["welcome"],
    // stimulus: instJson["instructions_2_stage_1_female"],
    
    choices: null,
    response_ends_trial: false,
    trial_duration: conf.stage1InstHold,
  };
  const withCont = {
    type: "html-keyboard-response",
    stimulus: instJson["welcome_continue"],
    // stimulus: instJson["instructions_2_stage_1_female"],
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
  };

  const withCont = {
    type: "html-keyboard-response",
    stimulus: stimulusWithContHtml,
    choices: ["space"],
  };

  return [locked, withCont];
};

// var lastSlide = (expObj) => {
//   return {
//     type: "html-keyboard-response",
//     stimulus: `<div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh;">
//             <img src="./src/data/instructions/instructions_5_ending_${expObj.gender}.png" style="width:100%; height: auto;"></div>`,
//     choices: null,
//     response_ends_trial: false,
//     on_load: function () {
//       expObj.dataToServer();
//     },
//   };
// };

var generateLastSlide = (expObj) => {
  const gender = expObj.gender;
  const stimulous = instJson[`instructions_5_ending_${gender}`]
  return {
    type: "html-keyboard-response",
    stimulus: stimulous,
    choices: null,
    response_ends_trial: false,
    on_load: function () {
      // expObj.dataToServer();
    },
  };
};

export { generateSlides,generateWelcomeSlides, generateLastSlide as lastSlide };
