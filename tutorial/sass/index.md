---
layout: main
title: Sass (Syntactically Awesome StyleSheets)
---


# SASS
Sass stands for `(Syntactically Awesome StyleSheets)`. A style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum in 2016. After its initial versions, Weizenbaum and Chris Eppstein continued to extend Sass with SassScript, a simple scripting language used in Sass files.

Sass Stable release in March 28, 2016.

---

## Course Content 

- [Why switch to sass](#why-switch-to-sass)
- [How to install SASS](#how-to-install-sass)
- [Project Setup](#project-setup)
- [SASS @import](#sass-import)
- [How to compile SASS](#sass-render)
- [Output styles](#output-styles) 
- [SASS Variables and Data types](#sass-variables-and-data-types)
- SASS @functions
- SASS Condition (@If…@else)
- Looping (@for @each and @while)
- SASS Extend 
- SASS Mixins

## Why switch to sass

#### SASS provides us very cool features like
- Variables
- Import
- Conditions 
- Looping
- Syntax 

Personaly i like sass for its `syntax` Don't need any `{}` or `;` it works all on indentation

when we work on large project like e-commerce website our css get large. It's become very difficult to maintain, with sass we can create sepearte file as per module and import it in one file.

we know that condition, looping, variables helps alot while developing any application. with SASS you can do thing thing for better and smarter UI Development.


## How to install SASS 



```ruby
sudo gem install sass
```

## Project setup

Every developer has their own way to store files for their project. i have mine too 

<img src="/images/sass/project-setup.png" />

I preferred to keep separated folder for all `sass` files. inside `sass` folder i used to keep separate folder as per my convenient those ase follow

- 0-plugins (use to keep Sass helper plugins such ass [Bourbon](https://www.bourbon.io/) and [Compass](http://compass-style.org/)
- 1-tools I use this folder to store global sass which remains same for all folder such as *variable* *fonts* *reset* *grid-systems* etc.
- 2-basics I use this folder to store sass files which useable for all project but need to update as project eg. *typography* 
- 3-modules here is main folder which i have list of all sass files which modules eg *overlay*, *tabination* etc. 
- 4-pages Sass files which lives here which all are for my pages like index.sass and about.sass etc.

> After all this `@include` everything in `styles.sass` to render css 


## SASS @import

it is very easy to import your sass files. 

```sass
@import /path/to/sass
// example 
@import 4-pages/_index.sass
```

> Note: if you start name with `_` that will not render as new file. we are going to learn this in next chapter


## SASS @render
once you done with your project setup now its time to render your `sass` files into `css` files. There are 2 ways to do this.
- Via Javascript
- Via CLI (Command line tools) **Recommended**

We are using CLI for this tutorial. do compile your sass files navigate you project folder from terminal by using 
```
CD /path/to/your/project-folder
```
once you are in your folder use below command for compile your sass file.

```ruby 
sass <input>:<output>

/* example */
sass main.sass:main.css

/* example with folder */
sass sass/main.sass:styles/main.css

```

You can ask sass to continuously watch you file by adding `--watch` or `-w`. 

```ruby
sass --watch main.sass:main.css
```  

you can use entire folder to watch.
```ruby
sass --watch path/to/sass/files:path/to/css folder
/* example */
sass --watch sass:styles
```  

## SASS Variables and Data types
one of thing that sass makes easy to use and save our time,to allow us to define variables in our sass projects.

for creating variables in sass we need to use `$` sign eg. `$global-width: 20px` and you can use this variable in our sass properties. 
```sass
$global-width: 200px

.class-1
    width: $global-width

.class-2
    height: $global-width

``` 

### Data Types
SassScript supports eight data types:
- numbers (e.g. 1.2, 13, 10px)
- strings of text, with and without quotes (e.g. "foo", 'bar', baz)
- colors (e.g. blue, #04a3f9, rgba(255, 0, 0, 0.5))
- booleans (e.g. true, false)
- nulls (e.g. null)
- lists of values, separated by spaces or commas (e.g. 1.5em 1em 0 2em, Helvetica, Arial, sans-serif)
- maps from one value to another (e.g. (key1: value1, key2: value2))
- function references

SassScript also supports all other types of CSS property value, such as Unicode ranges and !important declarations. However, it has no special handling for these types. They're treated just like unquoted strings.