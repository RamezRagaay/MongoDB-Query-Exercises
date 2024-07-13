const moviesRepo = require('../repos/moviesRepo');

async function getMovies() {
    const movies = await moviesRepo.getMovies();
    return movies;
};

async function addMovie(movie) {
    const result = await moviesRepo.addMovie(movie);
    return result;
}

async function getMovieById(id) {
    const movie = await moviesRepo.getMovieById(id);
    return movie;
}

async function deleteMovie(id) {
    const result = await moviesRepo.deleteMovie(id);
    return result;
}

async function updateMovie(id, movie) {
    const result = await moviesRepo.updateMovie(id, movie);
    return result;
}

module.exports = {
    getMovies,
    addMovie,
    getMovieById,
    deleteMovie,
    updateMovie,
};