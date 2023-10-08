const express = require("express");
const blogModel = require("./Models");
const app = express();
var ObjectId = require('mongoose').Types.ObjectId; 

app.get('/blogs', async (request, response) => {
    try {
        const blogs = await blogModel.find({});
        response.send(blogs);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get('/blogs/:id', async (request, response) => {
    try {
        const blog = await blogModel.findById(new ObjectId(request.params.id));
        response.send(blog);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post('/blogs', async (request, response) => {
    const blog = new blogModel(request.body);
    try {
        await blog.save();
        response.send(blog);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.delete('/blogs/:id', async (request, response) => {
    try {
        const blog = await blogModel.deleteOne(new ObjectId(request.params.id));
        response.send(blog);
    } catch (error) {
        response.status(500).send(error);
    }
});


  module.exports = app;