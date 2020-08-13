export const API_KEY = `${process.env.REACT_APP_API_KEY}`;
export const movieID = "55";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-ES`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&with_genres=35&language=es-ES`,
  fetchAmazonPrime: `/discover/tv?api_key=${API_KEY}&with_networks=1024&language=es-ES`,
  fetchTelecinco: `/discover/tv?api_key=${API_KEY}&with_networks=53&language=es-ES`,
  fetchAntenaTres: `/discover/tv?api_key=${API_KEY}&with_networks=400&language=es-ES`,
  fetchLaSexta: `/discover/tv?api_key=${API_KEY}&with_networks=1016&language=es-ES`,
  fetchHbo: `/discover/tv?api_key=${API_KEY}&with_networks=49&language=es-ES`,
  fetchMovistar: `/discover/tv?api_key=${API_KEY}&with_networks=2140&language=es-ES`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-ES`,
  fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=es-ES`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-ES`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=es-ES`,
  // fetchActors: `/movie/550/credits?api_key=${API_KEY}`,
};

export default requests;
