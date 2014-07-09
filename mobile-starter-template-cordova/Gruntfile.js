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

(function () {
    "use strict";
}());

module.exports = function (grunt) {

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
            // grunt-contrib-clean
            // ---------------------------------------------------------------------
            clean: {
                platforms: {
                    src: ["<%= pkg.cordovacli.application_project_folder %>/platforms/*.*"]
                },
                plugins: {
                    src: ["<%= pkg.cordovacli.application_project_folder %>/plugins/*.*"]
                },
                merges: {
                    src: ["<%= pkg.cordovacli.application_project_folder %>/merges/*.*"]
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
                        command: ["create", "platform", "plugin", "build"],
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
                            "geolocation",
                            "splashscreen"
                            //                            "https://github.com/fingerproof/cordova-plugin-gapreload"
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
                        //args: ["--device", "android"]
                    }
                }
            },
            // ---------------------------------------------------------------------
            // grunt-contrib-watch
            // ---------------------------------------------------------------------
            watch: {
                gapreload: {
                    files: [
                        "<%= pkg.cordovacli.application_project_folder %>/merges/**/*",
                        "<%= pkg.cordovacli.application_project_folder %>/www/**/*"
                    ],
                    tasks: "gapreload-prepare",
                    options: { livereload: true }
                }
            },
            esrijso_modulelist: {
                generate: {
                    // Target-specific file lists and/or options go here.
                    options: {
                        // Task-specific options go here.
                        basePath: "<%= pkg.cordovacli.application_project_folder %>/www/",
                        matchPatterns: ["!*.css", "*.js", "*.html"]
                    },
                    src: ["*.*", "js/*.js"],
                    dest: {
                        moduleList: "modules/esrijso-modulelist.txt",
                        moduleByFileList: "modules/esrijso-modulebyfilelist.txt"
                    }
                }
            }
        });

    // ---------------------------------------------------------------------
    // Grunt registered tasks
    // ---------------------------------------------------------------------

    grunt.registerTask("build", [
        "cordovacli:create",
        "cordovacli:add_platforms",
        "cordovacli:add_plugins",
        "cordovacli:build"
    ]);
};