myApp.controller('ViewRunController', ['RunService',
function(RunService){
  let viewRun = this;

  viewRun.savedRun = RunService.savedRun;
}
]);
