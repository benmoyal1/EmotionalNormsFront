
var calculateFeedback = function (mean, SD, expObj){
    mean = parseFloat(mean);
    SD = parseFloat(SD);
    var feedback;
    var difference = expObj.firstCondDiffenece;
    feedback = Math.round(mean + (expObj.cond * 0.75 * SD) + difference); // mean + (cond * 0.75 * SD) + diff
    if (feedback > 100) {
        feedback = 100;
    }
    else if (feedback < -100) {
        feedback = -100;
    }
    return feedback;
}

export {calculateFeedback};