
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
  var weather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&exclude=minutely,hourly&appid=ce4b2cc1bf796919d588834409f184a8"

  $.ajax({
    url: weather,
    method: "GET"
  })
.then(function(response) {


  $("#weatherBox").text(JSON.stringify(response.daily))
  console.log(response)
})
}


$(".btn").on("click", function(e) {
  e.preventDefault();
  searchData = $("#search").val();
  searchingCity(searchData);

  console.log(searchData)
  });
   
function searchingCity(searchData){

  var city = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchData + "&appid=ce4b2cc1bf796919d588834409f184a8"
  
  $.ajax({
        url: city,
        method: "GET"
      })
       
        .then(function(response) {
          console.log(response)
          currentWeather(response);
         
          });
        
         }

        

     


    