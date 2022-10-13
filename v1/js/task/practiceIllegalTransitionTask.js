function practiceIllegalTransitionTask(){
  sectionType = "pracTask";
  taskName = "practiceTransitionTask";

  hideCursor();

  hideInstructions();
  displayCanvases();

  createActiveNode();
  legalIllegalArray = preparePracticeArray();
  transitionType = legalIllegalArray[trialCount-1];

  transitionFunc = practiceTransition;

  // start task after countdown
  countDown(runIllegalPractice, 3);
}

function runIllegalPractice(){
  if (trialCount <= nPracticeTrials) {
    practiceTrial();
  } else {
    practiceFeedback(Math.round( accCount / (trialCount - 1) * 100 ));
  }
}

function practiceTrial(){
  // check if key is being held down going into trial
  if (keyListener == 2 || keyListener == 3) {

    promptLetGo();

  } else {

    // display network and image
    if (showNetworkWalk == true) {drawNetwork()}
    displayImage();

    // set up for response
    stimOnset = new Date().getTime() - runStart;
    respTime = NaN, partResp = NaN, respOnset = NaN, acc = NaN;
    if (trialCount == 1) {
      setTimeout(practiceTransition, stimInterval);
    } else {
      keyListener = 1;
    }

    // go to next trial after delay
    // setTimeout(practiceTransition, stimInterval);
  }
}

function practiceTransition(){
  if (!feedbackShown && trialCount != 1) {
    // feedback (legal or illegal)
    if (transitionType == "i") {
      showIllegalTransition();
    } else {
      showLegalTransition();
    }

  } else {

    adjustAccuracy();

    logIllegalTransitionData();


    // remember where we just were
    rememberPreviousNode();
    resetActiveNode();
    createTransitionType();

    chooseNewNode();

    activeNode.activate();
    trialHistory.push(activeNode.name);

    // iterate trial count
    trialCount++; blockTrialCount++;
    feedbackShown = false;

    // return to taskFlow func
    runIllegalPractice();
  }
}

function preparePracticeArray(){
  let nIllegalTrials = Math.ceil(nPracticeTrials*illegalProbability)
  let arr = new Array(nIllegalTrials).fill('i').concat(new Array(nPracticeTrials - nIllegalTrials).fill('l'));
  do {
    arr = shuffle(arr);
  } while (!arrShuffled(arr));
  return arr;

  function arrShuffled(arr){
    // make sure there are no consecutive "i"s
    for (var i = 0; i < arr.length; i++) {
      if (i != 0) {
        if (arr[i] == 'i' && arr[i - 1] == 'i') {
          return false;
        }
      }
    }
    // make sure first or second trial isn't i
    if (arr[0] == 'i' || arr[1] == 'i') {
      return false;
    } else {
      return true;
    }
  }
}
