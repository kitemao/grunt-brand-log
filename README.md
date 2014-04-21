# grunt-brand-log

> print brand log (such as pet) to console

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-brand-log --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-brand-log');
```

## The "brand_log" task

### Overview
In your project's Gruntfile, add a section named `brand_log` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  brand_log: {
    options: {
      // Task-specific options go here.
    }
  },
});
```

### Options

#### options.name
Type: `String`
Default value: `''`

A project name that is used to do show.

#### options.msg
Type: `String`
Default value: `''`

A string value (such as v1.0.0).

#### options.filePath
Type: `String`
Default value: `'Pikachu'`

A path to print a brand(a pikachu pet).

```js
module.exports = function (options, log) {
  log('');
}
```

#### Custom Options
In this example, custom options are used to do something else with whatever else.

```js
grunt.initConfig({
  brand_log: {
    options: {
      name: 'brand',
      msg: 'v1.0.0.',
      filePath: './xxx' 
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
