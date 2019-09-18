const Movie = require('../../models/movie');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteMovie,
}

function index(req, res) {
    Movie.find({})
        .then(function(movies) {
            res.status(200).json(movies);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
};

function create(req, res) {
    Movie.create(req.body).then(function(m) {
        res.status(201).json(m);
    });
};

function show(req, res) {
    Movie.findById(req.params.id).then(function(m) {
        res.status(200).json(m);
    });
};

function update(req, res) {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(m) {
        res.status(200).json(m);
    });
};

function deleteMovie(req, res) {
    Movie.findByIdAndRemove(req.params.id).then(function(m) {
        res.status(200).json(m);
    });
}