var student = {
  name: "",
  type: "student"
};


document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", KeyUp);
}

function KeyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;

  var totalName = 0;
  for (var i = 0; i< student.name.length; i++) {
    totalName += student.name.charCodeAt(i);
  }

  // Insert result into page
  var output = "Total Numeric value of name is " + totalName;
  document.getElementById('output').innerText = output;
}
