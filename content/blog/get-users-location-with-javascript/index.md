---
title: Get User's Location With Javascript
date: 2023-01-10T07:49:10.335Z
description: Geolocation in Web API
tags:
  - javascript
---
```javascript
navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  console.log( latitude, longitude )
}, err => {
  console.error(err)
})
```


![permission](https://images2.imgbox.com/85/06/c3WEK1WA_o.png)
The browser will ask for permission. If user block or don't give permission, the Geolocation API will not work.



The `getCurrentPosition` function takes 2 arguments

```javascript
navigator.geolocation.getCurrentPosition(successCallback, failedCallback);
```



It's always better to first check whether the browser supports the Geolocation Web API.

```javascript
if (window.navigator.geolocation) {
  // Browser supports Geolocation
}
```