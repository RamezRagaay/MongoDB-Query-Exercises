const userServices = require("../services/moviesServices");

const getMovies = async (req, res) => {
    const movies = await userServices.getMovies();
    res.send(movies);
};

const addMovie = async (req, res) => {
    const movie = req.body;
    const result = await userServices.addMovie(movie);
    res.send(result);
};

const getMovieById = async (req, res) => {
    const id = req.params.id;
    const movie = await userServices.getMovieById(id);
    res.send(movie);
};

const deleteMovie = async (req, res) => {
    const id = req.params.id;
    const result = await userServices.deleteMovie(id);
    res.send(result);
};

const updateMovie = async (req, res) => {
    const id = req.params.id;
    const movie = req.body;
    const result = await userServices.updateMovie(id, movie);
    res.send(result);
};

module.exports = {
    getMovies,
    addMovie,
    getMovieById,
    deleteMovie,
    updateMovie,
};