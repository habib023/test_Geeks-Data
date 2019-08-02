const mongoose = require('mongoose');

const synonymeschema = mongoose.Schema({
    default_value: String  ,
    code: String,
    hierarchy_code : String,
    roles:   [],
    validations : String,   
    required: Boolean,
    variant: Boolean ,
    description_translations: String,
    label: String,
    label_translations:[],
    values : String,
    requirement_level: String,
    values_list :String ,
    type: String ,
    example : String,
    type_parameter: String,
    description :String
}, {
    timestamps: true
});

module.exports = mongoose.model('synonyme', synonymeschema);