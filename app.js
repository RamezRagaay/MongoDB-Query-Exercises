const express = require("express");
const moviesRouter = require("./routers/moviesRouter");
const app = express();

app.use(express.json());

app.use("/movies", moviesRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
