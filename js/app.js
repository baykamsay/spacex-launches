window.addEventListener("load", () => {
    let missionName = document.querySelector('#date');
    const latest = 'https://api.spacexdata.com/v3/launches/latest';
    
    fetch(latest)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        missionName.textContent = data.mission_name;
    })
})