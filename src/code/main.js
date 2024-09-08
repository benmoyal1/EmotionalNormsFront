import Experiment from "./ExperimentClasses/Experiment.js";
import { getParticipantNum } from "./api/dataFromServer.js";
import { fullScreenAllBrowsers } from "./htmlSetters/focusAndScreen.js";


// var kv = await getParticipantNum();
// var exp = new Experiment(23, 'male', kv);
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
      
    }else{
      alert("נא להקליד את גילכם , מספר בין 18 ל 85");
    }
  });
