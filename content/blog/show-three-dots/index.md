---
title: Show Three Dots
date: 2023-02-01T05:35:58.049Z
description: Show three dots (...) at the end of the line
tags:
  - css
---
```css
span {
    display:inline-block;
    width:180px;
    white-space: nowrap;
    overflow:hidden !important;
    text-overflow: ellipsis;
}
```