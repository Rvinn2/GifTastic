var animals = ["duck", "dog", "cow", "cat", 
];
// console.log(animals); WORKS
function renderButtons() {

  $("#buttons-view").empty();


  

for (var i = 0; i < topics.length; i++) {
    var zooAnimal = $("<button class = 'button'>");


    zooAnimal.addClass("aniGif");

    zooAnimal.attr("data-name", topics[i]);

    zooAnimal.text(topics[i]);
    $("#buttons-view").append(zooAnimal);
    }

        displayGiphy();
}

function displayGiphy() {
    $("button").on("click", function () {
  
        
        var aniGif = $(this).attr("data-name");
     
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + aniGif + "&api_key=dc6zaTOxFJmzC&limit=10";
         
         
          console.log("aniGif" + aniGif);
          
