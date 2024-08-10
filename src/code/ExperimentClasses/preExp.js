import { generateLastSlide, generateSlides, generateWelcomeSlides } from "../trialsSlides/instructions/instruction_slides.js";
import { conf } from "./timeTable.js";
import {stage3SinglePerson} from "../trialsSlides/stage3/stageThree.js"
import {
  responsesJson,
  baselineImagesObject,
  experimentImagesObject,
} from "../../data/ImagesRepository.js";
import { firstCondSlide } from "../trialsSlides/stage1/stageOne.js";
import { otherCond } from "../trialsSlides/stage2/stageTwo.js";
import { calculateBaselineAndDifferece } from "../trialsSlides/stage1/calcBaseline.js";
import {generateSurvey} from "../trialsSlides/survey/generateSurvey.js";
class preExp {
  constructor() {
    this.stage1TrielNum = conf.minSlides ? 2 : 10;
    this.stage2ATrielNum = conf.minSlides ? 2 : 35;  
    this.stage2BTrielNum = conf.minSlides ? 2 : 35; 
    this.stage3TrielNum = conf.minSlides ? 2 : 16;

    this.timeline = [];
    this.firstCondDiffenece = 0; // negativeImageAverage - baselineAverage - calculated after the first 10 slides
    this.imageAverage = -42.68;
    this.flagPath = "";
    this.condition = 0;
    this.trialIndex = 1;
  }
  initDemographicSurvey(){
    this.timeline.push(...generateSurvey(this));
  }
  initStage1Instructions(gender) {
    const stage1 = 1;
    this.timeline.push(...generateWelcomeSlides());
    this.timeline.push(...generateSlides(stage1, gender));
  }
  initStage1Trials() {
    const stage1Objects = conf.minSlides
      ? [baselineImagesObject[0], baselineImagesObject[1]]
      : baselineImagesObject;

    const stage = 1;
    for (var i = 0; i < this.stage1TrielNum; i++) {
      this.timeline.push(firstCondSlide(stage1Objects[i], this, stage));
    }
  }
  initCalculateBaselineFunc() {
    this.timeline.push(calculateBaselineAndDifferece(this));
  }

  initStage2Instructions(gender) {
    const stage2 = 2;
    this.timeline.push(...generateSlides(stage2, gender));
  }
  initStage2Trials() {
    var stage2Objects = {
      other: experimentImagesObject.slice(0, this.stage2ATrielNum),
      self: experimentImagesObject.slice(
        this.stage2ATrielNum,
        this.stage2ATrielNum + this.stage2BTrielNum
      ),
    };
    for (var i = 0; i < this.stage2ATrielNum; i++) {
      stage2Objects.other[i].name = this.names[i];
    }
    var Stage2Timeline = [];
    const stage2 = 2;
    for (var i = 0; i < stage2Objects.other.length; i++) {
      Stage2Timeline.push(
        firstCondSlide(stage2Objects.self[i], this, stage2),
        otherCond(stage2Objects.other[i], this)
      );
    }
    this.timeline.push(...jsPsych.randomization.repeat(Stage2Timeline, 1));
  }
  initStage3Instructions(gender) {
    const stage3 = 3;
    this.timeline.push(...generateSlides(stage3, gender));
  }
  initStage3Trials() {
    var flagURls = [this.participantFlag, this.oppositeFlag];
    var isExtremeKey = 0;
    var counter = 0;
    var namesLastIdx = this.names.length - 1;
    var otherLastIdx = this.otherNames.length - 1;
    var trialsBeforeShuffle = [];
    for (var i = 0; i < this.stage3TrielNum / 2; i++) {
      if (i == 4) {
        counter = 0;
        isExtremeKey = 1;
      }
      var stageObjSelf = {
        name: this.names[namesLastIdx - i],
        isMex: responsesJson[isExtremeKey][counter * 2][1],
        average: responsesJson[isExtremeKey][counter * 2][0],
        flag: flagURls[0],
      };
      var stageObjOther = {
        name: this.otherNames[otherLastIdx - i],
        isMex: responsesJson[isExtremeKey][counter * 2 + 1][1],
        average: responsesJson[isExtremeKey][counter * 2 + 1][0],
        flag: flagURls[1],
      };
      trialsBeforeShuffle.push(
        stage3SinglePerson(stageObjSelf, this),
        stage3SinglePerson(stageObjOther, this)
      );
    }
    this.timeline.push(...jsPsych.randomization.repeat(trialsBeforeShuffle,1));
  }
  initLastSlide() {
    this.timeline.push(generateLastSlide(this));
  }
}

export default preExp;
