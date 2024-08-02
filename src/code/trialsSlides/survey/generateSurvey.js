import { surveyVars as SV } from "./Vars.js";
const alignHTMLRight = () => {
  let html = '<style id="jspsych-align-css">';
  html +=
    ".jspsych-survey-multi-choice-question { margin-top: 2em; margin-bottom: 2em; text-align: right; }" + // Align questions to the right
    ".jspsych-survey-multi-choice-option { text-align: right; }" + // Align options to the right
    ".jspsych-survey-multi-choice-text { direction: rtl; }" + // Set text direction to right-to-left
    ".jspsych-survey-multi-choice-text span.required { color: darkred; }" + // Style required indicator
    ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text { text-align: center; }" + // Center text in horizontal layout
    ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option { display: inline-block; margin-left: 1em; margin-right: 1em; vertical-align: top; }" + // Style options in horizontal layout
    "label.jspsych-survey-multi-choice-text input[type='radio'] { margin-right: 1em; }"; // Style radio buttons
  html += "</style>";

  // Inject the CSS into the document head
  document.head.insertAdjacentHTML("beforeend", html);
  document.querySelector("#jspsych-survey-multi-choice-next").value =
    "לחצו כאן";
};
const changeLablesToWhite = () =>{
     // Inject CSS to change label color to white
     const style = document.createElement('style');
     style.textContent = `
       .jspsych-survey-likert-opt-label {
         color: white !important;
       }
     `;
     document.head.appendChild(style);
}
const addToQuestioneir = (expObj, quKey, quAnswer) => {
  expObj.surveyData[quKey] = quAnswer;
  console.log(expObj.surveyData);
};
const surveyTrial = (expObj,surveyPrompt, suerveyOptions, questioneirNum) => {
  return {
    type: "survey-multi-choice",
    questions: [
      {
        prompt: surveyPrompt,
        options: suerveyOptions,
        required: true,
      },
    ],
    on_load: alignHTMLRight,
    on_finish: function (data) {
        const quKey = `Q${questioneirNum}`
        const quAnswer = JSON.parse(data.responses).Q0;
        addToQuestioneir(expObj, quKey, quAnswer);
    },
  };
};
const likertTrial = (expObj,surveyPrompt,serveyLabels,questioneirNum) => {
  return {
    type: "survey-likert",
    questions: [
      {
        prompt: surveyPrompt,
        labels: serveyLabels,
        required: true,
      }],
    scale_width: 600, 
    preamble: 
    "<h4 style='font-size: 15px; text-align: right;'>אנא סמן בטבלה למטה את המספר המבטא בצורה הטובה ביותר את מידת הסכמתך עם המשפטים הבאים</h4>" + 
    "<h4 style='font-size: 15px; text-align: right;'>.כאשר 1 מבטא אי הסכמה מוחלטת, ו-7 מבטא הסכמה במידה רבה מאוד</h4>",
    on_load: () => {
      document.querySelector("#jspsych-survey-likert-next")?.setAttribute("value", "לחצו כאן");
      changeLablesToWhite();
    },
    on_finish: (data) => {
      const quKey = `Q${questioneirNum}`
      const quAnswer = JSON.parse(data.responses).Q0 + 1;
      console.log(quAnswer);
      addToQuestioneir(expObj, quKey, quAnswer);
    },
  }
};
const generateSurvey = (expObj) => {
  expObj.surveyData.Subject = expObj.subject;
  expObj.surveyData.procedure = "demographics";
  var surveyTrial0 = surveyTrial(expObj,SV.Q0Prompt,SV.Q0Ops ,0);
  var surveyTrial1 = surveyTrial(expObj,SV.Q1Prompt,SV.Q1Ops ,1);
  var surveyTrial2 = surveyTrial(expObj,SV.Q2Prompt,SV.Q2Ops ,2);
  var surveyTrial3 = surveyTrial(expObj,SV.Q3Prompt,SV.Q3Ops ,3);
  var surveyTrial4 = surveyTrial(expObj,SV.Q4Prompt,SV.Q4Ops ,4);
  var surveyTrial5 = surveyTrial(expObj,SV.Q5Prompt,SV.Q5Ops ,5);
  
  var sanityCheck =  likertTrial(expObj,SV.sanityCheckQu,SV.sanityCheckLabels,15);
  
  var likertTrial6 = likertTrial(expObj,SV.likertQ6Prompt,SV.likertQ6Labels,6);
  var likertTrial7 = likertTrial(expObj,SV.likertQ7Prompt,SV.likertQ7Labels,7);
  var likertTrial8 = likertTrial(expObj,SV.likertQ8Prompt,SV.likertQ8Labels,8);
  var likertTrial9 = likertTrial(expObj,SV.likertQ9Prompt,SV.likertQ9Labels,9);
  var likertTrial10 = likertTrial(expObj,SV.likertQ10Prompt,SV.likertQ10Labels,10);
  var likertTrial11 = likertTrial(expObj,SV.likertQ11Prompt,SV.likertQ11Labels,11);
  var likertTrial12 = likertTrial(expObj,SV.likertQ12Prompt,SV.likertQ12Labels,12); 
  var likertTrial13 = likertTrial(expObj,SV.likertQ13Prompt,SV.likertQ13Labels,13);
  var likertTrial14 = likertTrial(expObj,SV.likertQ14Prompt,SV.likertQ14Labels,14);
  
  expObj.experimentData.push(expObj.surveyData);
  return [
    surveyTrial0,
    surveyTrial1,
    surveyTrial2,
    surveyTrial3,
    surveyTrial4,
    surveyTrial5,
    sanityCheck,
    likertTrial6,
    likertTrial7,
    likertTrial8,
    likertTrial9, 
    likertTrial10,
    likertTrial11,
    likertTrial12, 
    likertTrial13,
    likertTrial14,
  ];
};
export { generateSurvey };
