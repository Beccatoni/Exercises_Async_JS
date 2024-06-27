//10. Create a Promise that resolves with "Data fetched" after 1 second and log the message when it resolves.

const promise = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve('Data fetched')
    }, 1000)
})
promise.then((data)=> console.log(data))