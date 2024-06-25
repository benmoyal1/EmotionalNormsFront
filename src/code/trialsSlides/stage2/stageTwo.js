import { fixation } from "../fixation.js";
import { adjustHtml } from "../../htmlSetters/onLoadFuncs.js";

import { conf } from "../../ExperimentClasses/timeTable.js";
import { HTMLJson as HtmlJ } from "../textAndHtml.js";
import { calculateFeedback } from "./calculateFeedback.js";
import { otherFeedbackScreen } from "./feedbackScreenOther.js";
const FLAGS_DIR = `./data/simbols/`;
const STD = "Std. Deviation";
const ASKED_ABOUT_PARTICIPANT = 0;
const PROCEDURE = "ExpBlocProc";

var otherCond = function (stageObj, expObj) {
  var objName = stageObj.name;
  const flagPath = FLAGS_DIR + expObj.participantFlag;

  var otherCalc = calculateFeedback(stageObj.Mean, stageObj[STD], expObj);
  var howOtherFeltQu = HtmlJ.hthowDidTheyRespondHTML(stageObj.name, flagPath);
  var TheyRateText = HtmlJ.howTheyRatedHTML(objName, expObj.gender);

  return {
    timeline: [
      fixation,
      {
        type: "html-slider-response-modified",
        stimulus: function () {
          return `<div style="margin: auto;">
                            <img src="data/stimuli/${stageObj.pic_num}.jpg" style="width: 500px;" />
                        </div>`;
        },

        on_load: adjustHtml(expObj.gender),
        blocks: function () {
          return [
            {
              text: "",
              slider: false,
              locked: true,
              duration: conf.stimulousPresentation,
            },
            {
              text: howOtherFeltQu,
              slider: true,
              locked: false,
              key_press: "space",
              require_response: true,
              start: 0,
            },
          ];
        },
        labels: HtmlJ.scaleLabel,
        max: 100,
        min: -100,
        on_finish: function (data) {
          var trialResponse = data.response[1].slider; // trial response
          var trialResultObject = {
            Subject: expObj.subject,
            age: expObj.age,
            condition: expObj.cond,
            gender: expObj.gender,
            imageNum: stageObj.pic_num,
            procedure: PROCEDURE,
            IsYouTrial: ASKED_ABOUT_PARTICIPANT,
            otherCalc: otherCalc,
            feedbackValue: trialResponse,
            baseline: expObj.baselineAverage,
            Block: expObj.trialIndex++,
            participantCategory: expObj.participantCategory,
          };
          expObj.experimentData.push(trialResultObject);
        },
      },
      otherFeedbackScreen(stageObj, expObj, TheyRateText, otherCalc),
    ],
  };
};

export { otherCond };
