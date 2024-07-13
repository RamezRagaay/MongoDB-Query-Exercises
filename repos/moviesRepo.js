const { ObjectId } = require("mongodb");
const client = require("../db/database");

async function getMovies() {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('movies');
    const movies = await collection.find({}).toArray();
    await client.close();
    return movies;
};

async function getMovieById(id) {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('movies');
    const _id = ObjectId.createFromHexString(id);
    const movie = await collection.findOne({_id});
    await client.close();
    return movie;
}

async function addMovie(movie) {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('movies');
    const result = await collection.insertOne(movie);
    await client.close();
    return result;
}

async function deleteMovie(id) {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('movies');
    const _id = ObjectId.createFromHexString(id);
    const result = await collection.deleteOne({_id});
    await client.close();
    return {"Movie deleted successfully" : result};
}

async function updateMovie(id, movie) {
    await client.connect();
    const db = client.db('mydb');
    const collection = db.collection('movies');
    const _id = ObjectId.createFromHexString(id);
    for (const key in movie) {
        await collection.updateOne({_id}, {$set: {[key]: movie[key]}});
    }
    const result = await collection.findOne({_id});
    await client.close();
    return {"Movie updated successfully": result};
}

module.exports = {
    getMovies,
    addMovie,
    getMovieById,
    deleteMovie,
    updateMovie
};