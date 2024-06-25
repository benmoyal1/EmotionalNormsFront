const textJson = {
  howDoesImgMakeYouFeelTXT: "?איך התמונה הזו גורמת לך להרגיש",
  thisIsYourResponseText: (gender) => {
    return gender == "male" ? ":אתה הרגשת" : ":את הרגשת";
  },
  rateLikablility: (name, gender) => {
    var liked = gender == "male" ? "אהוב" : " אהובה";
    return `?כמה ${liked} ${name}`;
  },
  rateTrustworthiness: (name, gender) => {
    var trustworthy = gender == "male" ? "אמין" : " אמינה";
    return `?כמה ${trustworthy} ${name}`;
  },
  rateCompenetce: (name, gender) => {
    var competent = gender == "male" ? "בעל מסוגלות" : " בעלת מסוגלות";
    return `?כמה ${competent} ${name}`;
  },
  answerTheQuestions: "ענו על השאלה",
};

const scaleLabel = ["-100<br> רע מאוד", "100<br> טוב מאוד"];
const HTMLJson = {
  scaleLabel: scaleLabel,
  redScaleLabel: scaleLabel.map(
    (label) => '<span style="color: red;">' + label + "</span>"
  ),
  hthowDidTheyRespondHTML: (name, objFlagPath) => {
    return `
    <div style="display: flex; align-items: center; justify-content: center; color: white;">
        <div style="margin-right: 10px;">
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
        <div style="color: red;">
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
    return `:התגובה הממוצעת של <b style="font-size: 16px;color: red;"><u>${name}</u></b> הייתה`;
  },
  responseAverageStage3: (response, flagPath, average) => {
    return `<div style="margin: calc(25vh) auto 0; width: 70%; text-align: center;">
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
                <div style="display: flex; align-items: center; justify-content: flex-end;">
                    <div style="margin-right: 10px;">${response}</div>
                    <img src="${flagPath}" alt="Image description" style="width: 50px; height: 35px; border: 3px solid yellow;">
                </div>
                <div style="flex: 0; text-align: center;">${average}</div>
            </div>
        </div>`;
  },
  AnswerTheQuestionStage3:() => {
    return `
        <div style="margin: calc(20vh) auto 0; width: 50%; text-align: center;">
            <div style="text-align: center;">
                <div>
                    :ענו על השאלה
                </div>
            </div>
        </div>`;
  }
};

export { textJson, HTMLJson };
