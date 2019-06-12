// Congratulations! Your new application key is fcb8bhZMVpHTfWJV.
// https://api.eventful.com/docs
// https://api.eventful.com/libs/javascript/

function buildQueryURL() {
    // queryURL is the url we will use to search the API
    var queryURL = "http://api.eventful.com/json/events/?q=music&l=10018&within10&units=miles&app_key=fcb8bhZMVpHTfWJV"

    // here is the application key

    // http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future


}
// initial entries
var what = "";
var where = "";
var radius = "";

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



    $.ajax({
        url:queryURL,
        method: "GET",
        dataType:'jsonp'
    }) .then(function (response){
        console.log(response)
            
        for (var i = 0; i < response.length; i++){
            console.log(response.events[i])

    
        
        }
    });
})





console.log("123123123")