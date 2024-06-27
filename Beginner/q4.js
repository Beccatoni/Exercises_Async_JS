// 4. Write a Promise that resolves with "Success!" after 1 second. Log the result to the console.

setTimeout(()=>{
    Promise.resolve('Success').then((data)=>{
     console.log(data)
})}, 1000)