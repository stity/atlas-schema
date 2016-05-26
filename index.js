var schemas = [
    "StandaloneObject",
    "Annotation.json",
    "DataSource.json",
    "RenderOption.json",
    "Selector.json",
    "Structure.json",
    "Group.json",
    "Header.json"
],
    name,
    parsedSchema;

//create the validator
var Validator = require('jsonschema').Validator;
var v = new Validator();

//register subschemas
for (name of schemas) {
    parsedSchema = require('./'+name);
    v.addSchema(parsedSchema, parsedSchema.id);
    console.log(parsedSchema.id+' has been registred');
}

//retrieve structure
var atlasStructure = require('./atlasStructure.json');

//retrieve main schema
var atlasSchema = require('./Atlas.json');

//validate the structure
var result = v.validate(atlasStructure, atlasSchema);


//display the result
if (result.errors.length === 0) {
    console.log('Your structure validated against the schema');
}
else {
    console.log('Error, your structure failed to validate');
    console.log(result.errors);
}
