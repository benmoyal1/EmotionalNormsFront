const alignHTMLRight = () => {
  let html = '<style id="jspsych-survey-multi-choice-css">';
  html +=
    ".jspsych-survey-multi-choice-question { margin-top: 2em; margin-bottom: 2em; text-align: right; }" + // Align questions to the right
    ".jspsych-survey-multi-choice-option { text-align: right; }" + // Align options to the right
    ".jspsych-survey-multi-choice-text { direction: rtl; }" + // Set text direction to right-to-left
    ".jspsych-survey-multi-choice-text span.required { color: darkred; }" + // Style required indicator
    ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text { text-align: center; }" + // Center text in horizontal layout
    ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option { display: inline-block; margin-left: 1em; margin-right: 1em; vertical-align: top; }" + // Style options in horizontal layout
    "label.jspsych-survey-multi-choice-text input[type='radio'] { margin-right: 1em; }" + // Style radio buttons
    ".jspsych-content { max-height: 80vh; overflow-y: scroll; }" + // Set max height and enable vertical scroll
    ".jspsych-content::-webkit-scrollbar { width: 8px; }" + // Custom scrollbar width for WebKit browsers (e.g., Chrome, Safari)
    ".jspsych-content::-webkit-scrollbar-track { background: #333; }" + // Custom scrollbar track color
    ".jspsych-content::-webkit-scrollbar-thumb { background: #555; border-radius: 4px; }" + // Custom scrollbar thumb color and rounded corners
    ".jspsych-content::-webkit-scrollbar-thumb:hover { background: #777; }" + // Custom scrollbar thumb hover effect
    ".jspsych-content { scrollbar-width: thin; scrollbar-color: #333 #222; }"; // Custom scrollbar styles for IE, Edge, and Firefox
  html += "</style>";

  // Inject the CSS into the document head
  document.head.insertAdjacentHTML("beforeend", html);
  document.querySelector("#jspsych-survey-multi-choice-next").value = "לחצו כאן";
};

const deleteScrollBar = () => {
  // Remove the scrollbar styles by ID
  let styleElement = document.getElementById("jspsych-survey-multi-choice-css");
  if (styleElement) {
    styleElement.remove();
  }

  // Optional: If you need to reset any specific overflow properties, you can add them here
  let contentElement = document.querySelector(".jspsych-content");
  if (contentElement) {
    contentElement.style.overflowY = "";
    contentElement.style.maxHeight = "";
  }
};

