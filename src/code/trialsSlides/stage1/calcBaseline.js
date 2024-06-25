const calculateBaselineAndDifferece = (expObj) => {
  return {
    type: "call-function",
    func: function () {
      for (var i = 0; i < expObj.stage1TrielNum; i++) {
        expObj.baselineAverage += parseFloat(expObj.baselineResponses[i]);
      }
      expObj.baselineAverage = expObj.baselineAverage / expObj.stage1TrielNum; // U_i'
      expObj.firstCondDiffenece = expObj.imageAverage - expObj.baselineAverage; // (U -U_i')
    },
  };
};(name, gender) => {
  return ;
}

export { calculateBaselineAndDifferece };
