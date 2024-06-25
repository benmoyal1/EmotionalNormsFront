// adjusting two JSPSYCH default  divs content to hebrew selected value of slider
// and continue with space default text
import { conf } from "../ExperimentClasses/timeTable.js";

function adjustHtml(gender) {
  const changeDefaultSpaceMessageHTML = function () {
    var contentWrapper = document.querySelector(".jspsych-content-wrapper");
    contentWrapper.style.transform = "scale(0.8)"; // Decrease scale (zoom out)

    var additionalMessages = document.getElementById("additional-messages");
    if (additionalMessages) {
      // Select the press-space message within additionalMessages
      var pressSpaceMessage = additionalMessages.querySelector("#press-space");

      if (pressSpaceMessage) {
        // Modify the text content of the press-space message based on gender
        var press = gender == "male" ? "לחץ" : "לחצי";
        pressSpaceMessage.textContent = press + " על מקש הרווח כדי להמשיך ";
      }
    }
    // document.body.style.focus  = 'none';
    document.body.focus();
    var jspsychHtmlDiv = document.getElementById(
      "jspsych-html-slider-response-container"
    );
    var sliderValueSpan = jspsychHtmlDiv.querySelector("div > #slider-value");
    sliderValueSpan.style.display = "none";

    var sliderInput = jspsychHtmlDiv.querySelector('input[type="range"]');
    sliderInput.addEventListener("click", function () {
      sliderValueSpan.style.display = "block"; // Display the slider value span when the slider is clicked
    });
  };
  return changeDefaultSpaceMessageHTML;
}

function adjustHtmlFeedback(gender) {
  const changeDefaultSpaceMessageHTML = function () {
    var divElement = document.getElementById(
      "jspsych-html-slider-response-text"
    );

    //  Set the desired height
    divElement.style.height = "80px"; //
    document.body.focus();
    // Check if the additionalMessages element exists
    var additionalMessages = document.getElementById("additional-messages");
    if (additionalMessages) {
      // Select the press-space message within additionalMessages
      var pressSpaceMessage = additionalMessages.querySelector("#press-space");
      if (pressSpaceMessage) {
        // Modify the text content of the press-space message based on gender
        pressSpaceMessage.textContent = "";

        setTimeout(function () {
          var press = gender == "male" ? "לחץ" : "לחצי";
          pressSpaceMessage.textContent = press + " על מקש הרווח כדי להמשיך ";
        }, conf.responsePresentation);
      }
      var jspsychHtmlDiv = document.getElementById(
        "jspsych-html-slider-response-container"
      );
      var sliderValueSpan = jspsychHtmlDiv.querySelector("div > #slider-value");
      sliderValueSpan.style.display = "none";
      document.body.focus();
    }
  };
  return changeDefaultSpaceMessageHTML;
}


function adjustHtmlStage3Rate(){
    const changeDefaultSpaceMessageHTML = function () {
        var contentWrapper = document.querySelector('.jspsych-content-wrapper');
        contentWrapper.style.transform = 'scale(0.8)'; // Decrease scale (zoom out)

        var additionalMessages = document.getElementById('additional-messages');
        if (additionalMessages) {
            // Select the press-space message within additionalMessages
            var pressSpaceMessage = additionalMessages.querySelector('#press-space');
        
            if (pressSpaceMessage) {
                // Modify the text content of the press-space message based on gender
            pressSpaceMessage.textContent = ''  ;

            setTimeout(function() {
                pressSpaceMessage.textContent = "יש לדרג וללחוץ על מקש הרווח כדי להמשיך"
            }, conf.rateThisPersonHold);
            }
        
        }
        // document.body.style.focus  = 'none';
        document.body.focus();
        var jspsychHtmlDiv = document.getElementById('jspsych-html-slider-response-container');
        var sliderValueSpan = jspsychHtmlDiv.querySelector('div > #slider-value');
        sliderValueSpan.style.display = 'none'; 


        var sliderInput = jspsychHtmlDiv.querySelector('input[type="range"]');
        sliderInput.addEventListener('click', function() {
            sliderValueSpan.style.display = 'block'; // Display the slider value span when the slider is clicked
        });
        }
        return changeDefaultSpaceMessageHTML;
}

export { adjustHtml, adjustHtmlFeedback,adjustHtmlStage3Rate};
