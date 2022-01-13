const grades = [];
let average = 0;
let sum = 0;
const demo = document.getElementById("demo");
const intro = document.getElementById("intro");
const gradeValue = document.getElementById("notes");

// receive firstname and lastname from url
let para = new URLSearchParams(window.location.search);
let firstname, lastname;
// launch add student firstname and lastname function for the introduction
addStudentName();

// if form is submitted, calculate the average of the student grades
document.getElementById('form').addEventListener("submit", function(evt){
    // preventDefault(): the default action will not be performed as it normally is.
    // here the submit  on the form  don't engage the loading of the page
    evt.preventDefault(); 
    calculate();
});
// if the button "Ajouter" has been clicked on, add the grades to the array
document.getElementById("addGrade").addEventListener('click', (event) => { 
    addGrade();
});
// launch add student firstname and lastname function for the introduction
function addStudentName() {
    if(para.has("firstname") && para.has("firstname")) {
        firstname = para.get("firstname");
        lastname = para.get("lastname");
        intro.innerHTML = "<h1>Hi "+firstname+" "+lastname+"</h1><p>Please enter your last 5 ratings below.</p>";
    } else {
        firstname = "FirstnameUnknown";
        lastname = "LastnameUnknown";
        intro.innerHTML = "<h1>Hi "+firstname+" "+lastname+"</h1><p>Please enter your last 5 ratings below.</p>";
    }
}
// if the button "Ajouter" has been clicked on, add the grades to the array
function addGrade() {
    if(isNaN(parseInt(gradeValue.value))) {
        alert("Be careful, this is not a number!");
    } else if(gradeValue.value < 0 || gradeValue.value > 20) {
        alert("The score must be between 0 and 20!");
    }
    else if(grades.length < 5) {
        grades.push(gradeValue.value);
        gradeValue.value = "";
        demo.innerHTML = grades;
    } else {
        alert("You cannot add more than 5 grades! It's only your last 5 grades.");
    } 
}
// if form is submitted, calculate the average of the student grades
function calculate() {
    for(grade of grades) {
        sum += parseInt(grade);
    }
    average = sum / grades.length;
    if(average >= 0 && average < 10) {
        demo.innerHTML = "Average: "+average+". <strong>Comment: </strong>Below average."; 
    } else if(average >= 10 && average < 13) {
        demo.innerHTML = "Average: "+average+". <strong>Comment: </strong>Average."; 
    } else if(average >= 13 && average < 16) {
        demo.innerHTML = "Average: "+average+". <strong>Comment: </strong>Good."; 
    } else if(average >= 16 && average < 20) {
        demo.innerHTML = "Average: "+average+". <strong>Comment: </strong>Very good."; 
    } else if(average == 20) {
        demo.innerHTML = "Average: "+average+". <strong>Comment: </strong>Excellent."; 
    }
}

