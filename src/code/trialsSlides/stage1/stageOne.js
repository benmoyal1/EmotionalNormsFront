import { fixation } from "../fixation.js";
import { adjustHtml } from "../../htmlSetters/onLoadFuncs.js";

import { feedbackScreen } from "./feedbackScreenSelf.js";
import { conf } from "../../ExperimentClasses/timeTable.js";
import { textJson as textJ } from "../textAndHtml.js";
import { HTMLJson as HtmlJ } from "../textAndHtml.js";
/**
 * returns an object of trial from stage 1
 *
 * @param {*} stageObj
 * @param {*} expObj
 * @param {*} stage
 * @returns
 */
var firstCondSlide = function (stageObj, expObj, stage) {
  var ASKED_ABOUT_PARTICIPANT = 1;
  var procedure = stage == 1 ? "Training" : "Learning";

  return {
    timeline: [
      fixation, // the fixation trial
      {
        type: "html-slider-response-modified",
        stimulus: HtmlJ.stimulusImg(stageObj.pic_num),
        on_load: adjustHtml(expObj.gender),
        blocks: [
          {
            text: "",
            slider: false,
            locked: true,
            duration: conf.stimulousPresentation,
          },
          {
            text: textJ.howDoesImgMakeYouFeelTXT,
            slider: true,
            locked: false,
            key_press: "space",
            require_response: true,
          },
        ],
        labels: HtmlJ.scaleLabel,
        max: 100,
        min: -100,
        on_finish: function (data) {
          var trialResponse = data.response[1].slider; // trial response
          var trialResultObject = {
            Subject: expObj.subject,
            age: expObj.age,
            exposedJew:expObj.isJew? 1 : 0,
            exposedMoreExtreme:expObj.isExtremeCondition,
            imageNum: stageObj.pic_num,
            gender: expObj.gender,
            procedure: procedure,
            IsYouTrial: ASKED_ABOUT_PARTICIPANT,
            response: trialResponse,
            trialNum: expObj.trialIndex++,
          };
          if (stage == 1) {
            expObj.baselineResponses.push(trialResponse);
            trialResultObject["imageAndQ.Slider1.Value"] = trialResponse;
          }
          if (stage == 2) {
            trialResultObject.baseline = expObj.baselineAverage;
            trialResultObject["imageAndQ1.Slider1.Value"] = trialResponse;
          }
          expObj.experimentData.push(trialResultObject);
        },
      },
      feedbackScreen(
        stageObj.pic_num,
        expObj.gender,
        textJ.thisIsYourResponseText(expObj.gender)
      ),
    ],
  };
};

export { firstCondSlide };
