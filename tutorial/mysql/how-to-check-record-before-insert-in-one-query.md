---
layout: main
title: How to check record before insert in one query
social-share: true
metaImg: "/images/mysql/how-to-check-record-before-insert-in-one-query.png"
keyword: "how, to , check, record, before insert, in one query, coalesce function, trick coalesce"
---

# How to check record before insert in one query

1 out of 4 times we have to check for record exist. So we need to first select query for the record and then insert or whatever (ignore or update) task you have to perform. 

With some trick and the help of `COALESCE()` function we can achieve this.  

> Trick for remember spelling of COALESCE() function just break it COAL - ESC - E 

I am using very basic user table for demonstrate this example. You can create by using below command
```sql
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(200) DEFAULT NULL,
  `mobile` bigint(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile` (`mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

After inserting some dummy record it would be look like this.

<img src="/images/mysql/basic-user-table.png" />

#### Step 1 
Start with basic insert into statement with receptive column name
```sql 
INSERT INTO 
    user
        (user,mobile)
VALUES
    ("new name", 9876987698)
```  

This works fine. for new mobile number if you try to insert this again it will gives you an error saying duplicate entry for mobile. 

> At this point you might show an error to user for his duplicate mobile number. Basically this trick not fit for this situation. but with this example let you understand this trick better than the complex logic where i have used this trick.

okay let's continue with our trick

#### step 2
we have to build temp table for our values 

```sql 
SELECT 
    * 
FROM 
    (
        SELECT 
            "New User"
            "9876567388"
    )as temp
WHERE 
    1 = 1
```
let's understand this. I am selecting * from temp table which has our new values. I have added where clause so above query will execute when `1 = 1`. if where clause is fail we will not get any values to store. 


### setp 3 

Here we have to check the new valuse in our table and return 1 or 0 checkout below query

```sql 
select 
    0
from 
    user u
where 
    u.mobile = 9876567388
```

Above query will select 0 if he get mobile in user table, here we have one problem our query will not return no rows means no result. to get result when you not having any result wrap this with `COALESCE` function, checkout example below

```sql
select 
    COALESCE(
        (
            select 
                0
            from 
                user u
            where 
                u.mobile = 9876567388 
        ),
        1
    )
```
this query will return 0 if found exiting record. if not it will return 1, as i mentioned in [step 2](#step-2) we need this condition in our where clause 1 = ? 

#### Step 4 

combine everything in one query and tadaaaaa....

```sql
INSERT INTO 
    user 
        (user,mobile)
        (
            select 
                * 
            from 
                (
                    select 
                        "New User",
                        "9876567388"   
                ) as temp
            where 
                1 = (
                    select 
                        COALESCE(
                            (
                                select 
                                    0
                                from 
                                    user u
                                where 
                                    u.mobile = 9876567388
                            ),
                            1
                        )
                )
        )
```

This only one query will check and then perform insert call. 


> This query will not gives an error for duplicate record.

> I have used this query for activity log, insert daily points based on condition etc. 

{% include fb-comments.html href="https://www.facebook.com/onlinegurucool" %}