const addToQuestioneir = (expObj, data, questioneir) => {
  const resp = JSON.parse(data.responses);
  const Qstart = questioneir * 3;
  expObj.surveyData[`Q${Qstart}`] = resp.Q0;
  expObj.surveyData[`Q${Qstart + 1}`] = resp.Q1;
  expObj.surveyData[`Q${Qstart + 2}`] = resp.Q2;
};
const generateSurvey = (expObj) => {
  expObj.surveyData.Subject = expObj.subject;
  expObj.surveyData.procedure = "demographics";
  expObj.surveyData.gender = expObj.gender;
  expObj.surveyData.age = expObj.age;
  var survey_trial1 = {
    type: "survey-multi-choice",
    preamble: "<h6>יש לגלול ולענות על כל השאלות*</h6>",
    questions: [
      {
        prompt: "סטטוס:",
        options: [
          "רווק.ה",
          "נשוי.ה חי.ה עם בן/בת זוג",
          "גרוש.ה / פרוד.ה",
          "אלמנ.ה",
        ],
        required: true,
      },
      {
        prompt: "השכלה:",
        options: [
          "יסודית",
          "תיכונית (כולל תעודת בגרות)",
          "על-תיכונית/מקצועית",
          "תואר ראשון",
          "תואר שני ומעלה",
        ],
        required: true,
      },
      {
        prompt: "מקום מגורים נוכחי:",
        options: [
          "מחוז צפון",
          "מחוז חיפה",
          "מחוז תל אביב",
          "מחוז מרכז",
          "מחוז ירושלים",
          "מחוז דרום",
        ],
        required: true,
      },
    ],

    on_load: alignHTMLRight,
    on_finish: function (data) {
      const questioneir = 0;
      addToQuestioneir(expObj, data, questioneir);
    },
  };
  var survey_trial2 = {
    type: "survey-multi-choice",
    questions: [
      {
        prompt: "רמת דתיות:",
        options: [
          "אתאיסט.ית",
          "חילוני.ת",
          "מסורתי.ת",
          "דתי.ה לאומי.ת",
          "חרדי.ת",
        ],
        required: true,
      },
      {
        prompt: "האם הנך מפונה מביתך בעקבות המלחמה?",
        options: ["כן", "לא"],
        required: true,
      },
      {
        prompt: "מהי עמדתך הפוליטית ביחס לסכסוך, מדיניות חוץ וביטחון? ",
        options: [
          "ימין קיצוני",
          "ימין",
          "ימין מתון",
          "מרכז",
          "שמאל מתון",
          "שמאל",
          "שמאל קיצוני",
        ],
        required: true,
      },
    ],

    on_load: alignHTMLRight,
    on_finish: (data) => {
      const questioneir = 1;
      addToQuestioneir(expObj, data, questioneir);
    },
  };
  var likert_trial1 = {
    type: "survey-likert",
    questions: [
      {
        prompt: "אני רואה את עצמי כחלק מהחברה הישראלית.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
      {
        prompt: "אני מרוצה להיות חלק מהחברה הישראלית.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
      {
        prompt: "אני מרגיש שיש לי קשרים חזקים עם ישראלים אחרים.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
    ],
    scale_width: 600, // Adjust scale width as needed
    preamble:
      "אנא סמן בטבלה למטה את המספר המבטא בצורה הטובה ביותר את מידת הסכמתך עם המשפטים הבאים, כאשר 1 מבטא שאתה לא מסכים כלל, ו-7 מסכים במידה רבה מאוד:",

    on_load: () => {
      document.querySelector("#jspsych-survey-likert-next").value = "לחצו כאן";
    },
    on_finish: (data) => {
      const questioneir = 2;
      addToQuestioneir(expObj, data, questioneir);
    },
  };
  var likert_trial2 = {
    type: "survey-likert",
    questions: [
      {
        prompt: "אני מזדהה עם ישראלים אחרים.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
      {
        prompt: "חשוב לי להיות חלק מהחברה הישראלית.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
      {
        prompt: "אני מרגיש בטוח במקומי בחברה הישראלית.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
    ],
    scale_width: 600, // Adjust scale width as needed
    preamble:
      "אנא סמן בטבלה למטה את המספר המבטא בצורה הטובה ביותר את מידת הסכמתך עם המשפטים הבאים, כאשר 1 מבטא שאתה לא מסכים כלל, ו-7 מסכים במידה רבה מאוד:",

    on_load: () => {
      document.querySelector("#jspsych-survey-likert-next").value = "לחצו כאן";
    },
    on_finish: function (data) {
      const questioneir = 3;
      addToQuestioneir(expObj, data, questioneir);
    },
  };
  var likert_trial3 = {
    type: "survey-likert",
    questions: [
      {
        prompt: "אני מרגיש דומה לישראלי הממוצע.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
      {
        prompt: "אני מרגיש חלק מהתרבות הישראלית.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
      {
        prompt: "אני מרגיש בנוח בחברת ישראלים אחרים.",
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        required: true,
      },
    ],
    scale_width: 600, // Adjust scale width as needed
    preamble:
      "אנא סמן בטבלה למטה את המספר המבטא בצורה הטובה ביותר את מידת הסכמתך עם המשפטים הבאים, כאשר 1 מבטא שאתה לא מסכים כלל, ו-7 מסכים במידה רבה מאוד:",

    on_load: () => {
      document.querySelector("#jspsych-survey-likert-next").value = "לחצו כאן";
    },
    on_finish: function (data) {
      const questioneir = 4;
      addToQuestioneir(expObj, data, questioneir);
      console.log("A");
      deleteScrollBar();

    },
  };
  expObj.experimentData.push(expObj.surveyData);
  return [
    survey_trial1,
    survey_trial2,
    likert_trial1,
    likert_trial2,
    likert_trial3,
  ];
};

export { generateSurvey };
