// Function to maintain focus on the body element
function maintainBodyFocus() {
  document.addEventListener("focusin", function (event) {
    if (event.target !== document.body) {
      document.body.focus();
    }
  });
}

const fullScreenAllBrowsers = () => {
  // Enter fullscreen mode on finishing this trial
  var element = document.documentElement;
  if (element.requestFullscreen) {
    element.requestFullscreen().then(() => {
      document.body.focus();
      maintainBodyFocus();
    });
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen().then(() => {
      document.body.focus();
      maintainBodyFocus();
    });
  } else if (element.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    element.webkitRequestFullscreen().then(() => {
      document.body.focus();
      maintainBodyFocus();
    });
  } else if (element.msRequestFullscreen) {
    // IE/Edge
    element.msRequestFullscreen().then(() => {
      document.body.focus();
      maintainBodyFocus();
    });
  }
};
export {maintainBodyFocus, fullScreenAllBrowsers};