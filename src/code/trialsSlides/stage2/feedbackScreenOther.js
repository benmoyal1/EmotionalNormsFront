import { adjustHtmlFeedback} from "../../htmlSetters/onLoadFuncs.js";

import { HTMLJson as HtmlJ } from "../textAndHtml.js";
import { conf } from "../../ExperimentClasses/timeTable.js";
const FLAG_DIR = `./src/data/simbols/`;

var otherFeedbackScreen = function(stageObj,expObj,theyRateText,otherCalc){
    const flagPath = FLAG_DIR + expObj.participantFlag;
    const resultPresentedHTML = HtmlJ.presentOtherResponse(otherCalc,flagPath,theyRateText);  
    return {
            type: 'html-slider-response-modified',
            stimulus:HtmlJ.stimulusImg(stageObj.pic_num),
            on_load : adjustHtmlFeedback(expObj.gender,conf.responsePresentation),
            blocks: function(){              
                return [
                    {
                        text: '',
                        slider: false,
                        locked: false,
                        duration: 500
                    },
                    {
                    text: resultPresentedHTML,
                
                        slider: true,
                        locked: true,
                        key_press: null,
                        text_color:'red',
                        slider_color: 'red',
                        start:otherCalc,
                        duration:conf.responsePresentation
                    },
                    {
                    text:resultPresentedHTML,
                        slider: true,
                        locked: true,
                        key_press: 'space',
                        text_color:'red',
                        slider_color: 'red',
                        start:otherCalc,
                    },
                ];
            },
            labels: HtmlJ.redScaleLabel,
            max: 100, min: -100,
        }
    };

export {otherFeedbackScreen};