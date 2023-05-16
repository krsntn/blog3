---
title: Invoke Debugger Statements
date: 2023-05-16T06:00:05.000Z
description: Pausing website functionality with debugger statements
tags:
  - javascript
  - debugger
---
It is common to encounter websites that, upon pressing F12 or opening the browser's developer tools, it pause the execution on a specific line of code using a debugger statement. This pause effectively halts the website's functionality until the developer tools are closed.

![debugger](https://i.imgur.com/fteNzmZ.png)

Here's an example of how you can incorporate this behavior into a website:

```javascript
setInterval(function () {
  check();
}, 2000);

function check() {
  function doCheck(num) {
    (function () {})["constructor"]("debugger")();
    doCheck(num++);
  }

  try {
    doCheck(0);
  } catch (err) {
    console.error(err);
  }
}

check();
```

In the code snippet above, it sets up an interval using setInterval, which repeatedly calls the `check()` function every 2000 milliseconds (or 2 seconds).

The `check()` function defines an inner function called `doCheck(num)`. Inside `doCheck()`, there is a line of code `(function () {})["constructor"]("debugger")();`. Let's break down what happens here:

`(function () {})`: This creates an anonymous empty function, similar to what we discussed in the previous question.

`["constructor"]`: Accessing the constructor property of the empty function.

`("debugger")`: Invoking the constructor property, treating it as a function. The string "debugger" is passed as an argument. The debugger statement in JavaScript triggers a breakpoint in debugging tools.

`()`: Invoking the result of the previous step. This executes the debugger statement.

Therefore, every time `doCheck()` is called, it invokes the empty function's constructor property with the string "debugger", effectively triggering a debugger breakpoint.

The `doCheck(num++)` line recursively calls `doCheck()` with an incremented num value. However, since there is no exit condition or base case, this will create an infinite loop.

Outside the `doCheck()` function, there is a try-catch block. The try block attempts to execute `doCheck(0)`. Since `doCheck()` enters an infinite loop, an error will eventually be thrown.

If an error occurs during the execution of `doCheck()`, the catch block will catch the error object (err) and log it to the console using console.error(err).

Finally, the code explicitly calls `check()` once to initiate the execution.

In summary, the code sets up an interval that repeatedly calls `check()`. The `check()` function enters an infinite loop with a recursive function call and triggers a debugger breakpoint on each iteration. Eventually, an error is thrown, caught, and logged to the console. The process continues indefinitely due to the recursive loop.