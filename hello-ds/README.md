# hello-ds

A demo for my first cordova application

This project was derived from the [grunt-init-esrijs](https://github.com/lheberlie/grunt-init-esrijs) template.

## Features

This grunt project template will produce an optimized version of your website through the following features:

* Automate a build version of your website with concatenated versions of your JavaScript, and Cascading Style Sheets with these versions referenced in your main HTML file.  It will also generate a HTML manifest file for you.
* Automate a distribution (dist) version of your website with concatenated and minified versions of your JavaScript, and Cascading Style Sheets with these versions referenced in your main HTML file.  It will also generate a HTML manifest file for you.
* You can also supply a HAR (HTTP Archive) file of your website's network waterfall, and use that to populate your manifest file for both build and distribution versions.

## Requirements

* [Node.js](http://nodejs.org)
* [GRUNT](http://gruntjs.com)
	* [Command line interface](http://gruntjs.com/getting-started#installing-the-cli)
	* [Automate project creation](http://gruntjs.com/project-scaffolding#grunt-init)
* [Bower](http://bower.io/#installing-bower)
* [Git](http://git-scm.com)
* See the resources section for more information.


## Instructions

* Using a terminal window, follow the steps below.
* Install ```grunt-init-esrijs``` into your ```.grunt-init``` directory on your machine, see [Installing Grunt templates](http://gruntjs.com/project-scaffolding#installing-templates).
	* ```git clone https://github.com/lheberlie/grunt-init-esrijs.git ~/.grunt-init/```
* Create a new directory ```mkdir``` in your favorite project location
	* Such as ```my-new-project```
* Change directory ```cd``` to the new directory ```~/ProjectLocation/my-new-project```
* Optional, but recommended: initialize your git repo. ```git init```
* Run the grunt-template command ```grunt-init grunt-init-esrijs```, this will initiate the template and start asking you a bunch of questions.
* Install all the project template dependencies: ```npm install```
	* This will create a ```node_modules``` directory within your current project.
* Install jQuery Mobile: ```bower install jquery-mobile-bower```
* Install ArcGIS API for JavaScript: ```bower install http://hostname.domain.com/esrijs-release/3.9compact.zip```
	* This step requires you to have downloaded the current compact version of the **ArcGIS API for JavaScript**, created a zip file of that version, and put it in a virtual directory of your choice.  You could just copy the ```X.Xcompact``` version into you new project directory, but bower makes it super easy to extract it.  You'll only have to do this setup once for every new release.
* Execute the Grunt tasks: ```grunt build``` or ```grunt dist```

## Project structure

After completion of running the grunt-template command ```grunt-init grunt-init-esrijs```

Until you become more familiar with this template it is not recommended that you rename any of the files.  You can think of app.js and app.css as the final files that will get loaded last in your application.  All other dependencies will be loaded before the contents of these two files.

```
my-new-project
   |-network_archives
   |--readme.txt
   |-src
   |---index.html
   |---offline.html
   |---js
   |----app.js
   |---styles
   |-----css
   |-------images
   |-------app.css
   |-.gitignore
   |-.jshintrc
   |-CONTRIBUTING.md
   |-README.md
   |-license.txt
   |-LICENSE-Apache-2.0
   |-Gruntfile.js
   |-package.json
```
After completion of running all the steps in the instructions, your project might look as follows:

```
my-new-project
   |-node_modules
   |-bower_components
   |-build
   |-dist
   |-network_archives
   |--readme.txt
   |-src
   |---index.html
   |---offline.html
   |---js
   |----app.js
   |---styles
   |-----css
   |-------images
   |-------app.css
   |-.gitignore
   |-.jshintrc
   |-CONTRIBUTING.md
   |-README.md
   |-license.txt
   |-LICENSE-Apache-2.0
   |-Gruntfile.js
   |-package.json
```


## Resources

* Node.js: [How to install Node.js](http://howtonode.org/how-to-install-nodejs)
	* Installation varies by platform, but I recommend [HomeBrew](http://brew.sh/#install) if you on a Mac.
* Grunt command line interface (grunt-cli): [Getting started with GRUNT](http://gruntjs.com/getting-started)
	* ```npm install -g grunt-cli```
	* grunt-init: [GRUNT project scaffolding](http://gruntjs.com/project-scaffolding)
		* ```npm install -g grunt-init```
* Bower: [Installing Bower](http://bower.io/#installing-bower)
	* ```npm install -g bower```
* Force Git to clone from **https://** instead of **git://**
	* ```git config --global url.https://.insteadOf git://```

## Release History
View the [releases](../../releases)

## Issues
Find a bug or want to request a new feature?  Please let us know by [submitting an issue](../../issues).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

_Also, please don't edit files in the **"build"** or **"dist"** subdirectory as they are generated via Grunt. You'll find source code in the **"src"** subdirectory!_

We welcome [contributions](CONTRIBUTING.md) from anyone and everyone. Please see the [guidelines for contributing](https://github.com/esri/contributing).


## Licensing
Copyright (c) 2015 Lloyd Heberlie  
<!--
Licensed under the Apache-2.0 license.
-->
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](license.txt) file.