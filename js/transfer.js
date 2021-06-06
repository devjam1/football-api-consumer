//getting the DOM elements
var dateTransfer = document.querySelector("#dateTransfer");
var inImage = document.querySelector("#inLogo");
var inName = document.querySelector("#inName");
var outImage = document.querySelector("#outLogo");
var outName = document.querySelector("#outName");
var typeTransfer = document.querySelector("#typeTransfer");
var valueTransfer = document.querySelector("#valueTransfer");
var transferTable = document.querySelector("#transferTable");


//the functions to create an element
function addTransferTile(data){
    //createing the tile div
    var transfertile = document.createElement('div');
    transfertile.classList.add("match-tile");

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");
    //creating the image and the text
    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML = data['teams']['out']['name'];
    var awayTileTeamLogo = document.createElement('img');
    awayTileTeamLogo.src=data['teams']['out']['logo'];
    awayTeam.appendChild(awayTileTeamLogo);
    awayTeam.appendChild(awayTileTeamName);

    //creating the home match box
    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");
    //creating the image and the text
    var homeTileTeamName = document.createElement('p');
    homeTileTeamName.innerHTML = data['teams']['in']['name'];
    var homeTileTeamLogo = document.createElement('img');
    homeTileTeamLogo.src=data['teams']['in']['logo'];
    homeTeam.appendChild(homeTileTeamLogo);
    homeTeam.appendChild(homeTileTeamName);



    //createing the score
    var dTransfer = document.createElement('p');
    var tTransfer = document.createElement('p');
    var vTransfer = document.createElement('p');

    dTransfer.innerHTML = data['date'];
    tTransfer.innerHTML = data['type'] === "Loan"? "Loan": "Sale";
    vTransfer.innerHTML = data['type'] === "Loan"? "N/A": data['type'];
  

    //append all the element to the parent
    transfertile.appendChild(awayTeam);
    transfertile.appendChild(dTransfer);
    transfertile.appendChild(tTransfer);
    transfertile.appendChild(vTransfer);
    transfertile.appendChild(homeTeam);

    transferTable.appendChild(transfertile);
}

//fetching the data

fetch("https://api-football-beta.p.rapidapi.com/transfers?player=51070", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9a6306bb0cmsh6aeab268b965874p12016bjsn2cd065f95fb2",
		"x-rapidapi-host": "api-football-beta.p.rapidapi.com"
	}
})
.then( response => { response.json().then(data => {
    var transfersList = data['response'];
    var player = transfersList[0]['player'];
    var transfers = transfersList[0]['transfers'];
    var transfer = transfersList[0]['transfers'][0];
    var teams = transfer['teams'];
    console.log(transfersList.length);
   //Now let's set our first match
   dateTransfer.innerHTML = transfer['date'];
   playerName.innerHTML = player['name'];
   typeTransfer.innerHTML = transfer['type'] === "Loan"? "Loan": "Sale";
   valueTransfer.innerHTML = transfer['type'] === "Loan"? "N/A": transfer['type'];
   inImage.src = teams['in']['logo'];
   inName.innerHTML = teams['in']['name'];
   outImage.src = teams['out']['logo'];
   outName.innerHTML = teams['out']['name'];
   //lastMatchGoal.innerHTML = goals['home']+ " - " + goals['away'];

   for(var i = 1; i<transfers.length;i++){
       addTransferTile(transfers[i]);
    }
})})
.catch(err => {
    console.log(err);
});