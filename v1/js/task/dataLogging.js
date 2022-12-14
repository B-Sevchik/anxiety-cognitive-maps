let nGeneralDataPoints = 12
let nSectionDataPoints = 4
let nDragTaskDropDataPoints = 12
let nDragTaskCheckAnswerDataPoints = 50
let nIllegalTransitionDataPoints = 11
let nOddOneOutDataPoints = 24
let generalData, sectionData, dragTaskDropData, dragTaskCheckAnswerData, illegalTransitionData, oddOneOutData;

function dataOrder(){
  return [generalData,
    sectionData,
    dragTaskDropData,
    dragTaskCheckAnswerData,
    illegalTransitionData,
    oddOneOutData
  ].flat()
}

// general task data
// [sectionType, taskName, trialCount, blockTrialCount, block, trialAttempt, stimOnset, respOnset, respOnset - stimOnset, acc, nCorrect, partResp]

function logSectionData(){

  generalData = [sectionType].concat(new Array(nGeneralDataPoints - 1).fill(NaN))

  sectionData = [expStage, sectionStart, sectionEnd, sectionEnd - sectionStart]

  dragTaskDropData = new Array(nDragTaskDropDataPoints).fill(NaN)

  dragTaskCheckAnswerData = new Array(nDragTaskCheckAnswerDataPoints).fill(NaN)

  illegalTransitionData = new Array(nIllegalTransitionDataPoints).fill(NaN)

  oddOneOutData = new Array(nOddOneOutDataPoints).fill(NaN)

  data.push(dataOrder())
  console.log(data);

}

function logDragDropEvent(dropEvent){
  generalData = [sectionType, taskName, trialCount, blockTrialCount, block, trialAttempt, stimOnset, respOnset, respOnset - stimOnset, NaN, NaN, NaN]

  sectionData = new Array(nSectionDataPoints).fill(NaN)

  // THIS IS DATA
  dragTaskDropData = Object.values(dropEvent)

  dragTaskCheckAnswerData = new Array(nDragTaskCheckAnswerDataPoints).fill(NaN)

  illegalTransitionData = new Array(nIllegalTransitionDataPoints).fill(NaN)

  oddOneOutData = new Array(nOddOneOutDataPoints).fill(NaN)

  data.push(dataOrder())
  console.log(data);
}

function logDragTaskCheckAnswerData(nCorrect, slotDict){

  generalData = [sectionType, taskName, trialCount, blockTrialCount, block, trialAttempt, stimOnset, respOnset, respOnset - stimOnset, NaN, nCorrect, NaN]

  sectionData = new Array(nSectionDataPoints).fill(NaN)

  dragTaskDropData = new Array(nDragTaskDropDataPoints).fill(NaN)

  dragTaskCheckAnswerData = Object.keys(slotDict).map(key => Object.values(slotDict[key])).flat()

  illegalTransitionData = new Array(nIllegalTransitionDataPoints).fill(NaN)

  oddOneOutData = new Array(nOddOneOutDataPoints).fill(NaN)

  data.push(dataOrder())
  console.log(data);
}

// [sectionType, taskName, trialCount, blockTrialCount, block, trialAttempt, stimOnset, respOnset, respOnset - stimOnset, acc, nCorrect, partResp]

function logIllegalTransitionData(){
  generalData = [sectionType, taskName, trialCount, blockTrialCount, block, NaN, stimOnset, respOnset, respOnset - stimOnset, acc, NaN, partResp]

  sectionData = new Array(nSectionDataPoints).fill(NaN)

  dragTaskDropData = new Array(nDragTaskDropDataPoints).fill(NaN)

  dragTaskCheckAnswerData = new Array(nDragTaskCheckAnswerDataPoints).fill(NaN)

  illegalTransitionData = [fileOnly(activeNode.img.src), activeNode.name, activeNode.index, activeNode.communityNumber, activeNode.community, activeNode.isBoundaryNode ? "b" : "i", transitionType, isCommunityTransition() ? 1 : 0, missedSkip ? 0 : 1, activeNode.threat ? "threat" : "neutral", transitionThreatKind()]

  oddOneOutData = new Array(nOddOneOutDataPoints).fill(NaN)

  data.push(dataOrder())
  console.log(data);
}

function logOddOneOutData(currentNodeSet, imageNum){
  generalData = [sectionType, taskName, nodeSetIterator + 1, nodeSetIterator + 1, block, NaN, stimOnset, respOnset, respOnset - stimOnset, acc, NaN, partResp]

  sectionData = new Array(nSectionDataPoints).fill(NaN)

  dragTaskDropData = new Array(nDragTaskDropDataPoints).fill(NaN)

  dragTaskCheckAnswerData = new Array(nDragTaskCheckAnswerDataPoints).fill(NaN)

  illegalTransitionData = new Array(nIllegalTransitionDataPoints).fill(NaN)

  oddOneOutData = [currentNodeSet.nodes[imageNum - 1].name, fileOnly(currentNodeSet.nodes[imageNum - 1].img.src), currentNodeSet.nodes[imageNum - 1].communityNumber, currentNodeSet.nodes[0].name, fileOnly(currentNodeSet.nodes[0].img.src), currentNodeSet.nodes[0].communityNumber, currentNodeSet.nodes[1].name,  fileOnly(currentNodeSet.nodes[1].img.src), currentNodeSet.nodes[1].communityNumber, currentNodeSet.nodes[2].name,  fileOnly(currentNodeSet.nodes[2].img.src), currentNodeSet.nodes[2].communityNumber, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, currentNodeSet.nodes[imageNum-1].threat ? "threat" : "neutral", currentNodeSet.nodes[0].threat ? "threat" : "neutral", currentNodeSet.nodes[1].threat ? "threat" : "neutral", currentNodeSet.nodes[2].threat ? "threat" : "neutral"]

  data.push(dataOrder())
  console.log(data);
}
