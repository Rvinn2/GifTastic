$("button").on("click", function() {
    
    var animal = $(this).attr("data-animal");

    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=26hg8EUlhIJWYocCSV8vD86UmSPK8Uui" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    
    $.ajax({
      url: queryURL,
      method: "GET"
      
    })
      
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        var results = response.data;

       
        for (var i = 0; i < results.length; i++) {

          
          var animalDiv = $("<div>");

          
          var p = $("<p>").text("Rating: " + results[i].rating);

         
          var animalImage = $("<img>");
          
          animalImage.attr("src", results[i].images.fixed_height.url);

          
          animalDiv.append(p);
          animalDiv.append(animalImage);

          
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
  });






// $("#dogBtn").on("click", Function(){
  

// }








// $(document).ready(function(){
    
//     var animals = ["Lion", "Tiger", "Bear", "Dog", "Cat", "Moose"];



//     function displayAnimals(arrayToUse, classToAdd, areaToAdd){
//         $(areaToAdd).empty();

//         for (var i =0; i < arrayToUse.length; i++){

//             var a = $("<button>");
//             a.addClass(classToAdd);
//             a.attr("data-type", arrayToUse[i]);
//             a.text(arrayToUse[i]);

//             $(areaToAddTo).append(a);
//         }

//     }

//     // giphy images from API

//     $(document.onabort("click", ".animal-button", function(){
        
//         $("#images").empty();

//         $(".animal-button").removeclass("active");
//         $(this).addClass("active");

//         var type = $(this).attr("data-type");
//         var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";
//         var queryURL = "api.giphy.com/v1/gifs/search=api_key:	"

//     } ))
// })