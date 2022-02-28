var timeBlockNine = document.getElementById("hour9am");
var timeBlockTen = document.getElementById("hour10am");
var timeBlockEleven = document.getElementById("hour11am");
var timeBlockTwelve = document.getElementById("hour12pm");
var timeBlockOne = document.getElementById("hour1pm");
var timeBlockTwo = document.getElementById("hour2pm");
var timeBlockThree = document.getElementById("hour3pm");
var timeBlockFour = document.getElementById("hour4pm");
var timeBlockFive = document.getElementById("hour5pm");
var textAreaEl = document.getElementsByClassName("time-block");

// Add current day to top of calendar
var currentDay = moment().format("ddd, MMM D ");
var currentDayElement = document.getElementById("currentDay");
currentDayElement.innerText = currentDay

var currentTime = moment().format("H");

var timeBlockElements = $(".textarea");

    for (var i = 0; i< timeBlockElements.lenth; i++) {

        var elementID = timeBlockElements[i].id;

        var backgroundEl = document.getElementsById(timeBlockElements[i].id);

        $(timeBlockElements[i].id).removeClass(".past .present .future");

        if (elementID < currentTime) {
            $(backgroundEl).addClass("past");
        }
        else if (elementID > currentTime) {
            $(backgroundEl).addClass("future");
        }
        else {
            $(backgroundEl).addClass("present");
        }

    }

    