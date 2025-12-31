let loadCourses = document.getElementById("loadCourses")
let filterCompleted = document.getElementById("filterCompleted")
let averageProgress = document.getElementById("averageProgress")
let status = document.getElementById("status")
let output = document.getElementById("output")

const courses = [
  {
    title: "JavaScript Fundamentals",
    progress: 85,
    completed: true,
    duration: 12
  },
  {
    title: "Advanced CSS",
    progress: 40,
    completed: false,
    duration: 8
  },
  {
    title: "React Basics",
    progress: 100,
    completed: true,
    duration: 15
  },
  {
    title: "Backend with Node.js",
    progress: 60,
    completed: false,
    duration: 20
  },
  {
    title: "Database Design",
    progress: 90,
    completed: true,
    duration: 10
  }
];
