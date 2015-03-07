/* ---------------------------------------------------------------------
 * http://gruntjs.com/getting-started
 * http://gruntjs.com/sample-gruntfile
 *
 * https://www.npmjs.org/package/grunt
 * https://www.npmjs.org/package/grunt-contrib-clean
 * https://www.npmjs.org/package/grunt-contrib-watch
 * https://www.npmjs.org/package/grunt-targethtml
 * https://www.npmjs.org/package/load-grunt-tasks
 * https://www.npmjs.org/package/time-grunt
 * https://www.npmjs.org/package/grunt-cordovacli
 *
 * ---------------------------------------------------------------------
 */

(function (){
  "use strict";
}());

module.exports = function (grunt){

  // ---------------------------------------------------------------------
  // show elapsed time at the end
  // ---------------------------------------------------------------------
  require("time-grunt")(grunt);

  // ---------------------------------------------------------------------
  // load all grunt tasks
  // ---------------------------------------------------------------------
  require("load-grunt-tasks")(grunt);

  grunt.initConfig(
    {
      pkg: grunt.file.readJSON("package.json"),
      // ---------------------------------------------------------------------
      // banner
      // ---------------------------------------------------------------------
      banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
      "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" +
      "<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\n\" : \"\" %>" +
      "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>;" +
      " Licensed <%= _.pluck(pkg.licenses, \"type\").join(\", \") %> */\n",
      // ---------------------------------------------------------------------
      // grunt-contrib-copy
      // ---------------------------------------------------------------------
      copy: {
        source_to_build: {
          files: [
            {
              src: ["<%= pkg.cordovacli.application_project_folder %>/www/index.html"],
              dest: "<%= pkg.cordovacli.application_project_folder %>/src/cordova_index.html"
            },
            {
              expand: true,
              cwd: "src/",
              src: ["index.html"], dest: "<%= pkg.cordovacli.application_project_folder %>/www/"
            },
            {
              expand: true,
              cwd: "<%= pkg.cordovacli.arcgis_js_api_compact_home %>/",
              src: ["**"], dest: "<%= pkg.cordovacli.application_project_folder %>/www/js/esrijs"
            }
          ]
        }
      },
      // ---------------------------------------------------------------------
      // grunt-cordovacli
      // ---------------------------------------------------------------------
      cordovacli: {
        options: {
          path: "<%= pkg.cordovacli.application_project_folder %>"
        },
        all: {
          options: {
            command: ["create", "platform", "plugin"],
            platforms: ["ios", "android"],
            plugins: ["device", "dialogs"],
            path: "<%= pkg.cordovacli.application_project_folder %>",
            id: "<%= pkg.cordovacli.application_id %>",
            name: "<%= pkg.cordovacli.application_display_title %>"
          }
        },
        create: {
          options: {
            command: "create",
            id: "<%= pkg.cordovacli.application_id %>",
            name: "<%= pkg.cordovacli.application_display_title %>"
          }
        },
        add_platforms: {
          options: {
            command: "platform",
            action: "add",
            platforms: ["ios", "android"]
          }
        },
        remove_platforms: {
          options: {
            command: "platform",
            action: "remove",
            platforms: ["ios", "android"]
          }
        },
        add_plugins: {
          options: {
            command: "plugin",
            action: "add",
            plugins: [
              "device",
              "dialogs",
              "splashscreen"
            ]
          }
        },
        remove_plugins: {
          options: {
            command: "plugin",
            action: "remove",
            plugins: [
              "device",
              "dialogs",
              "splashscreen"
            ]
          }
        },
        // --------------------------------------------------------------------
        // build [PLATFORM...]
        // shortcut for prepare, then compile
        // --------------------------------------------------------------------
        build_ios: {
          options: {
            command: "build",
            platforms: ["ios"]
          }
        },
        // --------------------------------------------------------------------
        // build [PLATFORM...]
        // shortcut for prepare, then compile
        // --------------------------------------------------------------------
        build_android: {
          options: {
            //
            command: "build",
            platforms: ["android"]
          }
        },
        run_android: {
          options: {
            command: "run",
            platforms: ["android"]
          }
        }
      }

    });

  // ---------------------------------------------------------------------
  // Grunt registered tasks
  // ---------------------------------------------------------------------
  grunt.registerTask("demo1", [
    "cordovacli:all",
    "cordovacli:build_android",
    "cordovacli:run_android"
  ]);

  grunt.registerTask("demo2", [
    "cordovacli:build_ios",
  ]);

  grunt.registerTask("demo3", [
    "copy",
    "cordovacli:build_android",
    "cordovacli:run_android",
    "cordovacli:build_ios",
  ]);

  grunt.registerTask("build", [
    "cordovacli:create",
    "cordovacli:add_platforms",
    "cordovacli:add_plugins",
    "cordovacli:build"
  ]);

  grunt.registerTask("rebuild", [
    "cordovacli:build_android",
    "cordovacli:build_ios"
  ]);
};