"use strict"

function networkDragTask(){
  // for data logging
  sectionType = "mainTask";
  taskName = "networkDragTask";

  // set up some variables
  trialAttempts = 0
  consecutiveCorrectOnFirstTryTrials = 0

  // prepare task
  hideInstructions();
  displayNetworkDragTask();
  setUpCheckAnswerButton();
  setUpNextTrialButton();
  drawHTMLNetwork();

  //start task
  networkDragTaskFlow();
}

function networkDragTaskFlow(){
  let maxTrials = 10;
  let minTrials = 4;
  let minConsecutive = 3;
  if ((consecutiveCorrectOnFirstTryTrials >= minConsecutive || trialCount > maxTrials) && trialCount > minTrials) {
    $("#networkDragTask").hide();
    navigateInstructionPath();
  } else {
    networkDragTrial();
  }
}

function networkDragTrial(){
  trialAttempts = 0;
  stimOnset = new Date().getTime() - runStart;
  displayImages();
}

function resetNetwork(){
  document.body.querySelectorAll("*").forEach((node) => {
    if (node.id.indexOf("slot") != -1) {
      node.style.borderWidth = "1px";
      node.style.borderColor = "black";
      node.removeChild(node.childNodes[0]);
    }
  })
}

function correctlyFill(){
  for (var i = 0; i < 10; i++) {
    let imageDiv = new Image;
    imageDiv.src = selectedImages[i].src
    imageDiv.width = imageSize * imageScale; //
    imageDiv.draggable = true;
    imageDiv.id = "drag" + i;
    imageDiv.ondragstart = function(){drag(event)}
    document.getElementById("slot"+i).append(imageDiv);
  }

  hideImageTable();
  showSubmitButton("#networkDragButton");
}

function randomlyFill(){
  let images = [];
  document.body.querySelectorAll("*").forEach((node) => {
    if (node.tagName == "IMG") {
      images.push(node);
      node.parentElement.remove();
    }
  })

  images = shuffle(images);

  for (var i = 0; i < 10; i++) {
    document.getElementById("slot"+i).append(images[i]);
  }

  checkIfImageBoxEmpty();
}

function correctlyFill(){
  for (var i = 0; i < 10; i++) {
    let imageDiv = new Image;
    imageDiv.src = selectedImages[i].src
    imageDiv.width = imageSize * imageScale; //
    imageDiv.draggable = true;
    imageDiv.id = "drag" + i;
    imageDiv.ondragstart = function(){drag(event);}
    document.getElementById("slot"+i).append(imageDiv);
  }

  // remove table and show submit button
  document.getElementById("dragImageTable").remove();
  document.getElementById("picture-container").style.display = "none";
  $("#networkDragCheckAnswer").show();
}



function displayImages(){
  // create image table to hold images
  let imageTable = document.createElement("div");
  imageTable.className = "imageTable";
  imageTable.id = "dragImageTable";

  //shuffle and loop through images
  let images = _.shuffle(selectedImages);
  images.forEach((imageObj, i) => {

    // create div element to hold image
    let imageDiv = document.createElement("div");
    imageDiv.className = "imageDiv";

    // create new image object for image
    let newImageObj = new Image();
    newImageObj.src = imageObj.src;
    newImageObj.width = imageSize * imageScale; //
    newImageObj.draggable = true;
    newImageObj.id = "drag" + i;
    newImageObj.ondragstart = function(){drag(event)}

    // add image to imageDiv
    imageDiv.appendChild(newImageObj);

    // add imageDiv to imageTable
    imageTable.appendChild(imageDiv);
  });

  // insert image table into images box above network
  document.getElementById("picture-container").appendChild(imageTable);
  document.getElementById("picture-container").style.display = "block";
}

function checkIfImageBoxEmpty(){
  if (document.getElementById("dragImageTable")) {
    if (document.getElementById("dragImageTable").childNodes.length == 0) {
      document.getElementById("dragImageTable").remove();
      document.getElementById("picture-container").style.display = "none";
      $("#networkDragCheckAnswer").show();
    }
  } else {
    $("#networkDragCheckAnswer").show();
  }

  // switch (document.getElementById("dragImageTable")) {
  //   case true:
  //     if (document.getElementById("dragImageTable").childNodes.length > 0) {
  //       return
  //     }
  //
  //     // remove table
  //     document.getElementById("dragImageTable").remove();
  //     document.getElementById("picture-container").style.display = "none";
  //   case false:
  //     $("#networkDragCheckAnswer").show();
  // }
}

function drawHTMLNetwork(){
  createSVG("svg","#network-container-lg", 700*imageScale + 'px', 1200*imageScale + 'px')
  drawSVGLines("svg","slot","#network-container-lg")
}

function displayNetworkDragTask(){
  $("#networkDragTask").show();
}

