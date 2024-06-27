// 7. Write a JavaScript function that fetches data from an  API and retries the request a specified number of times if it fails.


const fetchDataRetry = async (url, retries) => {
    let attempts = 0;
    while (attempts <= retries) {
        try {
            const data = await fetch(url);

            if (!data.ok) {
                throw new Error(`Error fetching! Status: ${data.status}`);
            }
            return await data.json();
        } catch (error) {
            attempts++
            if (attempts > retries) {
                console.error('The attempts are over, refresh please');
                throw error
            }
            console.log(`Retrying (${attempts}/${retries})`);
        }
    }
}


fetchDataRetry('https://jsonplaceholder.typicode.com/posts/10000', 3)
    .then((data) => console.log(data))
    .catch(error => console.error(error))