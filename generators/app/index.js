"use strict";
const Generator = require("yeoman-generator");
const _ = require("lodash");

module.exports = class extends Generator {

  prompting() {
    var applicationName;
    const done = this.async();

    const prompts = [
      {
        type: "list",
        name: "javaVersion",
        message: "Select java version: ",
        default: "11",
        choices: ["11"]
      },
      {
        type: "input",
        name: "applicationName",
        message: "Insert project name: ",
        default: "Edhine XXXXX Quarkus MS",
        validate: function (input) {
          applicationName = input;
          return input ? true : "Application name is required";
        }
      },
      {
        type: "input",
        name: "artifactId",
        message: "Insert project artifact id: ",
        default: function () {
          return _.kebabCase(applicationName);
        }
      },
      {
        type: "input",
        name: "version",
        message: "Insert project version: ",
        default: "0.0.1-SNAPSHOT"
      },
      {
        type: "checkbox",
        message: "Select the data source for this application: ",
        name: "extensions",
        choices: [
          "MySql",
        ],
        filter: function (val) {
          var camelCaseVal = val.map(v => _.camelCase(v));

          return camelCaseVal;
        }
      }
    ];

    this.prompt(prompts).then(propsParam => {
      this.props = propsParam;
      this.config.set("appProps", this.props);
      done();
    });
  }

  async Configuring() {
    this.log("Configuring app...");
  }

  async writing() {
    this.fs.copyTpl(
      this.templatePath("./"),
      this.destinationPath("./" + this.props.artifactId),
      this,
      {},
      { globOptions: { dot: true } }
    );
  }

  printProperties() {
    this.log("answers:", JSON.stringify(this.props));
  }

};
