// 9. Write a function that makes an asynchronous request using `XMLHttpRequest` and logs the response.

const getData = (url) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.status >= 200 && request.status <= 300) {
            console.log(request.responseText);
        }
    }

    request.send();
}

getData('https://jsonplaceholder.typicode.com/todos/');

// when enclosed in a function it causes problems