// 5. Create a Promise that rejects with "Error!" after 2 seconds. Handle the error using `.catch()`.

setTimeout(()=>{
Promise.reject('Error').catch((error)=> console.error(error))
}, 2000)