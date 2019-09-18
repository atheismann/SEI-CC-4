const Puppy = require('../../models/puppy');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deletePuppy,
}

function index(req, res) {
    Puppy.find({})
        .then(function(puppies) {
            res.status(200).json(puppies);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
};

function create(req, res) {
    Puppy.create(req.body).then(function(pup) {
        res.status(201).json(pup);
    });
};

function show(req, res) {
    Puppy.findById(req.params.id).then(function(pup) {
        res.status(200).json(pup);
    });
};

function update(req, res) {
    Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(pup) {
        res.status(200).json(pup);
    });
};

function deletePuppy(req, res) {
    Puppy.findByIdAndRemove(req.params.id).then(function(pup) {
        res.status(200).json(pup);
    });
}