const { ObjectId } = require("mongodb");
const client = require("../db/database");

async function getMovies() {
    try {
        await client.connect();
        const db = client.db('mydb');
        const collection = db.collection('movies');
        const movies = await collection.find({}).toArray();
        await client.close();
        return movies;
    } catch (error) {
        throw error
    }
};

async function getMovieById(id) {
    try {
        await client.connect();
        const db = client.db('mydb');
        const collection = db.collection('movies');
        const _id = ObjectId.createFromHexString(id);
        const movie = await collection.findOne({_id});
        await client.close();
        return movie;
    } catch (error) {
        throw error
    }
}

async function addMovie(movie) {
    try {
        await client.connect();
        const db = client.db('mydb');
        const collection = db.collection('movies');
        const result = await collection.insertOne(movie);
        await client.close();
        return result;
    } catch (error) {
        throw error
    }
}

async function deleteMovie(id) {
    try {
        await client.connect();
        const db = client.db('mydb');
        const collection = db.collection('movies');
        const _id = ObjectId.createFromHexString(id);
        const result = await collection.deleteOne({_id});
        await client.close();
        return {"Movie deleted successfully" : result};
    } catch (error) {
        throw error
    }
}

async function updateMovie(id, movie) {
    try {
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
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getMovies,
    addMovie,
    getMovieById,
    deleteMovie,
    updateMovie
};