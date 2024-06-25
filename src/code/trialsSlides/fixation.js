import { conf } from "../ExperimentClasses/timeTable.js";
//Fixation slide
var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="position: absolute; top:50%; left:50%; transform: translate(-50%,-50%);">' +
        '<span style="font-size: 5vw"><b>+</b></span>' + 
        '</div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: conf.fixationHold,
    // post_trial_gap: PRE_TRIAL_BREAK,
    data: {test_part: 'fixation'}
};

export {fixation};