// //initializing number of trials per stage. Stage 1 should be up to 10, represents the number of trials per valence.
//       //stage2*2 + stage3*2 <= 50. Stage 2 represents number per valence inside self/other type, stage 3 represents num per person.
//       const STAGE_1_TRIALS_NUM = 10;
//       const STAGE_2A_TRIALS_NUM = 35;
//       const STAGE_2B_TRIALS_NUM = 35;
//       const STAGE_3_TRIALS_NUM = 16;

//       const STAGE_1_INT = 1;
//       const STAGE_2_INT = 2;
//       const STAGE_3_INT = 3;

//       //Fast mode?
//       const FASTMODE = true;
//       const MIN_SLIDES = true;
//       //Waiting durations
//       const PRE_TRIAL_BREAK =  5 ;
//       const STIMULUS_PRESENTATION = FASTMODE? 0 : 2000;
//       const NAME_AVERAGE_PRESENTATION = FASTMODE? 0 : 5000;
//       const ITI_PRESENTATION =  FASTMODE? 0 : 4000;
//       const RESPONSE_PRESENTATION =  FASTMODE? 0 :  4000;
//       const RATE_THIS_PERSON_HOLD =  FASTMODE? 0 :  2000;
//       // Instruction slides HOLD
//         const WELCOME_HOLD = FASTMODE?  0 : 20000;//20000;
//         const STAGE_1_INSTRUCTION_HOLD = FASTMODE? 0 : 20000;//20000;
//         const STAGE_2_INSTRUCTION_HOLD = FASTMODE? 0 : 20000;//20000;
//         const STAGE_3_INSTRUCTION_HOLD = FASTMODE? 0 : 20000;//20000;

//       //Initializing variables for logics.js
//       var firstCondResponses = [];
//       var baselineAverage = 0;
//       var firstCondDiffenece = 0;
//       const negativeImageAverage = -42.68;
//       var isJew = 0;
//       var flagPath = "";
//       // initializing the result json
//       var experimentResult = [];
//       var condition = 0;
//       var trial_index = 1;
//       var extendedCondition = 0;

//       // this funciton starts the experiment
//       function startExperiment(gender,age,cond,genderSubject,Subject){
//         const idxJew = isJew?0:2;
//         const idxArab = isJew?2:0;
//         const idxGender = gender == "male"? 0 : 1;
//         const names = names_by_cond[idxJew + idxGender];
//         const differentGroupNames = names_by_cond[idxArab + idxGender];

//         //Create experiment objects
//         var stage1Objects = MIN_SLIDES
//           ? [TRAINING_NEG_IMAGES_OBJS[0],TRAINING_NEG_IMAGES_OBJS[1]]
//           : BASELINE_NEG_IMAGES_OBJS;

//           var stage2Objects = MIN_SLIDES
//           ? {
//             other: [TRAINING_NEG_IMAGES_OBJS[0]],
//             self: [TRAINING_NEG_IMAGES_OBJS[1]],
//           }
//           : {
//             other: TRAINING_NEG_IMAGES_OBJS.slice(
//               0,STAGE_2A_TRIALS_NUM),
//               self: TRAINING_NEG_IMAGES_OBJS.slice(
//                 STAGE_2A_TRIALS_NUM,
//                 STAGE_2A_TRIALS_NUM + STAGE_2B_TRIALS_NUM)
//               };

//               for (var i = 0; i < stage2Objects.other.length; i++) {
//                 stage2Objects.other[i].name = names[i];
//                 stage2Objects.other[i].cond = cond;
//               }

//       var stage3Object = []
//       const stage3len = MIN_SLIDES? 1:STAGE_3_TRIALS_NUM / 4;
//       const otherFlagPath = isJew?'data/simbols/Flag_Palestine.jpg' :'data/simbols/Flag_Israel.jpg';
//       for (var i = 0;i < stage3len  ;i++){
//           var stage3TrialObjectA = {
//             name:names[names.length - i*2 -1 ],
//             isMex : responsesJson["extreme"][2*i][1],
//             average:responsesJson["extreme"][2*i][0],
//             flag:flagPath
//           }
//           var stage3TrialObjectB = {
//             name:differentGroupNames[names.length - i*2 - 1],
//             isMex : responsesJson["extreme"][2*i + 1][1],
//             average:responsesJson["extreme"][2*i + 1][0],
//             flag:otherFlagPath

//           }
//           var stage3TrialObjectC = {
//             name:names[names.length - i*2 -2 ],
//             isMex : responsesJson['nonExtreme'][2*i][1],
//             average:responsesJson['nonExtreme'][2*i][0],
//             flag:flagPath
//           }
//           var stage3TrialObjectD = {
//             name:differentGroupNames[names.length - i*2 - 2],
//             isMex : responsesJson['nonExtreme'][2*i + 1][1],
//             average:responsesJson['nonExtreme'][2*i + 1][0],
//             flag:otherFlagPath
//           }
//           stage3Object.push(stage3TrialObjectA);
//           stage3Object.push(stage3TrialObjectB);
//           stage3Object.push(stage3TrialObjectC);
//           stage3Object.push(stage3TrialObjectD);
//         }

