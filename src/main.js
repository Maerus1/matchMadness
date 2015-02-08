//I define all my variables at the start, then get into the behaviours.
var box= document.querySelectorAll(".box");
var mainMenu = document.querySelector("#quit");
var background = document.querySelector("#background");
var timer = document.querySelector("#timer");
var score = document.querySelector("#score");
var begin = document.querySelector("#begin");
var howTo = document.querySelector("#howTo");
var credits = document.querySelector("#credits");
var back = document.querySelector("#back");
var howToTitle = document.querySelector("#howToTitle");
var title = document.querySelector("#title");
var instructions = document.querySelector("#instructions");
var enemy = document.querySelectorAll(".enemy");
var mainMusic = document.querySelector("#mainMusic");
var clickBox = document.querySelector("#clickBox");
var buttonHover = document.querySelector("#buttonHover");
var cred = document.querySelector("#cred");
var thanks = document.querySelector("#thanks");
var stage = document.querySelector("#stage");
var ex1 = document.querySelector("#ex1");
var ex2 = document.querySelector("#ex2");
var press = document.querySelector("#press");
var contain1 = document.querySelector("#contain1");
var contain2 = document.querySelector("#contain2");
var endGame1 = document.querySelector("#endGame1");
var win = document.querySelector("#win");
var lose = document.querySelector("#lose");
var restart = document.querySelector("#restart");
var test = document.querySelector("#test"); //remove this at end!
//for the pictures and their positions.
var picArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
var myScore = 0;

score.readOnly = true;
//my global variables for my counter. they need to be global to work.
var countMil = 99; 
//these booleans are for the clearInterval statement.
var countSecs = 59;
var secsZero = false;
var countMin = 1;
var minZero = false;
var extraZero = 0;
var setTime;
var clicks = 0;


/*
var clear;
var maxTime = 2000;
var numberOfSteps = 40;
var stepCounter = numberOfSteps;
var left = 0;
var maxShift = 1000;

function hello()
{
	console.log("hello");
	stepCounter--;
	if(stepCounter > 0)
	{
		left += maxShift/numberOfSteps;
		test.style.left = left + 'px';
	}
	else
	{
		clearInterval(clear);
	}
}

clear = setInterval(hello, maxTime/numberOfSteps);

*/ //study this.

//This function is for the timer
var end1 = false;
function time()
{
	countMil -= 1;
	timer.innerHTML = countMin.toString() + ":" + countSecs.toString() + ":" + countMil.toString();
	
	//these are conditions in order to make 9 look like 09 and so on for seconds and milliseconds.
	//they need to be three different if statements so they can run simultaneously
	if(countMil < 10 && countMil >= 0)
	{
		timer.innerHTML = countMin.toString() + ":" + countSecs.toString() + ":" + extraZero.toString() + countMil.toString();
	}
	
	if(countSecs < 10 && countSecs >= 0)
	{
		timer.innerHTML = countMin.toString() + ":" + extraZero.toString() + countSecs.toString() + ":" + countMil.toString();
	}
	
	if(countMil < 10 && countMil >= 0 && countSecs < 10 && countSecs >= 0)
	{
		timer.innerHTML = countMin.toString() + ":" + extraZero.toString() + countSecs.toString() + ":" + extraZero.toString() + countMil.toString();
	}
	
	if(countMil === 0)
	{
		if(minZero === true && secsZero === true && countMil === 0)
		{
			clearInterval(setTime);
			end1 = true;
			endGame();
		}
		else
		{
			countMil = 99;
			countSecs -= 1;
		}
	}
	else if(countSecs === 0)
	{
		if(minZero === true && countSecs === 0) //make sure to have a triple equals sign for all comparisons or else things go wonky. 
		{
			secsZero = true;
		}
		else
		{
			countSecs = 59;
			countMin -= 1;
		}
	}
	else if(countMin === 0)
	{
		if(countSecs < 30)
		{
			timer.style.color = "#FF0000";
		}
		minZero = true;
	}
}

