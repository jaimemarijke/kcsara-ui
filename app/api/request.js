export function get(url) {
    return fetch(url, {
        credentials: 'same-origin',
        method: 'GET',
    })
   .then(response => response.json())
   .catch(error => console.log(error));
}
