const FASTMODE = true;
const MINSLIDES = true;

const expConfigure = {
  fastmode: FASTMODE,
  minSlides: MINSLIDES,
  welcomeHold: FASTMODE ? 1000 : 20000,
  stage1InstHold: FASTMODE ? 1000 : 20000,
  stage2InstHold: FASTMODE ? 1000 : 20000,
  stage3InstHold: FASTMODE ? 1000 : 20000,
  fixationHold: FASTMODE ? 0 : 4000,
  stimulousPresentation: FASTMODE ? 0 : 2000,
  responsePresentation: FASTMODE ? 0 : 4000,
  nameAveragePresentation: FASTMODE ? 0 : 5000,
  rateThisPersonHold :FASTMODE ? 0 : 20,
  preTrialBreak:5,
};
export { expConfigure as conf };

