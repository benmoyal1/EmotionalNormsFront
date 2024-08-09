import preExp from "./preExp.js";
import { sendDataToServer } from "../api/dataToServer.js";
import namesByCond from "../../data/Names.js";

class Experiment extends preExp {
  constructor(age, gender, kv) {
    super();
    this.baselineResponses = [];
    this.baselineAverage = 0;
    this.experimentData = [];
    this.surveyData = {};
    this.initParticipantAttributes(age, gender, kv);
    this.initStage1();
    this.initStage2();
    this.initStage3();
  }
  initParticipantAttributes(age, gender, kv) {
    this.age = age;
    this.gender = gender;
    this.subject = kv.maleCounter + kv.femaleCounter;
    this.genderNum = gender == "male" ? kv.maleCounter : kv.femaleCounter;

    // 1 - non extreme jew 2- extreme jew  3 - non extreme arab 4 - extreme arab
    this.participantCategory = (this.genderNum % 4) + 1;
    // cond == -1 ==> extreme
    this.cond =
      this.participantCategory == 2 || this.participantCategory == 4 ? -1 : 1;
    this.isExtremeCondition = this.cond == -1 ? 1 : 0;
    this.isJew = this.participantCategory <= 2;
    this.participantFlag = this.isJew
      ? "Flag_Israel.jpg"
      : "Flag_Palestine.jpg";
    this.oppositeFlag = this.isJew ? "Flag_Palestine.jpg" : "Flag_Israel.jpg";
    this.participantFlagPath = `./data/simbols/${this.participantFlag}`;
    this.oppositeFlagPath = `./data/simbols/${this.oppositeFlag}`;
    // [ jewMale,jewFemale,arabMale,arabFemale]
    var JewArabIndex = this.isJew ? 0 : 2;
    var maleFemaleIndex = Number(this.gender == "female");
    this.names = namesByCond[JewArabIndex + maleFemaleIndex];
    this.otherNames =
      namesByCond[((JewArabIndex + 2) % 4) + Number(this.gender == "female")];
  }
  initStage1() {
    this.initStage1Instructions(this.gender);
    this.initStage1Trials();
    this.initCalculateBaselineFunc();
  }
  initStage2() {
    this.initStage2Instructions(this.gender);
    this.initStage2Trials();
  }
  initStage3() {
    this.initStage3Instructions(this.gender);
    this.initStage3Trials();
    this.initDemographicSurvey();
    this.initLastSlide();

  }
  dataToServer() {
    sendDataToServer(this);
  }
  startExp() {
    jsPsych.init({
      timeline: this.timeline,
    });
  }
}

export default Experiment;
