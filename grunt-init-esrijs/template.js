/*
 * grunt-init-esrijs-mobile
 * https://gruntjs.com/
 *
 * Copyright (c) 2014 Lloyd Heberlie
 * Licensed under the Apache-2 license.
 */

"use strict";

// Basic template description.
exports.description = "Create a boilerplate esrijs mobile module.";

// Template-specific notes to be displayed before question prompts.
exports.notes = "This template requires nodejs, grunt, bower, and the ArcGIS API for JavaScript" +
  "\nMake sure you have downloaded the ArcGIS API for JavaScript\n" +
  "http://www.esri.com/apps/products/download/index.cfm?fuseaction=download.all#ArcGIS_API_for_JavaScript\n" +
  "Alternatively you can use the ArcGIS API for JavaScript Web Optimizer to download a custom build for your" +
  "mobile application _http://jso.arcgis.com_\n\n" +
  "Your responses to the prompts after this message will be written to the project's nodejs package.json file.";

// Template-specific notes to be displayed after question prompts.
exports.after = "You should now install project dependencies with _npm " +
  "install_.\n\n After that, you may install jquery mobile using bower with " +
  "_bower install jquery-mobile-bower_ and Bootstrap using _bower install " +
  "bootstrap_. For more information about installing Bower, please see " +
  "Installing Bower: http://bower.io/#installing-bower\n\n" +
  "Download the compact version or your own custom build of the ArcGIS API for JavaScript, " +
  "and copy it to the root of this project.\n" +
  "You can also zip up the build of the ArcGIS API for JavaScript that you are going to use in the project, and " +
  "install it to your project using bower, such as _bower install http://heb.esri.com/esrijs-release/compact/3.13compact.zip_\n" +
  "Finally, you may execute project tasks with _grunt_. For " +
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
    init.prompt("description"),
    init.prompt("version"),
    init.prompt("repository"),
    init.prompt("homepage"),
    init.prompt("bugs"),
    init.prompt("licenses"),
    init.prompt("author_name"),
    init.prompt("author_email"),
    init.prompt("author_url"),
    init.prompt("node_version"),
	init.prompt("network_archive_dir", "network_archives"),
    init.prompt("esrijs_version", "3.9"),
    init.prompt("esrijs_dir", "bower_components/3.9compact"),
    init.prompt("esrijs_bower_package", "http://heb.esri.com/esrijs-release/compact/3.13compact.zip")
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
		"grunt": "^0.4.4",
        "grunt-contrib-clean": "^0.5.0",
        "grunt-contrib-compass": "^0.8.0",
        "grunt-contrib-concat": "~0.3.0",
        "grunt-contrib-copy": "^0.5.0",
        "grunt-contrib-cssmin": "^0.9.0",
        "grunt-contrib-htmlmin": "^0.2.0",
        "grunt-contrib-uglify": "~0.4.0",
        "grunt-contrib-watch": "^0.6.1",
        "grunt-esrijso-modulelist": "git://github.com/lheberlie/grunt-esrijso-modulelist.git",
        "grunt-manifest": "git://github.com/lheberlie/grunt-manifest.git",
        "grunt-targethtml": "^0.2.6",
        "load-grunt-tasks": "^0.4.0",
        "time-grunt": "^0.3.1"
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
		pkg["//"] = ["a","b","c"];
		pkg.networkArchiveDirectory = props["network_archive_dir"];
        pkg.esrijsURL = props["esrijs_url"];
		pkg.esrijsDirectory = props["esrijs_dir"];
		pkg.esrijsBowerPackage = props["esrijs_bower_package"];
		return pkg;
    });

    // All done!
    done();
  });

};
