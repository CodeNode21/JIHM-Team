// Congratulations! Your new application key is fcb8bhZMVpHTfWJV.
// https://api.eventful.com/docs
// https://api.eventful.com/libs/javascript/



// capture button click
$("#button").on("click", function (event) {
    // this prevents from relaoding the page
    event.preventDefault()

    // This should grab the values?
    var what = $("#what").val()
    console.log(what)

    var where = $("#where").val()
    console.log(where)

    var radius = $("#radius").val()
    console.log(radius)

    var queryURL = "https://api.eventful.com/json/events/search?keywords="+ what +"&l="+ where +"&within"+ radius +"&units=miles&app_key=fcb8bhZMVpHTfWJV"
    console.log(queryURL)

    




// What is teh datatype used for? This is new?
    $.ajax({
        url:queryURL,
        method: "GET",
        dataType:'jsonp'
    }) .then(function (response){
        console.log(response.events.event[0])
        
        var eventList = $("<ul>");
        eventList.addClass("list-group");

        for (var i = 0; i < response.events.event.length; i++){
            console.log(response.events.event[i])
            // console.log(response.events[i])

            eventsToHtml(response.events.event[i])
            
        }
    });
})

function eventsToHtml(data){
    // console.log(data)

    if (data.image){
        var image = data.image.medium.url
    } else {
        var image = "https://via.placeholder.com/150"

    }
    
    var title = data.title
    var date = data.start_time
    var url = data.url
    

    var div = $("<div>");
    div.html(`<div><div class="row"><div class="col-4"><img src="${image}" alt="" class="card-image"></div><div class="col-8"><h2>"${title}"</h2><h3>"${date}"</h3><h4>"${href = url}</div></div></div>`)

    $("section").append(div);

    // add conditional statement for if null for image
}

// var queryTimeURL = "http://worldclockapi.com/api/json/est/now";
// console.log(queryTimeURL);

// // $.ajax({
//     "$id": "1",
//     "currentDateTime": "2019-06-15T10:28-04:00",
//     "utcOffset": "-04:00:00",
//     "isDayLightSavingsTime": true,
//     "dayOfTheWeek": "Saturday",
//     "timeZoneName": "Eastern Standard Time",
//     "currentFileTime": 132050681317363790,
//     "ordinalDate": "2019-166",
//     "serviceResponse": null
//     })

var span = document.getElementById('footer');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);


// API Key Name	Keys	Actions
// BoredBoard
// HMNEI5LA6MRBDVOWA3
// Show client secret and API keys
// API key details
// App product page 
// App URL

// Client secret
// 5NNULRWCDCDGGIXIH2DDUVODDSFUYGLHFUBL3RN3FWOMVUXX4R
// Private API key
// MNV7SEZGNRZKXNQXKSEF
// Public API key
// E35HN42CJGH4744CTNPX


// url base :
// 	https://www.eventbriteapi.com/v3
// GET

// /users/me/ = Shows information about the current user (i.e. you)

// /users/me/events  = Displays a list of Events you can manage
    