function setUpCheckAnswerButton(){
  $(document).on("click", "#networkDragCheckAnswer", function(){
      respOnset = new Date().getTime() - runStart;
      trialAttempts++;
      // color images if correct or incorrect
      let nCorrect = 0;
      let anyIncorrect = false;
      let slotDict = {}

      // loop through all the slots in the drag task
      for (var i = 0; i < 10; i++) {
        // src of the image in this slot
        let curr_src = document.getElementById("slot"+i).childNodes[0].src;

        // node of image that should be in this slot
        let correct_node = taskNetwork.nodes[i];

        // create sub dictionary for this slot
        slotDict["slot"+i] = {}
        slotDict["slot"+i]['current_src'] = fileOnly(curr_src)
        slotDict["slot"+i]['current_type'] = curr_src.indexOf("threat") == -1 ? "neutral" : "threat"
        slotDict["slot"+i]['correct_src'] = fileOnly(correct_node.img.src)
        slotDict["slot"+i]['correct_type'] = correct_node.threat ? "threat" : "neutral"
        slotDict["slot"+i]['accuracy'] = curr_src == correct_node.img.src ? 1 : 0;

        if (curr_src == correct_node.img.src) {
          nCorrect++;
          document.getElementById("slot"+i).style.borderWidth = "2px";
          document.getElementById("slot"+i).style.borderColor = "#00ff00" //green
        } else {
          anyIncorrect = true;
          document.getElementById("slot"+i).style.borderWidth = "2px";
          document.getElementById("slot"+i).style.borderColor = "#ff0000" //red
        }
      }

      // if none are incorrect, reveal next trial button
      if (!anyIncorrect) {
        $("#networkDragNextTrial").show();
        $("#networkDragCheckAnswer").hide();
      }

      logDragTaskData(nCorrect, slotDict);
  });
}

function setUpNextTrialButton(){
  $(document).on("click", "#networkDragNextTrial", function(){
    trialCount++;
    blockTrialCount++;
    if (trialAttempts == 1) {
      consecutiveCorrectOnFirstTryTrials++;
    } else {
      consecutiveCorrectOnFirstTryTrials = 0;
    }

    resetNetwork();
    $("#networkDragNextTrial").hide();
    networkDragTaskFlow();
  });
}

function allowDrop(event){
  event.preventDefault();
}

function drag(event){
  oldParentDiv = event.target.parentElement;
  event.dataTransfer.setData("id", event.target.id);
}

function whichNode(src){
  for (let i = 0; i < taskNetwork.nodes.length; i++) {
    if (src == taskNetwork.nodes[i].img.src) {
      return {
        "threat": taskNetwork.nodes[i].threat,
        "name": taskNetwork.nodes[i].name,
        "index": taskNetwork.nodes[i].index
      }
    }
  }
}

function isEmptyTarget(target){
  return target.classList.contains("slot")
}

function whichSlotN(slotName){
  return parseInt(slotName.match(/\d+/)[0]) + 1
}

function drop(event) {

  console.log(event);
  // first, figure out what is being dropped
  let data_id = event.dataTransfer.getData("id");
  let data = document.getElementById(data_id);

  // if image is being dragged onto itself, stop
  if (event.target.id == data_id) {
    return
  }

  // log data relating to dragging
  let dragSRC = fileOnly(data.src); // file that was moved
  let dragNode = whichNode(data.src)["name"]; // which node does the image belong to
  let dragThreat = whichNode(data.src)["threat"]
  // did this drag bring the image to the correct spot
  let dragOrigin = (oldParentDiv.className == "imageDiv") ? "table" : oldParentDiv.id;
  let dragDestination = (isEmptyTarget(event.target)) ? event.target.id : event.target.parentElement.id
  let dragAcc = whichNode(data.src)["index"] == whichSlotN(dragDestination)

  // log data relating to swapping
  let swappedSRC = (isEmptyTarget(event.target)) ? NaN : fileOnly(event.target.src)
  let swappedNode = (isEmptyTarget(event.target)) ? NaN : whichNode(event.target.src)["name"]
  let swappedOrigin = (isEmptyTarget(event.target)) ? NaN : dragDestination;
  let swappedDestination = (isEmptyTarget(event.target)) ? NaN : dragOrigin;
  let swappedThreat = (isEmptyTarget(event.target)) ? NaN : whichNode(event.target.src)["threat"]
  let swappedAcc = (isEmptyTarget(event.target)) ? NaN : whichNode(event.target.src)["index"] == whichSlotN(dragOrigin)

  console.log("Moved " + dragSRC + " (" + dragNode + ", " + dragThreat + ") from " + dragOrigin + " to " + dragDestination + " and swapped with " + swappedSRC + " (" + swappedNode + ", " + swappedThreat + ")");
  console.log(dragAcc);


  // console.log();

  if (event.target.tagName == "DIV") {
    // if data recipient is an empty div, append to it
    event.target.appendChild(data);

    if (oldParentDiv.className == "imageDiv") {
      // then delete old parent if coming from the image table
      oldParentDiv.remove();
    }

  } else {
    //there was already an image in the box

    let oldDiv, newDiv;

    // image is NOT being dragged onto itself
    // check if coming from image table
    if (oldParentDiv.className == "imageDiv") {

      // get parent of target
      document.body.querySelectorAll("*").forEach(node => {
        for (let i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].id == event.target.id) {
            newDiv = node;
          }
        }
      });

      oldParentDiv.innerHTML = '';
      oldParentDiv.appendChild(event.target);
      newDiv.innerHTML = '';
      newDiv.appendChild(data);

    } else {

      // figure out which divs are parents of both images
      document.body.querySelectorAll("*").forEach(node => {
        for (let i = 0; i < node.childNodes.length; i++) {
          if(node.childNodes[i].id == data_id){
            oldDiv = node;
          }
          if (node.childNodes[i].id == event.target.id) {
            newDiv = node;
          }
        }
      });

      // make swap
      newDiv.innerHTML = '';
      newDiv.appendChild(data);
      oldDiv.appendChild(event.target);
    }
  }

  checkIfImageBoxEmpty()


}
