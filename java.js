var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function hashString(string)
{
  var h = 0, l = string.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + string.charCodeAt(i++) | 0;
  return h;
}
var quizElement;

Quiz = [
    {
        Question: "Test",
        Answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
        AnswerHash: "817254420"
    }
]
function init()
{
  quizElement = document.getElementById("Quiz");;
}

function addQuizElement (questionIndex) {
    quizElement.innerHTML += 
        "<h2>" + Quiz[questionIndex].Question + "</h2>\n";
    Quiz[questionIndex].Answers.forEach(element => {
        quizElement.innerHTML += 
          '<input type="radio" id="AnswerInput" name="'+Quiz[questionIndex].Question+'+" value="+'+element+'">'+
          '<label for="'+element+'">'+element+'</label><br>'
    });
}