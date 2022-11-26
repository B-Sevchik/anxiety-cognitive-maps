function logSectionData(){
  data.push([sectionType, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,  NaN, NaN, expStage, sectionStart, sectionEnd, sectionEnd - sectionStart, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN ]);
  console.log(data);
}

function logIllegalTransitionData(){
  data.push([sectionType, taskName, trialCount, blockTrialCount, block, NaN, stimOnset, respOnset, respTime, acc, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,fileOnly(activeNode.img.src), activeNode.name, activeNode.index, activeNode.communityNumber, activeNode.community, activeNode.isBoundaryNode ? "b" : "i", transitionType, isCommunityTransition() ? 1 : 0, partResp, missedSkip ? 0 : 1, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, activeNode.threat ? "threat" : "neutral", transitionThreatKind() ]);
  console.log(data);
}

function logDragTaskData(nCorrect, slotDict){
  data.push([sectionType, taskName, trialCount, blockTrialCount, block, trialAttempts, stimOnset, respOnset, respOnset - stimOnset, NaN, nCorrect, slotDict["slot0"], slotDict["slot1"], slotDict["slot2"], slotDict["slot3"], slotDict["slot4"],slotDict["slot5"], slotDict["slot6"], slotDict["slot7"], slotDict["slot8"], slotDict["slot9"], NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  console.log(data);
}

function logDropEvent(){
  data.push([sectionType, taskName, trialCount, blockTrialCount, block, trialAttempts, stimOnset, respOnset, respOnset - stimOnset, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  console.log(data);
}

function logOddOneOutData(){
  data.push([sectionType, taskName, nodeSetIterator + 1, nodeSetIterator + 1, block, NaN, stimOnset, respOnset, respTime, acc,  NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, partResp, NaN, currentNodeSet.nodes[imageNum - 1].name, fileOnly(currentNodeSet.nodes[imageNum - 1].img.src), currentNodeSet.nodes[imageNum - 1].communityNumber, currentNodeSet.nodes[0].name, fileOnly(currentNodeSet.nodes[0].img.src), currentNodeSet.nodes[0].communityNumber, currentNodeSet.nodes[1].name,  fileOnly(currentNodeSet.nodes[1].img.src), currentNodeSet.nodes[1].communityNumber, currentNodeSet.nodes[2].name,  fileOnly(currentNodeSet.nodes[2].img.src), currentNodeSet.nodes[2].communityNumber, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, currentNodeSet.nodes[imageNum-1].threat ? "threat" : "neutral", currentNodeSet.nodes[0].threat ? "threat" : "neutral", currentNodeSet.nodes[1].threat ? "threat" : "neutral", currentNodeSet.nodes[2].threat ? "threat" : "neutral", NaN, NaN]);
  console.log(data);
}
