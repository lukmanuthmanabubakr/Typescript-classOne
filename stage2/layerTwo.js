let showingAll = document.getElementById("showAll");
let showPassing = document.getElementById("showPassing");
let showGrades = document.getElementById("showGrades");
let studentCount = document.getElementById("studentCount");
let studentList = document.getElementById("studentList");

let students = [
  { name: "Olamide", score: 60 },
  { name: "Posi", score: 40 },
  { name: "Abubakr", score: 90 },
  { name: "samason", score: 22 },
  { name: "jamiu", score: 68 },
  { name: "kunle", score: 75 },
  { name: "Adam", score: 48 },
  { name: "Awwal", score: 50 },
];

function toShowAllStudent(event) {
  event.preventDefault();

  studentList.innerHTML = "";
  studentCount.textContent = students.length;

  students.forEach((eachStudent) => {
    let li = document.createElement("li");
    li.textContent = `${eachStudent.name} - ${eachStudent.score}`;
    studentList.appendChild(li);
  });
}
showingAll.addEventListener("click", toShowAllStudent);

function toShowPassedStudents(event) {
  event.preventDefault();

  students.filter((aboveFifty) => {
    if (aboveFifty.score >= 50) {
      console.log(studentList);
    }
  });
}
showPassing.addEventListener("click", toShowPassedStudents);
