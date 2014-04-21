/*
 * grunt-brand-log
 * https://github.com/miaojian/grunt-brand-log
 *
 * Copyright (c) 2014 miaojian
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    function log(msg) {
        return console.log('info:' + msg);
    }

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerTask('brand_log', 'print brand log (such as pet) to console', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            name    : '',
            msg     : '',
            filePath: '../brand/Pikachu'
        });

        var brand = require(options.filePath);
        brand(options, log);
    });
};
