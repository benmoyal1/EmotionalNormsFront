import { adjustHtmlFeedback} from "../../htmlSetters/onLoadFuncs.js";

import { HTMLJson as HtmlJ } from "../textAndHtml.js";
import { conf } from "../../ExperimentClasses/timeTable.js";
const FLAG_DIR = `./data/simbols/`;

var otherFeedbackScreen = function(stageObj,expObj,theyRateText,otherCalc){
    const flagPath = FLAG_DIR + expObj.participantFlag;
    const resultPresentedHTML = HtmlJ.presentOtherResponse(otherCalc,flagPath,theyRateText);  
    return {
            type: 'html-slider-response-modified',
            stimulus: function () {
                return '<div style="margin: auto; width: 90%; text-align: center;">' +
                    '<img src="data/stimuli/' + stageObj.pic_num + '.jpg" style="max-width: 90%; max-height:90%;" />' +
                    '</div>'
                },
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