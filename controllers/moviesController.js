const userServices = require("../services/moviesServices");

const getMovies = async (req, res, next) => {
    try {
        const movies = await userServices.getMovies();
        res.send(movies);
    } catch (error) {
        // console.error(error);
        console.log("controller error");
        next(error);
    }
};

const addMovie = async (req, res, next) => {
    try {
        const movie = req.body;
        const result = await userServices.addMovie(movie);
        res.send(result);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const getMovieById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const movie = await userServices.getMovieById(id);
        res.send(movie);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await userServices.deleteMovie(id);
        res.send(result);
    } catch (error) {
        console.error(error);
        next(error);
    }
    
};

const updateMovie = async (req, res, next) => {
    try {
        const id = req.params.id;
        const movie = req.body;
        const result = await userServices.updateMovie(id, movie);
        res.send(result);
    } catch (error) {
        console.error(error);
        next(error);
    }
    
};

module.exports = {
    getMovies,
    addMovie,
    getMovieById,
    deleteMovie,
    updateMovie,
};