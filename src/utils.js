console.log("utils.js is running.");

export const square = (x) => x * x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;
//export default can't come before a variable declaration like const subtract.

// export { square, add, subtract as default };

// exports - a single default export and as many named exports as we like.

