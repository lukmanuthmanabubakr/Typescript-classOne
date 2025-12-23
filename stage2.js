let movieForm = document.getElementById("movieForm");
let movieTitle = document.getElementById("movieTitle");
let movieStatus = document.getElementById("movieStatus");
let filterStatus = document.getElementById("filterStatus");
let movieList = document.getElementById("movieList");

let movies = [];

function moviesSet(event) {
  event.preventDefault();

  let mTitle = movieTitle.value;
  let mStatus = movieStatus.value;
  let filStatus = filterStatus.value;

  if (!mTitle || !mStatus) {
    return;
  }

  movies.push({ mTitle, mStatus });
  console.log(movies);

  let movieDisplay;
  if (filStatus === "all") {
    movieDisplay = movies;
  } else {
    movieDisplay = movies.filter((eachMovie) => {
      return eachMovie.mStatus === filStatus;
    });
  }

  movieList.innerHTML = "";

  movieDisplay.forEach((eachMovie) => {
    let li = document.createElement("li");
    li.textContent = `${eachMovie.mTitle}, ${eachMovie.mStatus}`;
    movieList.appendChild(li);
  });
}
movieForm.addEventListener("submit", moviesSet);