//         Stage1Timeline = [];
//         for (var i = 0; i < stage1Objects.length; i++) {
//           Stage1Timeline.push(firstCond(stage1Objects[i],gender,STAGE_1_INT,age,Subject));
//         }
//         var Stage1Full = {timeline:Stage1Timeline}
//         Stage2Timeline = [];

//       for (var i = 0; i < stage2Objects.self.length; i++) {
//         Stage2Timeline.push(
//           firstCond(stage2Objects.self[i],gender,STAGE_2_INT,age,Subject),
//           otherCond(stage2Objects.other[i],gender,age,Subject)
//         );
//       }
//       Stage2Timeline = jsPsych.randomization.repeat(Stage2Timeline,1);
//       var Stage2Full = {timeline:Stage2Timeline}

//       var stage3Timeline = [];
//       var stage3ObjectNum = MIN_SLIDES ? 1 : stage3Object.length;
//       for (var i = 0; i < stage3ObjectNum; i++) {
//         stage3Timeline.push(stage3SinglePerson(stage3Object[i],gender,age,Subject));
//       }
//       stage3Timeline = jsPsych.randomization.repeat(stage3Timeline,1);

//       var Stage3Full = {timeline:stage3Timeline}

//         let timeline = gender == "male" ?
//           [welcomeSlideA,welcomeSlideB,stage1InstMaleA,stage1InstMaleB,
//           Stage1Full,
//           calculateFirstCondDiffenece,
//           stage2InstMaleA,stage2InstMaleB,
//           Stage2Full,
//           stage3InstMaleA,stage3InstMaleB,
//           Stage3Full,fifthSlideMale(gender,genderSubject)]
//         :[welcomeSlideA,welcomeSlideB,stage1InstFemaleA,stage1InstFemaleB,
//           Stage1Full,
//           calculateFirstCondDiffenece,
//           stage2InstFemaleA,stage2InstFemaleB,
//           Stage2Full,
//           stage3InstFemaleA,stage3InstFemaleB,
//           Stage3Full,fifthSlideFemale(gender,genderSubject)]

//         //   let timeline = gender == "male" ?
//         //   [welcomeSlideA,Stage3Full]

//         // :[welcomeSlideA,Stage3Full];

//       var allImages = TRAINING_NEG_IMAGES_OBJS;
//       var IMAGES_TO_LOAD = [];
//         for (var i = 0; i < allImages.length; i++) {
//           IMAGES_TO_LOAD.push("data/stimuli/" + allImages[i].pic_num + ".jpg");
//         }
//         jsPsych.init({
//           timeline: timeline,
//           preload_images: IMAGES_TO_LOAD,
//           on_finish:function(){
//             console.log(experimentResult);
//           },
//         });
//       }

//       document.getElementById("genderForm").addEventListener("submit",async function(event) {
//         fullScreenAllBrowsers();

//         // gets gender age and number of participant and caclulate cond
//         var kv = await getParticipantNum();
//         const maleCounter = kv.maleCounter
//         const femaleCounter = kv.femaleCounter
//         var age = document.getElementById('age').value;
//         var gender = document.querySelector('input[name="gender"]:checked').value;

//         const genderSubject = gender == "male" ?maleCounter:femaleCounter;
//         const Subject = maleCounter + femaleCounter;
//         var cond = Subject % 2 == 0 ? 1 : -1;
//         extendedCondition = genderSubject % 4 + 1;
//         isJew =  extendedCondition <= 2? 1: 0;
//         flagPath = isJew?"data/simbols/Flag_Israel.jpg":"data/simbols/Flag_Palestine.jpg";
//         condition = cond;
//         if(0> age || age > 85){return;}
//     //   // Start the experiment with the collected gender data
//         startExperiment(gender,age,cond,genderSubject,Subject);
//       });
import Experiment from "./ExperimentClasses/Experiment.js";
import { getParticipantNum } from "./api/dataFromServer.js";
import { fullScreenAllBrowsers } from "./htmlSetters/focusAndScreen.js";
// var kv = await getParticipantNum();
// var exp = new Experiment(23, "male", kv);
// exp.startExp();
document
  .getElementById("genderForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    var age = document.getElementById("age").value;
    if (15 <= parseInt(age) && parseInt(age) < 85) {
      fullScreenAllBrowsers(); // prevents the default ecent behavior and enters full screen
      var gender = document.querySelector('input[name="gender"]:checked').value;
      var kv = await getParticipantNum();
      var exp = new Experiment(age, gender, kv);
      exp.startExp();
    }
  });
