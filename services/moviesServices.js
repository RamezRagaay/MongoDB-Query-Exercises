const moviesRepo = require('../repos/moviesRepo');

async function getMovies() {
    try {
        
        const movies = await moviesRepo.getMovies();
        throw new Error('error');
        return movies;
    } catch (error) {
        console.log("Service error")
        throw error;

    }
};

async function addMovie(movie) {
    try {
        const result = await moviesRepo.addMovie(movie);
        return result;
    } catch (error) {
        throw error;
    }
}

async function getMovieById(id) {
    try {
        const movie = await moviesRepo.getMovieById(id);
        return movie;
        
    } catch (error) {
        throw error;
    }
}

async function deleteMovie(id) {
    try {
        const result = await moviesRepo.deleteMovie(id);
        return result;
    } catch (error) {
        throw error;
    }
}

async function updateMovie(id, movie) {
    try {
        const result = await moviesRepo.updateMovie(id, movie);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getMovies,
    addMovie,
    getMovieById,
    deleteMovie,
    updateMovie,
};