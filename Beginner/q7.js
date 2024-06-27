// 7. Write an asynchronous function using `async`/`await` to fetch and log data from an API.

const fetchData = async(url) =>{
    const data =  await fetch(url);
    console.log(data);

}

fetchData('https://jsonplaceholder.typicode.com/todos/');