console.log('tomagotchi');

// 	1.	Create a repo for your tomagotchi pet
// class Tamogatchi {
// 	constructor(name, age, hunger, entertained, energy, ) {
// 		this.name = name;
// 		this.age = age;
// 		this.hunger = hunger;
// 		this.entertained = entertained;
// 		this.energy = energy;
// 	}
// 	2.	make a commit after you finish each one of the following
// 	3.	Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// 	4.	Instatiate your Tomagotchi
// 	5.	Display a character of your choice on the screen to represent your pet
// 	6.	Display the following metrics for your pet:
// 	7.	Hunger (1-10 scale)
// 	8.	Sleepiness (1-10 scale)
//	9.	Boredom (1-10 scale)
// 	10.	Age
// 	11.	Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// 	12.	Add the ability to name your pet.
// 	13.	Style the page.
// 	14.	Increase your pet's age every x minutes
// 	15.	Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// 	16.	You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// 	17.	Morph your pet at certain ages.
// 	18.	Animate your pet across the screen while it's alive.

class Tomagotchi {
	constructor(age, hunger, sleepiness, boredom){
		this.age = age;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
	}
	eat() {
		if(this.hunger > 0){
			this.hunger--;
		$('#hunger').text(`Hunger: ${this.hunger}/10`)
		}
	}
	sleep() {
		if(this.sleepiness > 0){
			this.sleepiness--;
		$('#sleepiness').text(`Sleepiness: ${this.sleepiness}/10`);
		}
	}
	play() {
		if(this.boredom > 0){
			this.boredom--;
		$('#boredom').text(`Boredom: ${this.boredom}/10`);
		}
	}
}
const name = [];
const pet = new Tomagotchi(0, 0, 0, 0);
let alive = true;
$('#age').text(`Age: ${pet.age}`);
$('#hunger').text(`Hunger: ${pet.hunger}/10`);
$('#sleepiness').text(`Energy: ${pet.sleepiness}/10`);
$('#boredom').text(`Boredom: ${pet.boredom}/10`);


$('form').on('submit', (e) => {
	e.preventDefault();
const inputName = $('#name').val();
	name.push(inputName);
	console.log(name);
	$('#name').val("");
	render();
});
const render = () => {
  $('#nameGiven').empty();
  name.forEach((item) => {    
    $('#nameGiven').text(item);
  });
}



const controls = () => {
	$('.buttons').append("<div class='row'></div>")
	$('.row').append("<button class='button' id='feed'>Nom Nom Nom!</button>")
	$('.row').append("<button class='button' id='sleep'>Go Sleepies!</button>")
	$('.row').append("<button class='button' id='play'>Fetch!</button>")
}
controls();

$(document).ready(function() {
    	$('button').on('click', function(e) {
        	console.log(e.target.innerHTML);
});
});
$('#babyFeed').on("click", () => {
		this.hunger--;
		$('#hunger').text(`Hunger: ${this.hunger}/10`)
		});

$('#feed').on("mousedown", () => {
	pet.eat()
	$('#image').attr("src", "https://i.makeagif.com/media/2-05-2016/E5AbtU.gif");
});
$('#feed').on("mouseup", () => {
	if(pet.age < 2){
	$('#image').attr("src", "https://cdn.dribbble.com/users/788229/screenshots/4992852/character_minions_whitebg-2.gif")
}	else if(pet.age >= 2 && pet.age < 5) {
     	$('#image').attr("src", "https://media2.giphy.com/media/ZrlYxeVZ0zqkU/giphy.gif");

}	else  {
		$('#image').attr("src", "https://media.giphy.com/media/Nb6H6RBnlEBiw/giphy.gif")

}
});
$('#sleep').on("mousedown", () => {
	pet.sleep()
	$('#image').attr("src", "https://i.giphy.com/media/6p024NN4kqz3a/giphy.webp")
});
$('#sleep').on("mouseup", () => {
		if(pet.age < 2){
	$('#image').attr("src", "https://cdn.dribbble.com/users/788229/screenshots/4992852/character_minions_whitebg-2.gif")
}	else if(pet.age >= 2 && pet.age < 5) {
     	$('#image').attr("src", "https://media2.giphy.com/media/ZrlYxeVZ0zqkU/giphy.gif");

}	else  {
		$('#image').attr("src", "https://media.giphy.com/media/Nb6H6RBnlEBiw/giphy.gif")

}
});

$('#play').on("mousedown", () => {
	pet.play()
   	$('#image').attr("src", "https://media1.tenor.com/images/7c72843cc6c94c286089fbe3823bd755/tenor.gif?itemid=8704515");
});
$('#play').on("mouseup", () => {
	if(pet.age < 2){
	$('#image').attr("src", "https://cdn.dribbble.com/users/788229/screenshots/4992852/character_minions_whitebg-2.gif")
}	else if(pet.age >= 2 && pet.age < 5) {
     	$('#image').attr("src", "https://media2.giphy.com/media/ZrlYxeVZ0zqkU/giphy.gif");

}	else  {
		$('#image').attr("src", "https://media.giphy.com/media/Nb6H6RBnlEBiw/giphy.gif")

}
});

