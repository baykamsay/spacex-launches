# spacex-launches
A simple SPA for displaying the next and the previous SpaceX Launch.

In this project, I made a simple website using just HTML, CSS, and JavaScript. This website uses the SpaceX API: https://github.com/r-spacex/SpaceX-API and shows the countdown to the next rocket launch and the time of the last rocket launch depending on the choice of the user. In the project, I did not use any external frameworks or libraries.
 
I faced two main challenges making the project. The first challenge was to change the card at the center of the screen depending on which button is clicked. This was caused because I chose not to use any external libraries, if I had used jQuery or a similar library it would not have been a problem. I solved this problem by changing the inner HTML of a div element inside the card. The other challenge was showing the time of the rocket launch as the page can be viewed from different timezones and it should display the correct result from anywhere in the world. I used a date object to solve this problem as it can automatically convert the timezone to the local one.

I learned how to change the inner HTML of an element through JavaScript, learned about the date class in JavaScript, and learned how to make a countdown timer for a website in the project. It was slightly challenging yet fun. If I had more time, I would have made the website prettier and would have used jQuery for a cleaner implementation. Yet it was my finals week and my time was limited. I believe that I did the best I could with the limited time I had.
