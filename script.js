// Exploring the 'Response' object returned by the 'fetch' API.
// You can run this in terminal, but running in web console may be more clear.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl)
    .then(response => {
        // console.log(response); // Start by only using this to see Response and comment out the following four logs.
        console.log('Status: ' + response.status);
        console.log('ok: ' + response.ok);
        console.log('Status Text: ' + response.statusText);
        console.log('Headers: ' + response.headers);
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error: ' + error);
    })
// When logged to console, you should see the four response properties at the top followed by the json file.