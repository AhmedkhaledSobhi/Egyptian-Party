$('#opennav').click(function(){
    let wedth=$('.sidenav').width();
    if(wedth==0)
    {
        $('.sidenav').animate({width:'250px'} ,500);
        $('#opennav').animate({marginLeft:'250px'} ,500);
    }
    else
    {
        $('.sidenav').animate({width:'0px'} ,500);
        $('#opennav').animate({marginLeft:'0px'} ,500);
    }
});

$('.closebtn').click(function(){
    $('.sidenav').animate({width:'0px'} ,500);
    $('#opennav').animate({marginLeft:'0px'} ,500);
});


$(".sidenav a").click(function () {
    let linknav = $(e.target).attr("href");
    let sectionWeb = $(linknav).offset().top;
        $("html , body").animate({scrollTop: sectionWeb}, 70000);
    }

)

////////////////   slideUp    ///////


$(document).ready(function () {
    // $("#slide div div:first").css("display", "block");
    $("#slide div h3").click(function () {
        $(this).next().slideToggle(500);
        $("#slide div div").not($(this).next()).slideUp(500);
    });
});





/////           textarea          ///

$(function () {
    var max = 100;

    $("textarea").keyup(function () {
        var length = $(this).val().length;
        console.log(length)
        var character = max - length;
        
        if (character <= 0) 
        {
            $("#char").text("your available character finished");
        } 
        else 
        {
            $("#char").text(character);
        }
    });
});



function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 5, 28);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";


    setTimeout(countdown, 1000);
}

countdown();
