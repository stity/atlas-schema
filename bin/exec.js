#!/usr/bin/env node

var validate = require('../validate.js');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');

if (argv._.length > 0) {
    for (var i = 0; i < argv._.length; i++) {
        console.log('validating '+argv._[i]+' ...');
        validate(path.join(process.cwd(),argv._[i]));
    }
}
else {
    validate(path.join(process.cwd(),"atlasStructure.json"));
}
