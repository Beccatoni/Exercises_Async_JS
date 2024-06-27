// 13. Using Promises, write a function that makes two API requests in parallel and logs both results.

const fetchData = async()=>{
    const data1 = (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();
    const data2 = (await fetch('https://jsonplaceholder.typicode.com/todos/2')).json();
    Promise.all([data1, data2])
     .then((results)=>{
        console.log(('Request one: ', results[0]))
        console.log(('Request two: ', results[1]))
     })
     .catch((error)=>{
        console.error('Error', error);
     })

}

fetchData()