async function getMovies() {
  const ul = document.querySelector('#list_movies');
  try {
    const response = await fetch('https://swapi-api.alx-tools.com/api/films/?format=json');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    data.results.forEach(movie => {
      const li = document.createElement('li');
      li.textContent = movie.title;
      ul.appendChild(li);
    });
  } catch (error) {
    const li = document.createElement('li');
    li.textContent = 'Error loading movies.';
    ul.appendChild(li);
  }
}
getMovies();
