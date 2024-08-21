import { adjustHtmlFeedback} from "../../htmlSetters/onLoadFuncs.js";

import { HTMLJson as HtmlJ } from "../textAndHtml.js";
import { conf } from "../../ExperimentClasses/timeTable.js";
var feedbackScreen = function(picNum,gender,text){
    return {
            type: 'html-slider-response-modified',
            stimulus: HtmlJ.stimulusImg(picNum),
            on_load : adjustHtmlFeedback(gender),
            blocks: function(){              
                var expValues = jsPsych.data.get().values()
                var trialIndex = expValues.length;
                var trialData = expValues[trialIndex - 1].response
                var trialResponse = trialData[1].slider  
                return [
                    {
                        text: '',
                        slider: false,
                        locked: false,
                        duration: 500
                    },
                    {
                        text: '<div style="text-align: center; color: red; font-size: 24px;">' +
                        '<div>' + text + '</div>' +
                        '<div>'+ trialResponse + '</div>' +
                      '</div>',
                        slider: true,
                        locked: true,
                        text_color:'red',
                        slider_color: 'red',
                        start:trialResponse,
                        key_press: null,
                        duration:conf.responsePresentation
                    },
                    {
                        text: '<div style="text-align: center; color: red; font-size: 24px;">' +
                        '<div>' + text + '</div>' +
                        '<div>'+ trialResponse + '</div>' +
                      '</div>',
                        slider: true,
                        locked: true,
                        text_color:'red',
                        slider_color: 'red',
                        start:trialResponse,
                        key_press: 'space',
                    },
                ];
            },
            labels: HtmlJ.redScaleLabel,
            max: 100, min: -100,
        }
    };

export {feedbackScreen};