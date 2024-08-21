import { fixation } from "../fixation.js";
import { HTMLJson as HtmlJ } from "../textAndHtml.js";
import { textJson as TextJ } from "../textAndHtml.js";
import {
  adjustHtmlFeedback,
  adjustHtmlStage3Rate,
} from "../../htmlSetters/onLoadFuncs.js";
import { conf } from "../../ExperimentClasses/timeTable.js";
const FLAGS_DIR = `./src/data/simbols/`;

var Stage3PresentAverage = function (stageObj, expObj) {
  const response = HtmlJ.averageResponseStage3(stageObj.name);
  const flagPath = FLAGS_DIR + stageObj.flag;
  return {
    type: "html-slider-response-modified",
    stimulus: function () {
      return HtmlJ.responseAverageStage3(response, flagPath, stageObj.average);
    },
    on_load: adjustHtmlFeedback(expObj.gender),
    blocks: function () {
      return [
        {
          text: "",
          slider: true,
          locked: true,
          key_press: null,
          text_color: "red",
          slider_color: "red",
          start: stageObj.average,
          duration: conf.nameAveragePresentation,
        },
        {
          text: "",
          slider: true,
          locked: true,
          key_press: "space",
          text_color: "red",
          slider_color: "red",
          start: stageObj.average,
        },
      ];
    },
    labels: HtmlJ.redScaleLabel,
    max: 100,
    min: -100,
    on_finish: function () {
      var trialResultObject = {
        averagePresented: stageObj.average,
        Subject: expObj.subject,
        gender: expObj.gender,
        procedure: "Judgment",
        exposedJew:expObj.isJew? 1 : 0,
        exposedMoreExtreme:expObj.isExtremeCondition,
        isMex: expObj.isMex,
        trialNum: expObj.trialIndex++,
      };
      expObj.experimentData.push(trialResultObject);
    },
  };
};

var Stage3RateThisPerson = function (
  stageObj,
  expObj,
  instructionFunc,
  propertyRate
) {
  return {
    type: "html-slider-response-modified",
    stimulus: function () {
      return HtmlJ.AnswerTheQuestionStage3();
    },
    on_load: adjustHtmlStage3Rate(),
    blocks: [
      {
        text: instructionFunc(stageObj.name, expObj.gender),
        slider_handle: false,
        start: 50,
        slider: true,
        locked: true,
        key_press: null,
        duration: conf.rateThisPersonHold,
      },
      {
        text: instructionFunc(stageObj.name, expObj.gender),
        slider: true,
        locked: false,
        start: 50,
        key_press: "space",
        require_response: true,
      },
    ],
    labels: HtmlJ.scaleForStage3,
    max: 100,
    min: 0,
    slider_dir: "ltr",
    on_finish: function (data) {
      var responses = data.response;
      var lastIdx = expObj.experimentData.length - 1;
      expObj.experimentData[lastIdx][propertyRate] = responses[1].slider;
      expObj.experimentData[lastIdx].age = expObj.age;
    },
  };
};

var stage3SinglePerson = function (stageObj, expObj) {
  var finalArray = [fixation];
  finalArray.push(Stage3PresentAverage(stageObj, expObj));
  finalArray.push(
    Stage3RateThisPerson(
      stageObj,
      expObj,
      TextJ.rateLikablility,
      "judgeQuestion.likeable.Value"
    )
  );
  finalArray.push(
    Stage3RateThisPerson(
      stageObj,
      expObj,
      TextJ.rateTrustworthiness,
      "judgeQuestion.trustworthy.Value"
    )
  );
  finalArray.push(
    Stage3RateThisPerson(
      stageObj,
      expObj,
      TextJ.rateCompenetce,
      "judgeQuestion.competent.Value"
    )
  );
  return {
    timeline: finalArray,
  };
};

export { stage3SinglePerson };
