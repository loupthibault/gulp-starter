# Gulp Starter

Basic starter to make HTML website.

## Basic Usage
Make sure Node 4.x is installed.

#### Install Dependencies
```
npm i
```

#### Configuration
Directory and top level settings are convienently exposed in gulpfile.js/config.json. Use this file to update paths to match the directory structure of your project, and to adjust task options.

#### Start compiling, serving, and watching files
```
npm start
```

Aliases: `npm run gulp`, `npm run development`


Compile JS via Babel, SCSS, Svg in sprite and inject them in the compiled HTML.

### Build production-ready files
```
npm run production
```

JS and CSS are uglified and minified, HTML are minified and console give you a file size reporting.


## Special Thanks

- all the gulp tasks are heavily inspired from [Viget gulp-starter](https://github.com/vigetlabs/gulp-starter.git), thanks for their great work.
- the stylesheets's architecture and somes mixins are inspired from [Bourbon](http://bourbon.io)

### License

MIT, see [LICENSE.md](LICENSE).
