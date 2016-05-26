Introduction
=====
This repository is a tool to help you build and validate an atlas structure using [JSON Schema](http://json-schema.org/). <br>
The different objects used in the format are described in JSON Schema. <br>
`Atlas.json` is the main schema.<br>
`atlasStructure.json` is an example of structure passing the validation.


Installation
=====
###Locally

```shell
git clone https://github.com/stity/atlas-schema
```

###Globally

```shell
git clone https://github.com/stity/atlas-schema
cd atlas-schema
npm install -g ./
```


Validate
=====
###Locally

```shell
node index.js [nameOfTheJSONFile=atlasStructure.json] [anotherFile] [...]
```
###Globally

```shell
atlas-schema [nameOfTheJSONFile=atlasStructure.json] [anotherFile] [...]
```