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
    let launched = document.querySelector('#launched');
    let time = document.querySelector('.time');
    
    const api = 'https://api.spacexdata.com/v3/launches/next';
    const times =  `<div class="days">
                        <p class="num" id="day">-</p>
                        <p>Days</p>
                    </div>
                    <div class="hours">
                        <p class="num" id="hour">-</p>
                        <p>Hours</p>
                    </div>
                    <div class="minutes">
                        <p class="num" id="minute">-</p>
                        <p>Minutes</p>
                    </div>
                    <div class="seconds">
                        <p class="num" id="second">-</p>
                        <p>Seconds</p>
                    </div>`
    
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        time.innerHTML = times;
        console.log(data);
        
        launched.textContent = 'Will be launched';
        var launch = data.launch_date_unix * 1000;
        
        // doesnt work
                    var now = new Date().getTime();
            var diff = launch - now;

            time.querySelector('#day').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
            time.querySelector('#hour').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            time.querySelector('#minute').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            time.querySelector('#second').textContent = Math.floor((diff % (1000 * 60)) / 1000);
        // delete this
        setInterval(function update() {
            var now = new Date().getTime();
            var diff = launch - now;

            time.querySelector('#day').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
            time.querySelector('#hour').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            time.querySelector('#minute').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            time.querySelector('#second').textContent = Math.floor((diff % (1000 * 60)) / 1000);
        }, 1000);
        
    })
}

//function update(launch, time) {
//    var now = new Date().getTime();
//    var diff = launch - now;
//
//    time.querySelector('#day').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
//    time.querySelector('#hour').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    time.querySelector('#minute').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//    time.querySelector('#second').textContent = Math.floor((diff % (1000 * 60)) / 1000);
//}

function past() {
    let launched = document.querySelector('#launched');
    let time = document.querySelector('.time');
    
    const api = 'https://api.spacexdata.com/v3/launches/latest';

    
    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        time.innerHTML = '<p id="launchDate"></p>';
        let launchDate = document.querySelector('#launchDate');
        
        var dateReadable = new Date(data.launch_date_unix * 1000);
        
        console.log(data);
        launched.textContent = 'Launched';
        
        launchDate.textContent = dateReadable;
    })
}