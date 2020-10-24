$(document).ready(function() {


  // done make api call
  // get the array 
  // display array 
  //store user inputs in lcal storage
  //display and keep searches from local storage
  //make searches clickable and bring back the data from that search
  //display 5 day forecast 
//   // display current weather above 5 day forecast
function currentWeather(response){
  var lat = response.city.coord.lat
  var lon = response.city.coord.lon
  var weather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=ce4b2cc1bf796919d588834409f184a8"

  $.ajax({
    url: weather,
    method: "GET"
  })
.then(function(response) {

  var temp = response.current.temp
  var humid = response.current.humidity
  var wind = response.current.wind_speed
  var uv = response.current.uvi
 
  $("#temp").append("Tempurature: ", temp) 
  $("#humidity").append("Humidity: ", humid + "%")
  $("#wind").append("Wind Speed: ", wind)
  $("#uvIndex").append("UV Index: ", uv)
 if(uv < 3){
   $("#uvIndex").addClass("p-3 mb-2 bg-success text-white")
 } else{
  $("#uvIndex").addClass("p-3 mb-2 bg-danger text-white")
 }


  console.log(response)
})
};


$(".btn").on("click", function(e) {
  e.preventDefault();
  searchData = $("#search").val();

  searchingCity(searchData);
  $(".clear").empty();
  console.log(searchData)
  });
   
function searchingCity(searchData){

  var city = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchData + "&appid=ce4b2cc1bf796919d588834409f184a8"
  
  $.ajax({
        url: city,
        method: "GET"
      })
       
        .then(function(response) {

      var location = response.city.name
     
      $("#city").append(location)
      
      


          //console.log(location)
          currentWeather(response);
         
          });
        
         }

        });  

     


    