let showAllMovies = document.getElementById("showAll");
let showFamilyMovies = document.getElementById("showFamily");
let showMoviesReviews = document.getElementById("showReviews");
let showMoviesCount = document.getElementById("movieCount");
let movieList = document.getElementById("movieList");

let movieDetails = [
  { title: "Merlin", rating: 70, ageRating: 13 },
  { title: "Anaconda", rating: 60, ageRating: 18 },
  { title: "Blacklist", rating: 90, ageRating: 18 },
  { title: "Umar", rating: 75, ageRating: 8 },
  { title: "Batman", rating: 28, ageRating: 18 },
  { title: "Spiderman", rating: 57, ageRating: 13 },
  { title: "Avengers", rating: 60, ageRating: 13 },
  { title: "Wonder woman", rating: 53, ageRating: 13 },
  { title: "Prison Break", rating: 99, ageRating: 18 },
  { title: "Earn Money", rating: 50, ageRating: 15 },
  { title: "Lost", rating: 73, ageRating: 13 },
];

function toShowAllMovies(event) {
  event.preventDefault();
  showMoviesCount.textContent = movieDetails.length;
  movieList.innerHTML = "";
  movieDetails.forEach((eachMovies) => {
    let li = document.createElement("li");
    li.textContent = `Title: ${eachMovies.title} - Rating: ${eachMovies.rating} - Age Rating: ${eachMovies.ageRating}`;
    movieList.appendChild(li);
  });
}
showAllMovies.addEventListener("click", toShowAllMovies);

function toShowFamilyFriend(event) {
  event.preventDefault();
  let filterMovies = movieDetails.filter((rate) => {
    return rate.ageRating <= 13;
  });
  showMoviesCount.textContent = filterMovies.length;

  movieList.innerHTML = "";

  filterMovies.forEach((eachMovies) => {
    let li = document.createElement("li");
    li.textContent = `Title: ${eachMovies.title} - Rating: ${eachMovies.rating} - Age Rating: ${eachMovies.ageRating}`;
    movieList.appendChild(li);
  });
}
showFamilyMovies.addEventListener("click", toShowFamilyFriend);

function toShowReviews(event) {
  event.preventDefault();
  let checkRating = movieDetails.map((checkers) => {
    if (checkers.rating < 50) {
      return {
        title: checkers.title,
        rating: "Poor",
        ageRating: checkers.ageRating,
      };
    } else if (checkers.rating >= 50 && checkers.rating <= 69) {
      return {
        title: checkers.title,
        rating: "Average",
        ageRating: checkers.ageRating,
      };
    } else if (checkers.rating >= 70 && checkers.rating <= 89) {
      return {
        title: checkers.title,
        rating: "Good",
        ageRating: checkers.ageRating,
      };
    } else if (checkers.rating >= 90) {
      return {
        title: checkers.title,
        rating: "Excellent",
        ageRating: checkers.ageRating,
      };
    } else {
      return null;
    }
  });

  showMoviesCount.textContent = checkRating.length;
  console.log(checkRating);

  movieList.innerHTML = "";

  checkRating.forEach((eachMovie) => {
    let li = document.createElement("li");
    li.textContent = `Title: ${eachMovie.title} - Rating: ${eachMovie.rating} - Age Rating: ${eachMovie.ageRating}`;
    movieList.appendChild(li);
  });
}
showMoviesReviews.addEventListener("click", toShowReviews);
