// 8. Create a simple callback function that multiplies two numbers and then calls a callback with the result.

const multiply = (a, b, callback) => {
   const result = a * b;
   callback(result)
}

const logger = (info) => console.log(info);
multiply(3,5, logger);