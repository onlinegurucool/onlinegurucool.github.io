---
layout: main
title: Sass (Syntactically Awesome StyleSheets)
---

# Mixins

I have created some usefully mixins

## Prefix values

When we talk about some advance features that we need to use in our project. It is big challenge to make them work with all browsers so we need to add some browsers prefixers eg. `webkit` `moz` etc.

to repeat webikit,moz,o....etc in each property is very frustrating.

after 3 years frustrations with css, when I were switch to SASS. I have created this.

#### input sass

```sass
/* define mixing */
=prefix($property,$value)
    -webkit-#{$property}: $value
    -o-#{$property}: $value
    -moz-#{$property}: $value
    -ms-#{$property}: $value
    #{$property}: $value

/* Calling mixins */
.sample-class
    +prefix(border-radius, 20px)
    +prefix(box-shadow, 0 0 20px #000)
```

#### Output CSS

```css
.sample-class {
    -webkit-border-radius: 20px;
    -o-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    border-radius: 20px;
    -webkit-box-shadow: 0 0 20px #000;
    -o-box-shadow: 0 0 20px #000;
    -moz-box-shadow: 0 0 20px #000;
    -ms-box-shadow: 0 0 20px #000;
    box-shadow: 0 0 20px #000;
}
```
