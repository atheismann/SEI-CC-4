const Performer = require('../../models/performer');

module.exports = {
    index,
    show,
    create,
    update,
    delete: deletePerformer,
}

function index(req, res) {
    Performer.find({})
        .then(function(performers) {
            res.status(200).json(performers);
        })
        .catch(function(err) {
            res.status(500).json(err);
        });
};

function create(req, res) {
    Performer.create(req.body).then(function(perf) {
        res.status(201).json(perf);
    });
};

function show(req, res) {
    Performer.findById(req.params.id).then(function(perf) {
        res.status(200).json(perf);
    });
};

function update(req, res) {
    Performer.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function(perf) {
        res.status(200).json(perf);
    });
};

function deletePerformer(req, res) {
    Performer.findByIdAndRemove(req.params.id).then(function(perf) {
        res.status(200).json(perf);
    });
}