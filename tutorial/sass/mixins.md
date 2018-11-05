---
layout: main
title: Sass (Syntactically Awesome StyleSheets)
---

# Mixins

I have created some usefully mixins

## Prefix values

When we talk about some advance features that we need to use in our project. It is big challenge to make them work with all browsers so we need to add some browsers prefixers eg. `webkit` `moz` etc.

to repeat webikit,moz,o....etc in each property is very frustrating.

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

## Placeholders

In moarden design its required to modify styles for placeholder of input box. just include this mixin with your  input. checkout below example. 

### input
```sass
/* Define Mixin*/
=placeholders
  &::-webkit-input-placeholder
    @content

  &:-moz-placeholder
    @content

  &::-moz-placeholder
    @content

  &:-ms-input-placeholder
    @content

  &:placeholder
    @content

/* include mixin*/
input[type="text"]
    /* this properties will not apply css for placeholders */
    font-size: 20px  
    padding: 10px 20px
    color: #000
    +placeholders
        /* add properties for placeholders */
        color: red
        font-style: bold
``` 

### output
```css
input[type="text"] {
  /* this properties will not apply css for placeholders */
  font-size: 20px;
  padding: 10px 20px;
  color: #000; 
}
  input[type="text"]::-webkit-input-placeholder {
    /* add properties for placeholders */
    color: red;
    font-style: bold; 
}
  input[type="text"]:-moz-placeholder {
    /* add properties for placeholders */
    color: red;
    font-style: bold;
}
  input[type="text"]::-moz-placeholder {
    /* add properties for placeholders */
    color: red;
    font-style: bold;
}
  input[type="text"]:-ms-input-placeholder {
    /* add properties for placeholders */
    color: red;
    font-style: bold;
}
  input[type="text"]:placeholder {
    /* add properties for placeholders */
    color: red;
    font-style: bold;
}
```