/* hepl-web/hepl-web.github.io
 *
 * /Gruntfile - grunt tasks
 *
 * coded by leny@flatLand!
 * started at 18/09/2016
 */

/* eslint-disable */

"use strict";

module.exports = function( grunt ) {

    require( "load-grunt-tasks" )( grunt );

    var oPackage = require( "./package.json" ),
        aLibs = Object.keys( oPackage.dependencies );

    grunt.initConfig( {
        "browserify": {
            "libs": {
                "options": {
                    "require": aLibs,
                    "transform": [ [ "babelify" ] ],
                },
                "src": [],
                "dest": "static/js/libs.js",
            },
            "app": {
                "options": {
                    "external": aLibs,
                    "transform": [ [ "babelify" ] ],
                },
                "files": {
                    "static/js/app.js": "src/js/app.js",
                },
            },
        },
        "env": {
            "libs": {
                "NODE_ENV": "production",
            },
        },
        "eslint": {
            "options": {
                "configFile": ".eslintrc.json",
            },
            "scripts": [
                "src/js/**/*.js",
            ]
        },
        "uglify": {
            "options": {
                "sourceMap": false,
            },
            "libs": {
                "files": {
                    "static/js/libs.min.js": "static/js/libs.js",
                },
            },
            "app": {
                "files": {
                    "static/js/app.min.js": "static/js/app.js",
                },
            }
        },
        "watch": {
            "app": {
                "files": [
                    "src/js/**/*.js",
                ],
                "tasks": [
                    "lint",
                    "app",
                ],
            },
        },
    } );

    grunt.registerTask( "default", [
        "build",
    ] );

    grunt.registerTask( "libs", [
        "env:libs",
        "browserify:libs",
        "uglify:libs",
    ] );

    grunt.registerTask( "lint", [
        "eslint",
    ] );

    grunt.registerTask( "app", [
        "browserify:app",
        "uglify:app",
    ] );

    grunt.registerTask( "build", [
        "libs",
        "lint",
        "app",
    ] );

    grunt.registerTask( "work", [
        "build",
        "watch",
    ] );

};
