var teamName =    document.querySelector("#teamName");
var teamCountry = document.querySelector("#teamCountry");
var teamFounded = document.querySelector("#teamFounded");
var teamLogo  =   document.querySelector("#teamLogo");
var teamStadium = document.querySelector("#teamStadium");
var stadAddress = document.querySelector("#stadAddress");
var stadCity =    document.querySelector("#stadCity");
var stadCapacity = document.querySelector("#stadCapacity");
var stadImg = document.querySelector("#stadImg");

//the functions to create an element
function addMatchTile(data){
    //createing the tile div
    var matchtile = document.createElement('div');
    matchtile.classList.add("match-tile");

    //creating the home match box
    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");
    //creating the image and the text
    var homeTileTeamName = document.createElement('p');
    homeTileTeamName.innerHTML = data['teams']['home']['name'];
    var homeTileTeamLogo = document.createElement('img');
    homeTileTeamLogo.src=data['teams']['home']['logo'];
    homeTeam.appendChild(homeTileTeamLogo);
    homeTeam.appendChild(homeTileTeamName);

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");
    //creating the image and the text
    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML = data['teams']['away']['name'];
    var awayTileTeamLogo = document.createElement('img');
    awayTileTeamLogo.src=data['teams']['away']['logo'];
    awayTeam.appendChild(awayTileTeamLogo);
    awayTeam.appendChild(awayTileTeamName);

    //createing the score
    var score = document.createElement('p');
    score.innerHTML = data['goals']['home'] + " - " + data['goals']['away'];

    //append all the element to the parent
    matchtile.appendChild(homeTeam);
    matchtile.appendChild(score);
    matchtile.appendChild(awayTeam);

    matchTable.appendChild(matchtile);
}


var response = '{"get":"teams","parameters":{"name":"AC Milan"},"errors":[],"results":1,"paging":{"current":1,"total":1},"response":[{"team":{"id":489,"name":"AC Milan","country":"Italy","founded":1899,"national":false,"logo":"https://media.api-sports.io/football/teams/489.png"},"venue":{"id":907,"name":"Stadio Giuseppe Meazza","address":"Via Piccolomini 5","city":"Milano","capacity":80018,"surface":"grass","image":"https://media.api-sports.io/football/venues/907.png"}}]}'

function convert(response) {
    var data = JSON.parse(response);
    console.log(data);
    var resp = data['response'];
    var team = resp[0]['team'];
    var venue = resp[0]['venue'];
   //Now let's set our first match
   teamName.innerHTML = team['name'];
   teamCountry.innerHTML = team['country'];
   teamFounded.innerHTML = team['founded'];
   teamLogo.src = team['logo'];
   teamStadium.innerHTML = venue['name'];
   stadAddress.innerHTML = venue['address'];
   stadCity.innerHTML = venue['city'];
   stadCapacity.innerHTML = venue['capacity'];
   stadImg.src= venue['image'];
};

convert(response);
//fetching the data
/*fetch("https://api-football-beta.p.rapidapi.com/fixtures/lineups", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9a6306bb0cmsh6aeab268b965874p12016bjsn2cd065f95fb2",
		"x-rapidapi-host": "api-football-beta.p.rapidapi.com"
	}
})
.then( response => {response.json().then(data => {
    var matchesList = data['response'];
    var fixture = matchesList[0]['fixture'];
    var goals = matchesList[0]['goals'];
    var teams = matchesList[0]['teams'];
    console.log(matchesList.length);
   //Now let's set our first match
   elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
   homeTeamImage.src = teams['home']['logo'];
   homeTeamName.innerHTML = teams['home']['name'];
   awayTeamImage.src = teams['away']['logo'];
   awayTeamName.innerHTML = teams['away']['name'];
   lastMatchGoal.innerHTML = goals['home']+ " - " + goals['away'];

   for(var i = 1; i<matchesList.length;i++){
       addMatchTile(matchesList[i]);
   }

})})
.catch(err => {
    console.log(err);
});*/