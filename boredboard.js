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

    var queryURL = "http://api.eventful.com/json/events/search?keywords="+ what +"&l="+ where +"&within"+ radius +"&units=miles&app_key=fcb8bhZMVpHTfWJV"
    console.log(queryURL)


// What is teh datatype used for? This is new?
    $.ajax({
        url:queryURL,
        method: "GET",
        dataType:'jsonp'
    }) .then(function (response){
        console.log(response.events.event)
        
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
        var image = data.image.small.url
    } else {
        var image = "https://via.placeholder.com/150"

    }
    
    var title = data.title
    var date = data.start_time

    var div = $("<div>");
    div.html(`<div><div class="row"><div class="col-4"><img src="${image}" alt="" class="card-image"></div><div class="col-8"><h2>"${title}"</h2><h3>"${date}"</h3></div></div></div>`)

    $("section").append(div);

    // add conditional statement for if null for image
}






