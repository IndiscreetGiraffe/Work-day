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

document.getElementById("9am").addEventListener("click", function(event) {
    event.preventDefault();
    var hourNineText = timeBlockNine.innerHTML;
    if (timeBlockNine.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working")

    }
    else {
        var blockNineTask = {
            hour: "9 am",
            text: hourNineText,
        }
        localStorage.setItem("blockNineTask", JSON.stringify(blockNineTask))
    }
})

var blockNineTask = localStorage.getItem("blockNineTask");

if(blockNineTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockNineTask"));
    timeBlockNine.innerText = savedTask.text;
}
else {

}

document.getElementById("10am").addEventListener("click", function(event) {
    event.preventDefault();
    var hourTenText = timeBlockTen.innerHTML;
    if (timeBlockTen.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockTenTask = {
            hour: "10 am",
            text: hourTenText,
        }
        localStorage.setItem("blockTenTask", JSON.stringify(blockTenTask));
    }
})

var blockTenTask = localStorage.getItem("blockTenTask");

if (blockTenTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTenTask"));
    timeBlockTen.innerText = savedTask.text;
}
else {
    
}

document.getElementById("11am").addEventListener("click", function(event) {
    event.preventDefault();
    var hourElevenText = timeBlockEleven.innerHTML;
    if (timeBlockEleven.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockElevenTask = {
            hour: "11 am",
            text: hourElevenText,
        }
        localStorage.setItem("blockElevenTask", JSON.stringify(blockElevenTask));
    }
})

var blockElevenTask = localStorage.getItem("blockElevenTask");

if (blockElevenTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockElevenTask"));
    timeBlockEleven.innerText = savedTask.text;
}
else {
    
}

document.getElementById("12pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourTwelveText = timeBlockTwelve.innerHTML;
    if (timeBlockTwelve.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockTwelveTask = {
            hour: "12 pm",
            text: hourTwelveText,
        }
        localStorage.setItem("blockTwelveTask", JSON.stringify(blockTwelveTask));
    }
})

var blockTwelveTask = localStorage.getItem("blockTwelveTask");

if (blockTwelveTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTwelveTask"));
    timeBlockTwelve.innerText = savedTask.text;
}
else {
    
}

document.getElementById("1pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourOneText = timeBlockOne.innerHTML;
    if (timeBlockOne.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockOneTask = {
            hour: "1 pm",
            text: hourOneText,
        }
        localStorage.setItem("blockOneTask", JSON.stringify(blockOneTask));
    }
})

var blockOneTask = localStorage.getItem("blockOneTask");

if (blockOneTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockOneTask"));
    timeBlockOne.innerText = savedTask.text;
}
else {
    
}

document.getElementById("2pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourTwoText = timeBlockTwo.innerHTML;
    if (timeBlockTwo.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockTwoTask = {
            hour: "2 pm",
            text: hourTwoText,
        }
        localStorage.setItem("blockTwoTask", JSON.stringify(blockTwoTask));
    }
})

var blockTwoTask = localStorage.getItem("blockTwoTask");

if (blockTwoTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTwoTask"));
    timeBlockTwo.innerText = savedTask.text;
}
else {
    
}

document.getElementById("3pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourThreeText = timeBlockThree.innerHTML;
    if (timeBlockThree.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockThreeTask = {
            hour: "3 pm",
            text: hourThreeText,
        }
        localStorage.setItem("blockThreeTask", JSON.stringify(blockThreeTask));
    }
})

var blockThreeTask = localStorage.getItem("blockThreeTask");

if (blockThreeTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockThreeTask"));
    timeBlockThree.innerText = savedTask.text;
}
else {
    
}

document.getElementById("4pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourFourText = timeBlockFour.innerHTML;
    if (timeBlockFour.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockFourTask = {
            hour: "4 pm",
            text: hourFourText,
        }
        localStorage.setItem("blockFourTask", JSON.stringify(blockFourTask));
    }
})

var blockFourTask = localStorage.getItem("blockFourTask");

if (blockFourTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockFourTask"));
    timeBlockFour.innerText = savedTask.text;
}
else {
    
}

document.getElementById("5pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourFiveText = timeBlockFive.innerHTML;
    if (timeBlockFive.innerHTML === "") {
        alert("Ah ah, you have to put something down so your boss thinks you're working");
    }
    else {
        var blockFiveTask = {
            hour: "5 pm",
            text: hourFiveText,
        }
        localStorage.setItem("blockFiveTask", JSON.stringify(blockFiveTask));
    }
})

var blockFiveTask = localStorage.getItem("blockFiveTask");

if (blockFiveTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockFiveTask"));
    timeBlockFive.innerText = savedTask.text;
}
else {
    
}


    