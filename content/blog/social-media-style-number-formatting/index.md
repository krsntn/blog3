---
title: Social Media Style Number Formatting
date: 2022-10-27T09:21:16.300Z
description: Format numbers like 1.2K or 2.3M using the JavaScript Internationalization API
tags:
  - javascript
---
`﻿``javascript
let formatter = Intl.NumberFormat('en', {
  notation: 'compact',
  style: 'currency',
  currency: 'SGD',
});

let n = formatter.format(505123);

console.log(n); //SGD 505K
```

`﻿``javascript
let formatter = Intl.NumberFormat('en', {
  notation: 'compact',
});

let n = formatter.format(155123123123);

console.log(n); //1.6T
```
