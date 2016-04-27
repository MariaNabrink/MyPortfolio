
//simple js to reduce text in html 

var json = {
"works" : [
      {
        "NerasEgg" : "This project is a 2D game made in Unity that I created in school. You play as the dragon Nera who needs to save her egg from the evil humans. Shoot them with your fire ball!"
      },
      {
        "MeteoriteImpactVisualizer" : "I created this as a project to learn more about API's. I thought it would be a cool idea to use NASA's API to point out at google maps where meteorites has landed.",
      },
      {
        "HorrorQuiz" : "This project is a quiz game I made at school to learn more about android. You need to answer a couple of questions about the 80's horror movies. You need to answer quick and the right answer or you won't make it. It's super fun!"
      },
      {
        "MyMoviesProject" : "This is a nice web site I did at school to learn more about safety. You can log in to My Movies with a 3 steps authenticator from google. At the site you can save your favorite movies to your list."
      }
    ]
}

$("#neras-egg").append("<p>" + json.works[0].NerasEgg + "</p>");
$("#meteorite").append("<p>" + json.works[1].MeteoriteImpactVisualizer + "</p>");
$("#horror-quiz").append("<p>" + json.works[2].HorrorQuiz + "</p>");
$("#my-movies").append("<p>" + json.works[3].MyMoviesProject + "</p>");
