function logSectionData(){
  data.push([sectionType, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,  NaN, NaN, expStage, sectionStart, sectionEnd, sectionEnd - sectionStart, NaN, NaN, NaN, NaN ]);
  console.log(data);
}

function logIllegalTransitionData(){
  data.push([sectionType, taskName, trialCount, blockTrialCount, block, NaN, stimOnset, respOnset, respTime, acc, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,fileOnly(activeNode.img.src), activeNode.name, activeNode.index, activeNode.communityNumber, activeNode.community, activeNode.isBoundaryNode ? "b" : "i", transitionType, isCommunityTransition() ? 1 : 0, partResp, missedSkip ? 0 : 1, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]);
  console.log(data);
}

function logDragTaskData(nCorrect, slotDict){
  console.log(slotDict);
  data.push([sectionType, taskName, trialCount, blockTrialCount, block, trialAttempts, stimOnset, respOnset, respOnset - stimOnset, NaN, nCorrect, slotDict["slot0"], slotDict["slot1"], slotDict["slot2"], slotDict["slot3"], slotDict["slot4"],slotDict["slot5"], slotDict["slot6"], slotDict["slot7"], slotDict["slot8"], slotDict["slot9"], NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  console.log(data);
}

function logDropEvent(){
  data.push([sectionType, taskName, trialCount, blockTrialCount, block, trialAttempts, stimOnset, respOnset, respOnset - stimOnset, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  console.log(data);
}
