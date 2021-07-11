// 
$(document).ready(function () {
    $("#currentDay").text(moment ().format("MMMM Do YYYY, hh:mm:ss a"));
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, text);
    })

    // keeps local storage track of each seperate time divs/slots
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // function keeps track of time while also adding and removing classes so that past time-blocks are gray, present time-blocks are red, and future time-blocks are green
    function hourtracker () {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");  
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future"); 
            }
        })
    }

    // function for keeping the time running on the page
    function runningTime () {
        $("#currentDay").text(moment ().format("MMMM Do YYYY, hh:mm:ss a"))
    }

    setInterval(runningTime, 1000);
    hourtracker();
}) 