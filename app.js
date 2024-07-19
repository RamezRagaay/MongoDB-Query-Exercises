const express = require("express");
const moviesRouter = require("./routers/moviesRouter");
const app = express();

app.use(express.json());

class Custom404Error extends Error {
    constructor(message) {
        super(message);
        this.name = "Custom404Error";
    }
}

app.use("/movies", moviesRouter);


app.use((err, req, res, next) => {
    if(err instanceof Custom404Error) {
        res.status(404).send(err.message);
        return
    }
    res.status(500).send("Something went wrong");
})

app.use((req, res, next) => {

    next(new Custom404Error("Resource not found"));
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
