var interval;

window.addEventListener("load", () => {
    next();
})

function setLeft(data) {
    let flightNumber = document.querySelector('#flightNumber');
    let missionName = document.querySelector('#missionName');
    let rocketName = document.querySelector('#rocketName');
    let launchSiteName = document.querySelector('#launchSiteName');
    
    flightNumber.textContent = 'Flight ' + data.flight_number;
    missionName.textContent = data.mission_name;
    rocketName.textContent = data.rocket.rocket_name;
    launchSiteName.textContent = data.launch_site.site_name;
}

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
//        console.log(data);
        
        setLeft(data);
        launched.textContent = 'Will be launched';
        var launch = data.launch_date_unix * 1000;
        
        // refresh first time
        var now = new Date().getTime();
        var diff = launch - now;

        time.querySelector('#day').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
        time.querySelector('#hour').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        time.querySelector('#minute').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        time.querySelector('#second').textContent = Math.floor((diff % (1000 * 60)) / 1000);
        
        interval = setInterval(function update() {
            now = new Date().getTime();
            diff = launch - now;

            time.querySelector('#day').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
            time.querySelector('#hour').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            time.querySelector('#minute').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            time.querySelector('#second').textContent = Math.floor((diff % (1000 * 60)) / 1000);
        }, 1000);
        
    })
}

function past() {
    clearInterval(interval);
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
        
        var dateReadable = new Date(data.launch_date_unix * 1000).toString();
        
        var date = dateReadable.substr(4,11);
        var times = dateReadable.substr(16,8);
        var gmt = dateReadable.substr(34, 11);
        var result = date + ', ' + times + ' ' + gmt;
        
//        console.log(data);
        
        setLeft(data);
        launched.textContent = 'Launched';
        launchDate.textContent = result;
    })
}