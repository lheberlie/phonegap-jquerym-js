/*
 * grunt-init-esrijs-mobile
 * https://gruntjs.com/
 *
 * Copyright (c) 2014 Lloyd Heberlie
 * Licensed under the Apache-2 license.
 */

"use strict";

// Basic template description.
exports.description = "Create a boilerplate Apache Cordova project.";

// Template-specific notes to be displayed before question prompts.
exports.notes = "This template requires nodejs, apache cordova, and grunt\n\n" +
  "Your responses to the prompts after this message will be written to the project's nodejs package.json file.";

// Template-specific notes to be displayed after question prompts.
exports.after = "You should now install project dependencies with _npm " +
  "install_.\n\n Finally, you may execute project tasks with _grunt_. For " +
  "more information about installing and configuring Grunt, please see " +
  "the Getting Started guide:" +
  "\n\n" +
  "http://gruntjs.com/getting-started";

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = "*";

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt("name"),
    init.prompt("description", "A demo for my first cordova application"),
    init.prompt("version"),
    init.prompt("repository", "https://github.com/lheberlie/phonegap-jquerym-js"),
    init.prompt("homepage"),
    init.prompt("bugs"),
    init.prompt("licenses"),
    init.prompt("author_name"),
    init.prompt("author_email"),
    init.prompt("author_url"),
    init.prompt("node_version"),
	init.prompt("application_display_title", "Hello C"),
    init.prompt("application_project_folder", "HelloC"),
    init.prompt("application_id", "com.github.lheberlie.cordova.helloc"),
    init.prompt("arcgis_js_api_compact")
  ], function(err, props) {
    props.keywords = ["apache cordova", "grunt"];
    props.devDependencies = {
	    "grunt": "^0.4.5",
	       "grunt-contrib-copy": "^0.8.0",
	       "grunt-cordovacli": "^0.7.0",
	       "load-grunt-tasks": "^3.1.0",
	       "time-grunt": "^1.1.0"
    };
	
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    //init.writePackageJSON("package.json", props);
    init.writePackageJSON("package.json", props, function(pkg, props){
		pkg["//"] = ["Comment 1","Comment 2","Comment 3"];
		pkg["cordovacli"] = {
			"application_display_title": props["application_display_title"],
        	"application_project_folder": props["application_project_folder"],
			"application_id": props["application_id"],
			"arcgis_js_api_compact_home": props["arcgis_js_api_compact"]
		};
		return pkg;
    });

    // All done!
    done();
  });

};
