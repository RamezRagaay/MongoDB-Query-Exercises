const express = require("express");
const moviesController = require("../controllers/moviesController");
// const auth = require("../middleware/auth");
const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getMovies);
moviesRouter.post("/", moviesController.addMovie);
moviesRouter.get("/:id", moviesController.getMovieById);
moviesRouter.delete("/:id", moviesController.deleteMovie);
moviesRouter.put("/:id", moviesController.updateMovie);
module.exports = moviesRouter;