const textToPlainHTML = (text) => {
  return  `<div style = "font-size: 24px">
  ${text}
  </div>`
}
const textJson = {
  // howDoesImgMakeYouFeelTXT: "?איך התמונה הזו גורמת לך להרגיש",
  howDoesImgMakeYouFeelTXT:textToPlainHTML('?איך התמונה הזו גורמת לך להרגיש'),
  thisIsYourResponseText: (gender) => {
    const text = gender == "male" ? ":אתה הרגשת" : ":את הרגשת";
    return textToPlainHTML(text);
  },
  rateLikablility: (name, gender) => {
    var liked = gender == "male" ? "חביב" : " חביבה";
    const text =  `?כמה ${liked} ${name}`;
    return textToPlainHTML(text);
  },
  rateTrustworthiness: (name, gender) => {
    var trustworthy = gender == "male" ? "אמין" : " אמינה";
    const text =  `?כמה ${trustworthy} ${name}`;
    return  textToPlainHTML(text);
  },
  rateCompenetce: (name, gender) => {
    var competent = gender == "male" ? "בעל מסוגלות" : " בעלת מסוגלות";
    const text =  `?כמה ${competent} ${name}`;
    return  textToPlainHTML(text);

  },
  answerTheQuestions:textToPlainHTML("ענו על השאלה"),
};

// const scaleLabel = ["-100<br> רע מאוד", "100<br> טוב מאוד"];
const scaleLabel = [
  '<span style="font-size: 24px;">-100<br> רע מאוד</span>',
  '<span style="font-size: 24px;">100<br> טוב מאוד</span>'
];

const scaleForStage3 = [
  '<span style="font-size: 24px;">בכלל לא</span>',
  '<span style="font-size: 24px;">מאוד</span>'
];
const HTMLJson = {
  scaleLabel: scaleLabel,
  redScaleLabel: scaleLabel.map(
    (label) => '<span style="color: red; font-size: 24px;">' + label + "</span>"
  ),
  scaleForStage3:scaleForStage3,
  hthowDidTheyRespondHTML: (name, objFlagPath) => {
    return `
    <div style="display: flex; align-items: center; justify-content: center; color: white;">
        <div style="margin-right: 10px; font-size: 24px;">
            ?איך התמונה גרמה ל<span style="font-weight: bold; text-decoration: underline;">${name}</span> להרגיש
        </div>
        <div style="width: 65px; height: 45px; 3px solid yellow; 0 0 3px yellow, 0 0 8px yellow, 0 0 10px yellow, 0 0 15px yellow; display: flex; align-items: center; justify-content: center;">
            <img src=${objFlagPath} alt="Image description" style="width: 50px; height: 35px; border: 3px solid yellow;">
        </div>
    </div>
`;
  },
  howTheyRatedHTML: (name, gender) => {
    var felt = gender == "male" ? "הרגיש" : "הרגישה";
    return `
        <div style="color: red; font-size: 24px;">
            <span style="font-weight: bold; text-decoration: underline;">${name}</span> ${felt}
        </div>
    `;
  },
  presentOtherResponse: (otherCalc, flagPath, theyRateText) => {
    return `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
                <div style="display: flex; align-items: center; padding-left: 10px;">
                    <div style="margin-right: 15px;">${theyRateText}</div>
                    <div style="width: 65px; height: 45px; display: flex; align-items: center; justify-content: center;">
                        <img src="${flagPath}" alt="Image description" style="width: 50px; height: 35px; border: 3px solid yellow;">
                    </div>
                </div>
                <div style="color: red;">${otherCalc}</div>
            </div>
    `;
  },
  averageResponseStage3: (name) => {
    return `:התגובה הממוצעת של <b style="font-size: 24px;"><u>${name}</u></b> הייתה`;
  },
  responseAverageStage3: (response, flagPath, average) => {
    return `<div style="margin: calc(25vh) auto 0; width: 80%; text-align: center;">
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                <div style="display: flex; align-items: center; justify-content: flex-end;">
                    <div style="margin-right: 10px;font-size:24px;">${response}</div>
                    <img src="${flagPath}" alt="Image description" style="width: 50px; height: 35px; border: 3px solid yellow;">
                </div>
                <div style="flex: 0; text-align: center;font-size:24px;">${average}</div>
            </div>
        </div>`;
  },
  AnswerTheQuestionStage3: () => {
    return `
        <div style="margin: calc(20vh) auto 0; width: 50%; text-align: center;">
            <div style="text-align: center;">
                <div>
                    :ענו על השאלה
                </div>
            </div>
        </div>`;
  },
  stimulusImg: (num) => {
    return (
      '<div style="margin: auto;  width: 80%; text-align: center; overflow: hidden; font-size: 24px;">' +
      '<img src="./src/data/stimuli/' +
      num +
      '.jpg" style="max-width: 100%; max-height: 100%;" />' +
      "</div>"
    );
  },
};

export { textJson, HTMLJson,textToPlainHTML };
