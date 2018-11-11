---
layout: main
title: How to create random string in javascript
social-share: true
---


# How to create random string in javascript

Well this article is inspired by my article on [how to create random string in mysql](/tutorial/mysql/how-to-create-referral-code-in-mysql)

I love to simplify all small things into one function. So i am back with an another one.

Nice **ingredients** make food delicious, same in any language, best use of core functions will make your function useful and efficient.

**Ingredients**

-   toLowerCase()
-   substr()
-   Math.floor()
-   Math.random()

#### Step 1

generate one random string between 1 to n number.

```javascript
var length = 8;
Math.floor(Math.random() * length) + 1;
// this will return random number between 1 to 8
```

### Step 2

We will use above random number to get one random string.

substr function expect 2 parameter _`substr(start-index,length)`_

```js
var string = "onlinegurucool";
var randomDigit = Math.floor(Math.random() * string.length) + 1;
var substr_limit = 1; //this should be one for this recipe
string.substr(randomDigit, substr_limit);
// this will return any random word from given string
```

### Step 3

now we have to loop for how long random string length we need

```js
var string = "onlinegurucool";
var randomDigit = Math.floor(Math.random() * string.length) + 1;
var substr_limit = 1; //this should be one for this recipe
var length = 6; // random string length 
var result = "";
// loop till length 
for (let i = 1; i <= length; i++) {
    result += string.substr(randomDigit, substr_limit);
}
```
now lets combine all this into reusable function. and garnish with one last thing that is `toLowerCase()`. I am using `lower` as last parameter  on my _function_ which is initially false if you make it true you will get result in lowvercase only.

```javascript
// define function
function generateRandomString(
    length = 1,
    string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    lower = false
) {
    var result = "";
    string = lower ? string.toLowerCase() : string;
    for (let i = 1; i <= length; i++) {
        result += string.substr(
            Math.floor(Math.random() * string.length) + 1,
            1
        );
    }
    return result;
}
// calling function
generateRandomString(5); // result N2GOH,15010,B6ESI
//with custom string
generateRandomString(5, "ONLINEGURUCOOL"); // result RLENIE,LENUO,EGNOCC
// with custom string and lower case true
generateRandomString(5, "ONLINEGURUCOOL", true); // result ngcceu,golll,gounoo
```

{% include fb-comments.html href="https://www.facebook.com/onlinegurucool" %}