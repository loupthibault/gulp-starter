# Icon Assets

Drop SVG files here to automatically compile and recompile an Icon Font containing all your icons.

If you don't plan using Icon Font, you may delete this folder and the associated task config in `gulpfile.js/config.json`.


## Specifications

Currently, the task needs SVG with somes specifications.
All SVG must have a height of 1792px, based on the way [Font-Awesome](https://github.com/FortAwesome/Font-Awesome) made their own.

This way, you can handle the descent of each icons the way you want.

If you prefer to use icons already made, [check this repository !](https://github.com/encharm/Font-Awesome-SVG-PNG)

## Tasks and Files

```
gulpfile.js/tasks/iconFont
```
SVGs added to `src/icons` will be automatically compiled into an iconFont, and output to `./public/fonts`. At the same time, a `.scss` file will be output to `src/stylesheets/generated/_icons.sass`. This file contains mixins and classes based on the svg filename. If you want to edit the template that generates this file, it's at `gulpfile.js/tasks/iconFont/template.scss`.

##### Usage:
With generated classes:
```
<i class="icon icon-twitter"></i>
```

With mixins:
```sass
.lil-birdy-guy
  +icon--twitter
```

```scss
.lil-birdy-guy {
  @include icon--twitter;
}
```

```html
<i class="lil-birdy-guy"></i>
```

*Don't forget about accessibility!*

```html
<i aria-label="Twitter" class="icon icon-twitter"></i>
<!-- or -->
<div class="icon icon-twitter"><span class="screen-reader">Twitter</span></div>
```
