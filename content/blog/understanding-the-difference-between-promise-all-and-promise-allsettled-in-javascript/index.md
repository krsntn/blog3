---
title: Understanding the Difference Between Promise.all() and
  Promise.allSettled() in JavaScript
date: 2023-05-11T08:58:37.036Z
description: The differences between Promise.all() and Promise.allSettled() methods
tags:
  - javascript
---
When working with promises in JavaScript, two commonly used methods are Promise.all and Promise.allSettled. Both methods are used to handle multiple promises simultaneously, but they differ in how they handle rejected promises.

`Promise.all()` method returns a promise that resolves when all of the promises passed to it have resolved. If any promise in the list is rejected, the entire `Promise.all()` call is rejected. This means that if even one promise fails, the entire operation will fail, and the catch block will be executed.

On the other hand, `Promise.allSettled()` method returns a promise that resolves when all of the promises passed to it have either resolved or rejected. This method does not stop execution on the first rejected promise, and it returns an array of objects representing the fulfilled and rejected promises.

Here's an example of how to use `Promise.all()` and `Promise.allSettled()` methods in JavaScript:

```javascript
const promise1 = Promise.resolve("Hello");
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Timeout Error")), 1000));
const promise3 = Promise.resolve("World");

// Example using Promise.all()
Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Output: Error: Timeout Error

// Example using Promise.allSettled()
Promise.allSettled([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// Output: 
// [
//   {status: "fulfilled", value: "Hello"},
//   {status: "rejected", reason: Error: Timeout Error},
//   {status: "fulfilled", value: "World"}
// ]
```

In the example above, `Promise.all()` method will fail because the promise2 is rejected. However, `Promise.allSettled()` method will return an array of objects representing the fulfilled and rejected promises, including the rejected promise2.

In summary, `Promise.all()` method is useful when you need to wait for all promises to resolve and only care about the final result, while `Promise.allSettled()` method is useful when you need to know the status of all promises regardless of whether they resolved or rejected.