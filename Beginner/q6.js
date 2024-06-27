// Using the Fetch API, write a function to fetch data from an API endpoint and log the response to the console.

function fetchData(url){
    return fetch(url);
}

fetchData('https://jsonplaceholder.typicode.com/todos/')
.then(data=> console.log(data))