// animation time

$('#image').click(function() {
	$('#image').animate({
        left: "150px"
      }, 2000)
    .animate({
    	left: "-120px"
    }, 2000,
    );
  });


// Setting up my timer

let timePassing; 
let seconds = 0;
let minutes = 0;
const secondsGoUp = () => {

    seconds++;
    $('#timer').text(`Time elapsed: ${seconds} second(s)`)
    if(seconds % 1 === 0){
    	if(pet.boredom === 10 || pet.sleepiness === 10 || pet.hunger === 10){
    		alive = false;
	        seconds = seconds;
    		alert(name + " has died!  " + name + " survived for " + seconds + " seconds, and got to age: " + pet.age);
        $('#image').attr("src", "https://media1.tenor.com/images/a03cef17f376677a64410a0875df5a90/tenor.gif?itemid=11572666");
        	    clearInterval(timePassing);
        $('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);
    	$('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);
    	$('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);
    	$('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);
    	$('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);
    	$('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);
    	$('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);
    	$('#image').animate({left: "150px"}, 2000)
    			  .animate({left: "-80px"}, 2000);

    	}
    }
    if(seconds % 2 === 0){
    	$('#baby').animate({left: "600px"}, 1000)
    			  .animate({left: "-1px"}, 1000)
    }
    if(seconds % 5 === 0){
    	$('#image')
    		.animate(
    		{left: "450px"}, 2000)
    		.animate(
    		{left: "-20px"}, 2000);
   	}
    if(seconds % 3 === 0){
    	pet.boredom++;
    	$('#boredom').text(`Boredom: ${pet.boredom}/10`);
    }
    if(seconds % 5 === 0){
    	pet.sleepiness++;
    	$('#sleepiness').text(`Sleepiness: ${pet.sleepiness}/10`)
   	}
    if(seconds % 3 === 0){
    	pet.hunger++;
    	$('#hunger').text(`Hunger: ${pet.hunger}/10`);
    }
    if(seconds % 10 === 0){
        pet.age++;
        $('#age').text(`Age: ${pet.age}`);
        $('.minutes').text(minutes);
        if(pet.age === 2){
        	alert("Your Minion has morphed!")
        	$('#image').attr("src", "https://media2.giphy.com/media/ZrlYxeVZ0zqkU/giphy.gif");
        }
         if(pet.age === 5) {
        	alert("Your Minion has morphed again!")
           	$('#image').attr("src", "https://media.giphy.com/media/Nb6H6RBnlEBiw/giphy.gif");
        } 
         if(pet.age === 6) {
       	const baby = new Tomagotchi(0, 5, 5, 5);
       		$('#baby').attr("src", "https://cdn.dribbble.com/users/788229/screenshots/4992852/character_minions_whitebg-2.gif");
       		let babyName = prompt("Your Minion had a baby!  Give it a name!", "Ike");
       		    $('#baby').animate({left: "500px"}, 1000)
    			.animate({left: "-1px"}, 1000);

	$('#babyButtons').append("<div class='babyRow'></div>")
	$('.babyRow').append("<button class='button' id='babyFeed'>Baby Hungry!</button>")
	$('.babyRow').append("<button class='button' id='babySleep'>Baby Go Nappies!</button>")
	$('.babyRow').append("<button class='button' id='babyPlay'>Baby Needs Attention!</button>")
 //   $('.statHolder').append("<div class='babyDisplay, id='babyDisplay'></div>")
 //   $('.babyDisplay').append("<ul class='babyStuff></ul>")
 	$('.babyStats').append(`<li class='babyName'>${babyName}</li>`)
    $('.babyStats').append("<li class='babyAge'></li>")
    $('.babyStats').append("<li class='babyHunger'></li>")
    $('.babyStats').append("<li class='babySleepiness'></li>")
    $('.babyStats').append("<li class='babyBoredom'></li>")

    $('.babyAge').text(`Age: ${baby.age}`);
	$('.babyHunger').text(`Hunger: ${baby.hunger}/10`);
	$('.babySleepiness').text(`Sleepiness: ${baby.sleepiness}/10`);
	$('.babyBoredom').text(`Boredom: ${baby.boredom}/10`);
	$(document).ready(function() {
    	$('button').on('click', function(e) {
  //      	console.log(e.target.innerHTML);
});
});


        }
    }
        if(seconds % 2 === 0){
    	baby.boredom++;
    }

}
//     	if(seconds % 2 === 0){
//     		baby.hunger++;
//             $('.babyHunger').text(`Hunger: ${baby.hunger}`);

//     		baby.babySleepiness++;
//     		baby.babyBoredom++;
//     	}
//       $('#babyFeed').on("click", () => {
// 	baby.eat()
// });





$('#start').click(function(){
    timePassing = setInterval(secondsGoUp, 1000);
})
$('#stop').click(function(){
    clearInterval(timePassing);
})
secondsGoUp();




