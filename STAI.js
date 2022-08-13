
$(document).ready(function(){

  $(document).on("click", "#STAI_submit", function(){
    // code for submit button here
    var STAI_vals = {}
    var input_array = document.getElementById('STAI').querySelectorAll('input');

    for (let inputelement = 0; inputelement < input_array.length; inputelement++) {
      if (input_array[inputelement].checked == true) {

        STAI_vals[input_array[inputelement].name] = input_array[inputelement].value;

      }

    };

    console.log(STAI_vals);
    console.log(Object.keys(STAI_vals).length);
    console.log(Object.keys(STAI_vals));


//if participant answers all questions
if (Object.keys(STAI_vals).length == 20) {

  const questions_list_array = document.getElementsByClassName("STAI_question");
    for (let i = 1; i < questions_list_array.length+1; i++) {
      console.log("question"+i);
      var questionInArray = document.getElementById("STAI_question"+i);
      questionInArray.style.color = 'black'
    }
    document.getElementById('STAI').reset();
}

//if participant does not answer all questions/skips question(s)
else if (Object.keys(STAI_vals).length < 20) {
  alert("Please answer all questions.");
  const questions_list_array = document.getElementsByClassName("STAI_question");
      for (let i = 1; i < questions_list_array.length+1; i++) {
        console.log("question"+i);
        var questionInArray = document.getElementById("STAI_question"+i);
        if (("question"+i in STAI_vals) == false) {
          questionInArray.style.color = 'red'
        }
        else if (("question"+i in STAI_vals) == true) {
          questionInArray.style.color = 'black'
        }

      }
}



  });

})
