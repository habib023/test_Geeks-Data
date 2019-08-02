const Synonyme = require('../model/synonyme.model.js');

//Create new synonyme
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        
        return res.status(400).send({
            message: "synonyme content can not be empty"
        });
    }

    // Create a synonyme
    const synonyme = new Synonyme({
       
    default_value: req.body.default_value ,
    code: req.body.code,
    hierarchy_code : req.body.hierarchy_code,
    roles: req.body.roles,
    validations : req.body.validations,   
    required: req.body.required,
    variant: req.body.variant,
    description_translations: req.body.description_translations,
    label: req.body.label,
    label_translations:req.body.label_translations,
    values : req.body.values,
    requirement_level: req.body.requirement_level,
    values_list :req.body.values_list ,
    type: req.body.type ,
    example : req.body.example,
    type_parameter: req.body.type_parameter,
    description :req.body.description
    });
    

    // Save synonyme in the database
    synonyme.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the synonyme."
        });
    });
};

// Retrieve all synonyme from the database.
exports.findAll = (req, res) => {
    Synonyme.find()
    .then(synonymes => {
        res.send(synonymes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving synonymes."
        });
    });
};

// Find a single synonyme with a synonymeId
exports.findOne = (req, res) => {
    Synonyme.findById(req.params.synonymeId)
    .then(synonyme => {
        if(!synonyme) {
            return res.status(404).send({
                message: "synonyme not found with id " + req.params.synonymeId
            });            
        }
        res.send(synonyme);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "synonyme not found with id " + req.params.synonymeId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving synonyme with id " + req.params.synonymeId
        });
    });
};

// Update a synonyme
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "synonyme content can not be empty"
        });
    }

    // Find and update synonyme with the request body
    Synonyme.findByIdAndUpdate(req.params.synonymeId, {
        default_value: req.body.default_value ,
    code: req.body.code,
    hierarchy_code : req.body.hierarchy_code,
    roles: req.body.roles,
    validations : req.body.validations,   
    required: req.body.required,
    variant: req.body.variant,
    description_translations: req.body.description_translations,
    label: req.body.label,
    label_translations:req.body.label_translations,
    values : req.body.values,
    requirement_level: req.body.requirement_level,
    values_list :req.body.values_list ,
    type: req.body.type ,
    example : req.body.example,
    type_parameter: req.body.type_parameter,
    description :req.body.description
    }, {new: true})
    .then(synonyme => {
        if(!synonyme) {
            return res.status(404).send({
                message: "synonyme not found with id " + req.params.synonymeId
            });
        }
        res.send(synonyme);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.synonymeId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.synonymeId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Synonyme.findByIdAndRemove(req.params.synonymeId)
    .then(synonyme => {
        if(!synonyme) {
            return res.status(404).send({
                message: "synonyme not found with id " + req.params.synonymeId
            });
        }
        res.send({message: "synonyme deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "synonyme not found with id " + req.params.synonymeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete synonyme with id " + req.params.synonymeId
        });
    });
};