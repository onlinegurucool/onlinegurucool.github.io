---
layout: main
title: how to create referral code in MySQL
---

# how to create referral code in MySQL

it is very simple trick to get this done. i am using `substring()`,`concat()`, and `rand()` function. MySQL substring function expects 3 parameters `substring(string,start_index,length)`

```sql
select substring("online gurucool",3,4);
```
as per above example this will return `line` word from that string.

<img src="/images/mysql/line-result.png" />

## Don't waste much time let's start with trick. 
i am going to use below string <br/>`ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`  <br/> for this method.

```sql 
select rand() * 36
```
This is very short and simple `select query` will give you random number between 1 to 36. then we are going to use this random number as `start_index` in `substring` function.

```sql 
select substring(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    ROUND(rand() * 36),1
)
```
After trickly merging both function as this will return you single random word from above string on every time when you run this query. 

finally we use same function in `concat()` function and create one random string.
```sql 
select
    CONCAT(
        substring(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            ROUND(rand() * 36),1
        ),
        substring(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            ROUND(rand() * 36),1
        ),
        substring(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            ROUND(rand() * 36),1
        ),
        substring(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            ROUND(rand() * 36),1
        ),
        substring(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            ROUND(rand() * 36),1
        ),
        substring(
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            ROUND(rand() * 36),1
        )
    )
```

When you run above code again and again you will able to see the random code generated.

<img src="/images/mysql/result.gif" width="300px" />

I prefer to use above code in MySQL trigger.

> its on you from where you want use this trick to insert or update referral code.