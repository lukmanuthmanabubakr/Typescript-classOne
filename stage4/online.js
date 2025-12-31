let loadCourses = document.getElementById("loadCourses");
let filterCompleted = document.getElementById("filterCompleted");
let averageProgress = document.getElementById("averageProgress");
let status = document.getElementById("status");
let output = document.getElementById("output");

const courses = [
  {
    title: "JavaScript Fundamentals",
    progress: 85,
    completed: true,
    duration: 12,
  },
  {
    title: "Advanced CSS",
    progress: 40,
    completed: false,
    duration: 8,
  },
  {
    title: "React Basics",
    progress: 100,
    completed: true,
    duration: 15,
  },
  {
    title: "Backend with Node.js",
    progress: 60,
    completed: false,
    duration: 20,
  },
  {
    title: "Database Design",
    progress: 90,
    completed: true,
    duration: 10,
  },
];

function LoadAllCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let loadAll = courses.map((course) => {
        return {
          title: course.title,
          progress: course.progress,
          completed: course.completed,
          duration: course.duration,
        };
      });
      resolve(loadAll);
    }, 3000);
  });
}
LoadAllCourses();

function showCompletedCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filterCourses = courses.filter((course) => {
        if (course.completed === true) {
          return {
            title: course.title,
            progress: course.progress,
            completed: course.completed,
            duration: course.duration,
          };
        }
      });
      resolve(filterCourses);
    }, 3000);
  });
}

function showAverageCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let goodCourse = courses.map((course) => {
        return course.progress;
      });

      let addingCourse = courses.reduce((adding, eachPro) => {
        return adding + eachPro.progress;
      }, 0);
      let average = addingCourse / goodCourse.length;
      resolve(average);
    }, 3000);
  });
}

async function LoadData() {
  status.textContent = "Loading...";
  output.textContent = "";

  try {
    let loadCourse = await LoadAllCourses();
    output.innerHTML = "";
    loadCourse.forEach((course) => {
      let li = document.createElement("li");
      let { title, progress, completed, duration } = course;
      li.textContent = `Title: ${title}, Progress:${progress}, Completed: ${completed}, Duration: ${duration}`;
      output.appendChild(li);
    });
  } catch (error) {
    output.textContent = error;
  }
  status.textContent = "Idle";
}
loadCourses.addEventListener("click", LoadData);

async function ShowCompleted() {
  status.textContent = "Loading...";
  output.textContent = "";

  try {
    let loadFilterCourse = await showCompletedCourses();
    output.innerHTML = "";
    loadFilterCourse.forEach((course) => {
      let li = document.createElement("li");
      let { title, progress, completed, duration } = course;
      li.textContent = `Title: ${title}, Progress:${progress}, Completed: ${completed}, Duration: ${duration}`;
      output.appendChild(li);
    });
  } catch (error) {
    output.textContent = error;
  }
  status.textContent = "Idle";
}
filterCompleted.addEventListener("click", ShowCompleted);

async function ShowAverage() {
  status.textContent = "Loading...";
  output.textContent = "";

  try {
    let loadShowAverage = await showAverageCourses();
    output.innerHTML = `<p>${loadShowAverage}</p>`;
  } catch (error) {
    output.textContent = error;
  }
  status.textContent = "Idle";
}
averageProgress.addEventListener("click", ShowAverage);