setTime = setInterval(time, 10); //it repeats now... remember to keep timer variables global and keep the loops out of interval things.


//making all the buttons allow for the pointer cursor
begin.style.cursor = "pointer";
howTo.style.cursor = "pointer";
credits.style.cursor = "pointer";
back.style.cursor = "pointer";
mainMenu.style.cursor = "pointer";

//I'm keeping this outside the function so that when the user goes back and forth between
//buttons the effects of this loop do not multiply.

for(var i = 0; i < box.length; i++)
{
	box[i].style.cursor = "pointer";
}


var newArray = [];
var container = [];
var count = 0;
var values = [];
var previous = 0;
shuffle(picArray);
for(var i = 0;i < picArray.length;i++)
{
	box[i].innerHTML = picArray[i];
	box[i].style.color = "rgba(0, 0, 0, 0)";
	enemy[i].style.backgroundImage = "url('../images/enemy" + picArray[i] + ".png')";
}

function boxClicked(id, pos) //so, for some reason having two arguments here is an issue?
{
	
	if(clicks < 2){

	clicks++;
	clickBox.play();
	document.getElementById(id).style.display = "none";
	
	newArray.push(document.getElementById(id).innerHTML);
	values.push(pos);
	previous = document.getElementById(id).innerHTML;
	console.log(container);
	
	count++;
	console.log(count);
	function timer()
	{
	if(count == 2 && clicks == 2)
	{
		if(newArray[0] == previous)
		{
			myScore += 100;
			score.innerHTML = "Score: " + myScore.toString();
			console.log("Hello!");
			clicks=0;
			container.push("hi");
			endGame();
		}
		else
		{
			box[values[0]].style.display = "block";
			box[values[1]].style.display = "block";
			clicks=0;
		}
	console.log(newArray);
	newArray.splice(0, 2);
	values.splice(0, 2);
	count = 0;
	}
	}
	setTimeout(timer, 1000); //this is where things start to get complicated
	
	
	
	}
	
	
} 
	
	

//the start of the functions and event listeners for the buttons.

function endGame()
{
	if(container.length == 12)
	{
		clearInterval(setTime);
		console.log("You won the Game!!!!");
		for(var i = 0;i < box.length;i++)
		{
			box[i].disabled = true;
		}
		endGame1.style.display = "block";
		win.style.display = "block";
		restart.style.display = "block";
	}
	else if(container.length < 12 && end1 == true)
	{
		for(var i = 0;i < box.length;i++)
		{
			box[i].disabled = true;
		}
		endGame1.style.display = "block";
		lose.style.display = "block";
		restart.style.display = "block";
	}
	else
	{
	console.log("Boo.. not done yet...");
	}
}

restart.addEventListener("click", newHandler, false);

function newHandler()
{
	
	endGame1.style.display = "none";
	win.style.display = "none";
	lose.style.display = "none";
	countMil = 99;
	countSecs = 59;
	countMin = 1;
	timer.style.color = "#FFF";
	end1 = false;
	minZero = false;
	secsZero = false;
	score.innerHTML = "Score: " + "0";
	myScore = 0;
	for(var i = 0;i < box.length;i++)
		{
			box[i].disabled = false;
		}
	shuffle(picArray);
	for(var i = 0;i < picArray.length;i++)
	{
		box[i].innerHTML = picArray[i];
		box[i].style.color = "rgba(0, 0, 0, 0)";
		enemy[i].style.backgroundImage = "url('../images/enemy" + picArray[i] + ".png')";
	}
	for(var i = 0;i < box.length;i++)
	{
		box[i].style.display = "block";
	}
	startTimer();
}
begin.addEventListener("mouseover", mouseoverHandlerBegin, false);

function mouseoverHandlerBegin()
{
	buttonHover.play();
}

//randomize the enemies




function shuffle(array)
{
	var size = array.length;
	var spot;
	var random;
	
	while(size)
	{
		random = Math.floor(Math.random() * size--);
		
		spot = array[size];
		array[size] = array[random];
		array[random] = spot;
	}
	console.log(array);
	return array;
}

