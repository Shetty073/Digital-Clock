function getClock() {
    var date = new Date();

    var day = date.getDay();
    var hours = date.getHours();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours += "";
    var minutes = date.getMinutes() + "";
    var seconds = date.getSeconds() + "";

    var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    var clock = weekDays[day] + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("clock").innerHTML = clock;
}

getClock();
setInterval(getClock, 1000);


// Randomize background images
var images = ['text-bg-1.svg', 'text-bg-2.svg'];
var x = Math.floor(Math.random() * images.length);
document.getElementById("clock").style.backgroundImage = "url(img/" + images[x] + ")";

