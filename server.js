var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var Post = require('./models/post');
app.use(bodyParser.json());
app.get('/api/posts', (request, response, next) => {
    Post.find(function(err, posts) {
        if (err) { return next(err); }
        response.json(posts);
    });
});
var Post = require('./models/post');
app.post('/api/posts', (req, res, next) => {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });
    post.save(function(err, post) {
        if (err) {
            return next(err);
        }
        res.status(201).json(post);
    })
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/layouts/index.html');
});
app.listen(3000, () => {
    console.log("server is running on port 3000");
})