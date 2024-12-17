import {
  generateLastSlide,
  generateSlides,
  generateWelcomeSlides,
} from "../trialsSlides/instructions/instruction_slides.js";
import { conf } from "./timeTable.js";
import { stage3SinglePerson } from "../trialsSlides/stage3/stageThree.js";
import {
  responsesJson,
  baselineImagesObject,
  experimentImagesObject,
} from "../../data/ImagesRepository.js";
import { firstCondSlide } from "../trialsSlides/stage1/stageOne.js";
import { otherCond } from "../trialsSlides/stage2/stageTwo.js";
import { calculateBaselineAndDifferece } from "../trialsSlides/stage1/calcBaseline.js";
import { generateSurvey } from "../trialsSlides/survey/generateSurvey.js";
import namesByCond from "../../data/Names.js";
class preExp {
  constructor() {
    this.stage1TrielNum = conf.minSlides ? 2 : 10;
    this.stage2ATrielNum = conf.minSlides ? 2 : 35;
    this.stage2BTrielNum = conf.minSlides ? 2 : 35;
    this.stage3TrielNum = conf.minSlides ? 2 : 12;

    this.timeline = [];
    this.firstCondDiffenece = 0; // negativeImageAverage - baselineAverage - calculated after the first 10 slides
    this.imageAverage = -42.68;
    this.flagPath = "";
    this.condition = 0;
    this.trialIndex = 1;
  }
  initDemographicSurvey() {
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
    /**
     * This function iterates n/2 times when n is the slides num of stage 3
     * each look it will add a jew and an arab of the same gender
     * the first half of the iterations add non extreme and the other half adds extreme cases
     * when we get to half of the slides (n/4 iterations) we change from nonextreme to extreme
     * key
     */

    var flagURls = [this.participantFlag, this.oppositeFlag];
    var isExtremeKey = 0;
    var counter = 0;

    var trialsBeforeShuffle = [];

    var jewIdx = this.gender == "male" ? 0 : 1;
    var arabIdx = this.gender == "male" ? 2 : 3;

    var jewLastIdx = namesByCond[jewIdx].length - 1;
    var arabLastIdx = namesByCond[arabIdx].length - 1;

    var JewExtreme1 = {
      name: namesByCond[jewIdx][jewLastIdx],
      isCharacterMex: 1,
      isCharacterJew: 1,
      average: responsesJson[1][0][0],
      flag: "Flag_Israel.jpg",
    };

    var JewExtreme2 = {
      name: namesByCond[jewIdx][jewLastIdx - 1],
      isCharacterMex: 1,
      isCharacterJew: 1,
      average: responsesJson[1][1][0],
      flag: "Flag_Israel.jpg",
    };

    var JewExtreme3 = {
      name: namesByCond[jewIdx][jewLastIdx - 2],
      isCharacterMex: 1,
      isCharacterJew: 1,
      average: responsesJson[1][2][0],
      flag: "Flag_Israel.jpg",
    };

    var JewNonExtreme1 = {
      name: namesByCond[jewIdx][jewLastIdx - 3],
      isCharacterMex: 0,
      isCharacterJew: 1,
      average: responsesJson[0][0][0],
      flag: "Flag_Israel.jpg",
    };

    var JewNonExtreme2 = {
      name: namesByCond[jewIdx][jewLastIdx - 4],
      isCharacterMex: 0,
      isCharacterJew: 1,
      average: responsesJson[0][1][0],
      flag: "Flag_Israel.jpg",
    };

    var JewNonExtreme3 = {
      name: namesByCond[jewIdx][jewLastIdx - 5],
      isCharacterMex: 0,
      isCharacterJew: 1,
      average: responsesJson[0][2][0],
      flag: "Flag_Israel.jpg",
    };

    var arabExtreme1 = {
      name: namesByCond[arabIdx][arabLastIdx],
      isCharacterMex: 1,
      isCharacterJew: 0,
      average: responsesJson[1][3][0],
      flag: "Flag_Palestine.jpg",
    };

    var arabExtreme2 = {
      name: namesByCond[arabIdx][arabLastIdx - 1],
      isCharacterMex: 1,
      isCharacterJew: 0,
      average: responsesJson[1][4][0],
      flag: "Flag_Palestine.jpg",
    };

    var arabExtreme3 = {
      name: namesByCond[arabIdx][arabLastIdx - 2],
      isCharacterMex: 1,
      isCharacterJew: 0,
      average: responsesJson[1][5][0],
      flag: "Flag_Palestine.jpg",
    };

    var arabNonExtreme1 = {
      name: namesByCond[arabIdx][arabLastIdx - 3],
      isCharacterMex: 0,
      isCharacterJew: 0,
      average: responsesJson[0][3][0],
      flag: "Flag_Palestine.jpg",
    };

    var arabNonExtreme2 = {
      name: namesByCond[arabIdx][arabLastIdx - 4],
      isCharacterMex: 0,
      isCharacterJew: 0,
      average: responsesJson[0][4][0],
      flag: "Flag_Palestine.jpg",
    };

    var arabNonExtreme3 = {
      name: namesByCond[arabIdx][arabLastIdx - 5],
      isCharacterMex: 0,
      isCharacterJew: 0,
      average: responsesJson[0][5][0],
      flag: "Flag_Palestine.jpg",
    };

    // console.log(JewExtreme1);
    // console.log(JewExtreme2);
    // console.log(JewExtreme3);
    // console.log(JewNonExtreme1);
    // console.log(JewNonExtreme2);
    // console.log(JewNonExtreme3);
    console.log(arabExtreme1);
    console.log(arabExtreme2);
    console.log(arabExtreme3);
    console.log(arabNonExtreme1);
    console.log(arabNonExtreme2);
    console.log(arabNonExtreme3);

    trialsBeforeShuffle.push(stage3SinglePerson(JewExtreme1, this));
    trialsBeforeShuffle.push(stage3SinglePerson(JewExtreme2, this));
    trialsBeforeShuffle.push(stage3SinglePerson(JewExtreme3, this));
    trialsBeforeShuffle.push(stage3SinglePerson(JewNonExtreme1, this));
    trialsBeforeShuffle.push(stage3SinglePerson(JewNonExtreme2, this));
    trialsBeforeShuffle.push(stage3SinglePerson(JewNonExtreme3, this));
    trialsBeforeShuffle.push(stage3SinglePerson(arabExtreme1, this));
    trialsBeforeShuffle.push(stage3SinglePerson(arabExtreme2, this));
    trialsBeforeShuffle.push(stage3SinglePerson(arabExtreme3, this));
    trialsBeforeShuffle.push(stage3SinglePerson(arabNonExtreme1, this));
    trialsBeforeShuffle.push(stage3SinglePerson(arabNonExtreme2, this));
    trialsBeforeShuffle.push(stage3SinglePerson(arabNonExtreme3, this));

    // for (var i = 0; i < this.stage3TrielNum / 2; i++) {
    //   if (i == this.stage3TrielNum / 4) {
    //     counter = 0;
    //     isExtremeKey = 1;
    //   }

    //   var stageObjSelf = {
    //     name: this.names[namesLastIdx - i],
    //     isCharacterMex: responsesJson[isExtremeKey][counter * 2][1],
    //     isCharacterJew: this.isJew,
    //     average: responsesJson[isExtremeKey][counter * 2][0],
    //     flag: flagURls[0],
    //   };
    //   var stageObjOther = {
    //     name: this.otherNames[otherLastIdx - i],
    //     isCharacterMex: responsesJson[isExtremeKey][counter * 2 + 1][1],
    //     isCharacterJew: this.isJew ? 0 : 1,
    //     average: responsesJson[isExtremeKey][counter * 2 + 1][0],
    //     flag: flagURls[1],
    //   };
    //   trialsBeforeShuffle.push(
    //     stage3SinglePerson(stageObjSelf, this),
    //     stage3SinglePerson(stageObjOther, this)
    //   );
    // }
    this.timeline.push(...jsPsych.randomization.repeat(trialsBeforeShuffle, 1));
  }
  initLastSlide() {
    this.timeline.push(generateLastSlide(this));
  }
}

export default preExp;
