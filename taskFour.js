let attendanceForm = document.getElementById("attendanceForm");
let studentName = document.getElementById("studentName");
let attendanceStatus = document.getElementById("attendanceStatus");
let studentCount = document.getElementById("studentCount");
let filterStatus = document.getElementById("filterStatus");
let studentList = document.getElementById("studentList");

let allStudent = 0;
let listOfStudent = [];

function getStudentAttendance(event) {
  event.preventDefault();

  let inpStudent = studentName.value;
  let inpStudentAttendance = attendanceStatus.value;
  if (
    inpStudent &&
    (inpStudentAttendance == "present" || inpStudentAttendance == "absent")
  ) {
    listOfStudent.push({ inpStudent, inpStudentAttendance });
    allStudent += 1;
    console.log(listOfStudent);
  } else if (!inpStudent && inpStudentAttendance == "") {
    console.log("pick an option");
  } else {
    return null;
  }
  studentCount.textContent = allStudent;

  
}

attendanceForm.addEventListener("submit", getStudentAttendance);
