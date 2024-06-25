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
  var picNum = stageObj.pic_num;
  var ASKED_ABOUT_PARTICIPANT = 1;
  var procedure = stage == 1 ? "trainProc" : "ExpBlocProc";

  return {
    timeline: [
      fixation,
      {
        type: "html-slider-response-modified",
        stimulus: function () {
          return (
            '<div style="margin: auto;  width: 80%; text-align: center; overflow: hidden;">' +
            '<img src="./src/data/stimuli/' +
            picNum +
            '.jpg" style="max-width: 100%; max-height: 100%;" />' +
            "</div>"
          );
        },
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
            gender: expObj.gender,
            procedure: procedure,
            condition: expObj.cond,
            IsYouTrial: ASKED_ABOUT_PARTICIPANT,
            feedbackValue: trialResponse,
            Block: expObj.trialIndex++,
            extendedCondition: expObj.participantCategory, // values 1 - 4
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
        picNum,
        expObj.gender,
        textJ.thisIsYourResponseText(expObj.gender)
      ),
    ],
  };
};

export { firstCondSlide };
