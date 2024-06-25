import { conf } from "../../ExperimentClasses/timeTable.js";
const generateSlides = (stage,gender) => {
    const adjusted_stage = stage + 1
    const imgsrc =  stage == 0?
    `./src/data/instructions/instructions_1_opening_page.png` :
    `./src/data/instructions/instructions_${adjusted_stage}_stage_${stage}_${gender}.png`;
    const stimulus = `<div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh;">
            <img src="${imgsrc}" style="width:100%; height: auto;"></div>`
    const locked = {
        type: "html-keyboard-response",
        stimulus:stimulus,
        choices: null,
        response_ends_trial: false,
        trial_duration: conf.stage1InstHold,
    }
    const free = {
        type: "html-keyboard-response",
        stimulus: stimulus,
        choices: ["space"],
    }
    return [locked,free];
}

var lastSlide = (expObj) => {
    return {
        type: 'html-keyboard-response',
        stimulus: `<div style="background-color: black; display: flex; justify-content: center; align-items: center; height: 100vh;">
            <img src="./src/data/instructions/instructions_5_ending_${expObj.gender}.png" style="width:100%; height: auto;"></div>`,
        choices: null,
        response_ends_trial: false,
        on_load: function() {
            expObj.dataToServer();
        }
    };
};


export { generateSlides,lastSlide};
