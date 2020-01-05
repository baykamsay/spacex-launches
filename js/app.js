window.addEventListener("load", () => {
//    let missionName = document.querySelector('#date');
//    const next = 'https://api.spacexdata.com/v3/launches/next';
//    const latest = 'https://api.spacexdata.com/v3/launches/latest';
//    
//    fetch(latest)
//    .then(response => {
//        return response.json();
//    })
//    .then(data => {
//        console.log(data);
//        missionName.textContent = data.mission_name;
//    })
    
    next();
})

function next() {
    const api = 'https://api.spacexdata.com/v3/launches/next';
    
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
}

function past() {
    const api = 'https://api.spacexdata.com/v3/launches/latest';
    
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
}