window.addEventListener("load", () => {
    let date;
    const latest = 'https://api.spacexdata.com/v3/launches/latest';
    
    fetch(latest)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
})