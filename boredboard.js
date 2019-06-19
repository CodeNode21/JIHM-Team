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

    




// This is the AJAX request. The 'p' at the end of jsonp is just a hack so that the request actually works. 
    $.ajax({
        url:queryURL,
        method: "GET",
        dataType:'jsonp'
    }) .then(function (response){
        console.log(response.events.event[0])
        
        var eventList = $("<ul>");
        eventList.addClass("list-group");
    
    // We use a for-loop here to create an array of the results. 
        for (var i = 0; i < response.events.event.length; i++){
            console.log(response.events.event[i])
            // console.log(response.events[i])

            // COme back to this to review
            eventsToHtml(response.events.event[i])
            
        }
    });
})

function eventsToHtml(data){
    console.log(eventsToHtml)

    if (data.image){
        var image = "http:"+data.image.medium.url
        console.log(image)
    } else {
        var image = "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"

    }
    
    var title = data.title
    var date = data.start_time
    var url = data.url 
    

var div = $("<div>");
div.html(`<div>
<div class="card" "col-4">
<div class="card-body" >
<img src="${image}" alt="" class="card-image">
</div>
<div class="col-4">
<h2>"${title}"</h2>
<h3>"${date}"</h3>
<h4><a href=${url} class="card-link">${title}</a></h4>
</div>
</div>
</div>`)



    $("section").append(div);



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
}