begin.addEventListener("click", clickHandlerBegin, false);

function clickHandlerBegin()
{

	//forces visible elements to become invisible and vice-versa.
	title.style.display = "none";
	begin.style.display = "none";
	howTo.style.display = "none";
	credits.style. display = "none";
	
	score.style.display = "block";
	timer.style.display = "block";
	mainMenu.style.display = "block";
	mainMusic.play();
	startTimer();
	
	background.style.backgroundImage = "url('../images/bg.png')";
	//I put this here to ensure that the boxes are loaded from the get-go
	
	for(var i = 0; i < box.length; i++)
	{
		box[i].style.display = "block";
		enemy[i].style.display = "block";
	}
}
//these event listeners are so the player can navigate through the pages
mainMenu.addEventListener("click", clickHandlerMenu, false);

function clickHandlerMenu()
{
	location.reload();
	//this basically makes visible elements reset to none, and the background is reset to a black style
	/*mainMusic.pause();
	background.style.backgroundImage = "url('../images/main_menu_bg.jpg')";
	mainMenu.style.display = "none";
	timer.style.display = "none";
	score.style.display = "none";
	title.style.display = "block";
	begin.style.display = "block";
	howTo.style.display = "block";
	credits.style.display = "block";

	for(var i = 0; i < box.length; i++)
	{
		box[i].style.display="none";
		enemy[i].style.display="none";
	}*/
}

howTo.addEventListener("mouseover", mouseoverHandlerHowTo, false);

function mouseoverHandlerHowTo()
{
	buttonHover.play();
}

howTo.addEventListener("click", clickHandlerHowTo, false);

function clickHandlerHowTo()
{
	title.style.display = "none";
	begin.style.display = "none";
	credits.style.display = "none";
	howTo.style.display = "none";
	back.style.display = "block";
	howToTitle.style.display = "block";
	instructions.style.display = "block";
	ex1.style.display = "block";
	ex2.style.display = "block";
	press.style.display = "block";
	contain1.style.display = "block";
}
//this is specifically for the boxes in the help menu.
var changer = true;
function change(id)
{
	if(changer)
	{
		id.style.backgroundImage = "url('../images/enemy1.png')";
		changer = false;
	}
	else if(changer == false)
	{
		id.style.backgroundImage = "url('../images/box.png')";
		changer = true;
	}
}
var changer1 = true;
function change1(id)
{
	
	if(changer1)
	{
		id.style.backgroundImage = "url('../images/enemy1.png')";
		changer1 = false;
	}
	else if(changer1 == false)
	{
		id.style.backgroundImage = "url('../images/box.png')";
		changer1 = true;
	}
}

back.addEventListener("click", clickHandlerBack, false);

function clickHandlerBack()
{
	title.style.display = "block";
	back.style.display = "none";
	begin.style.display = "block";
	howTo.style.display = "block";
	credits.style.display = "block";
	howToTitle.style.display = "none";
	instructions.style.display = "none";
	cred.style.display = "none";
	thanks.style.display = "none";
	ex1.style.display = "none";
	ex2.style.display = "none";
	press.style.display = "none";
	ex1.style.backgroundImage = "url('../images/box.png')";
	ex2.style.backgroundImage = "url('../images/box.png')";
	contain1.style.display = "none";
	contain2.style.display = "none";
	changer = true;
	changer1 = true;
}

credits.addEventListener("mouseover", mouseoverHandlerCredits, false);

function mouseoverHandlerCredits()
{
	buttonHover.play();
}

credits.addEventListener("click", clickHandlerCredits, false);

function clickHandlerCredits()
{
	title.style.display = "none";
	begin.style.display = "none";
	howTo.style.display = "none";
	credits.style.display = "none";
	back.style.display = "block";
	cred.style.display = "block";
	thanks.style.display = "block";
	contain2.style.display = "block";
}
