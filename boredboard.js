// Congratulations! Your new application key is fcb8bhZMVpHTfWJV.
// https://api.eventful.com/docs
// https://api.eventful.com/libs/javascript/

function buildQueryURL() {
    // queryURL is the url we will use to search the API
    var queryURL = "http://api.eventful.com/json/events/?q=music&l=10018&within10&units=miles&app_key=fcb8bhZMVpHTfWJV"

    // here is the application key

    // http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future


}

var what = $("#what")

var where = $("#where")

var radius = $("#radius")

// var queryURL = "http://api.eventful.com/json/events/search?keywords="+ what +"&l="+ where +"&within"+ radius +"&units=miles&app_key=fcb8bhZMVpHTfWJV"

var queryURL = "http://api.eventful.com/json/events/search?keywords=music&l=10036&within1&units=miles&app_key=fcb8bhZMVpHTfWJV"


$.ajax({
    url:queryURL,
    method: "GET",
    dataType:'jsonp'
}) .then(function (response){
    console.log(response)
        
    for (var i = 0; i < response.length; i++){
        console.log(response.events.event[i])
    }
});

console.log("123123123")