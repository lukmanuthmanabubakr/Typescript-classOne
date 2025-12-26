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
  { name: "Jackson", score: 55 },
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

  let filterStudent = students.filter((aboveFifty) => {
    return aboveFifty.score >= 50;
  });

  studentCount.textContent = filterStudent.length;

  studentList.innerHTML = "";
  filterStudent.forEach((eachStudent) => {
    let li = document.createElement("li");
    li.textContent = `${eachStudent.name} - ${eachStudent.score}`;
    studentList.appendChild(li);
  });
}
showPassing.addEventListener("click", toShowPassedStudents);

function toShowGrades(event) {
  event.preventDefault();

  let graddding = students.map((eachStudent) => {
    if (eachStudent.score <= 50) {
      return {
        name: eachStudent.name,
        score: "F",
      };
    } else if (eachStudent.score > 50 && eachStudent.score <= 59)
      return {
        name: eachStudent.name,
        score: "C",
      };
    else if (eachStudent.score >= 60 && eachStudent.score < 69)
      return {
        name: eachStudent.name,
        score: "B",
      };
    else if (eachStudent.score >= 70)
      return {
        name: eachStudent.name,
        score: "A",
      };
  });

  studentCount.textContent = graddding.length;

  graddding.forEach((eachStudent) => {
    let li = document.createElement("li");
    li.textContent = `${eachStudent.name} - ${eachStudent.score}`;
    studentList.appendChild(li);
  });
}
showGrades.addEventListener("click", toShowGrades);
