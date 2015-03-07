# phonegap-jquerym-js

This repository contains resources from the presentations given by Andy Gup and Lloyd Heberlie during annual [Esri Developer's Conferences](http://www.esri.com/events/devsummit) and [Esri International User's Conferences](http://www.esri.com/events/user-conference).

## Description
Take your ArcGIS API for JavaScript skills to the next level. Learn how to configure, build, and style hybrid, cross-platform mobile GIS applications that can access GPS, cameras, SD cards, and more. This session will cover implementation patterns using PhoneGap and JQuery.

## Getting started

* [Installing Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Node.js: [How to install Node.js](http://howtonode.org/how-to-install-nodejs)
	* Installation varies by platform, but I recommend [HomeBrew](http://brew.sh/#install) if you on a Mac.
* Grunt command line interface (grunt-cli): [Getting started with GRUNT](http://gruntjs.com/getting-started)
	* ```npm install -g grunt-cli```
	* grunt-init: [GRUNT project scaffolding](http://gruntjs.com/project-scaffolding)
		* ```npm install -g grunt-init```
* Apache Cordova: `npm install -g cordova`
* Apache Cordova: [command line interface tool](https://www.npmjs.com/package/cordova)
* Force Git to clone from **https://** instead of **git://**
	* ```git config --global url.https://.insteadOf git://```

## Contents

### grunt-init-cordova-esrijs

A grunt [Project Scaffolding](http://gruntjs.com/project-scaffolding) project for creating an Apache Cordova and ArcGIS API for JavaScript project.

### grunt-init-hello-cordova

A grunt [Project Scaffolding](http://gruntjs.com/project-scaffolding) project for creating a *hello world* project that uses [Apache Cordova](http://cordova.apache.org/) targeting Android and Apple iOS. The project also has grunt task `demo3` that will copy the [ArcGIS API for JavaScript](https://developers.arcgis.com/en/downloads/) **compact build** into the project creating a simple map application showing how to deploy the API with [Apache Cordova](http://cordova.apache.org/).

### hello-ds

A skeleton project from running `grunt-init grunt-init-hello-cordova`, you will still need to run `npm install` to install the necessary modules to use this stand-alone.

## Resources

* Esri
    * [ArcGIS API for JavaScript](http://js.arcgis.com)
    * [ArcGIS API for JavaScript Web Optimizer](http://jso.arcgis.com)
    * [Esri jsapi-resources](https://github.com/Esri/jsapi-resources)
    * [quickstart-map-phonegap](https://github.com/Esri/quickstart-map-phonegap)
    * [jquery-mobile-map-js](https://github.com/Esri/jquery-mobile-map-js)
    * [offline-editor-js](https://github.com/Esri/offline-editor-js)
* Non-Esri
    * [Homebrew](http://brew.sh/): The missing package manager for OS X
    * [NodeJS](https://nodejs.org)
    * [Grunt](http://gruntjs.com): The JavaScript Task Runner
    * [Grunt Project Scaffolding](http://gruntjs.com/project-scaffolding)
    * [Apache Cordova](http://cordova.apache.org) 
    * [Apache Cordova Documentation](http://cordova.apache.org/docs/en/4.0.0/)
    * [Adobe PhoneGap](http://phonegap.com/)
    * [Adobe PhoneGap Documentation](http://docs.phonegap.com/en/4.0.0/index.html)
    * [Reflector Airplay Receiver](http://www.airsquirrels.com/reflector/)
    * [Mobizen Android Anywhere](https://www.mobizen.com/?locale=en)
    * [Droid at Screen](http://droid-at-screen.ribomation.com/download/)
    * Smashing Magazine [Testing on mobile](http://www.smashingmagazine.com/2014/09/03/testing-mobile-emulators-simulators-remote-debugging/2/)
* Android
    * [Android Studio](http://developer.android.com/tools/studio/index.html)
    * [Android Device Help](http://developer.android.com/tools/device.html)
    * [Android File Transfer](http://www.android.com/filetransfer/)
    * [Android Screen Recording](http://developer.android.com/tools/help/adb.html#screenrecord)
    * [Android Signing Your Apps](http://developer.android.com/tools/publishing/app-signing.html)
* Chrome
    * [Google Chrome Canary](https://www.google.com/chrome/browser/canary.html)
    * [Remote Debugging](https://developer.chrome.com/devtools/docs/remote-debugging) with Google Chrome
* Apple iOS
    * [Developer Center](https://developer.apple.com)
    * [iOS Developer Documentation](https://developer.apple.com/library/ios/navigation/)
    * [WWDC videos](https://developer.apple.com/videos/wwdc/2014/)
* Safari
    * [Apple Safari Developer Center](https://developer.apple.com/devcenter/safari/index.action)
    * [WebKit Nightly](http://nightly.webkit.org/) (Safari daily builds)

* Andy Gup: [@agup](http://twitter.com/agup)
* Lloyd Heberlie: [@lheberlie](http://twitter.com/lheberlie)

## Licensing

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [license.txt](license.txt) file.