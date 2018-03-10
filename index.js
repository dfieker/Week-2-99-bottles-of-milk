
var milk = 99;

function printVerse(num){

	var name = "bottles";
	if(num === 1) { name = "bottle"; }

	console.log(num + " " + name + " of milk on the wall");
	console.log(num + " " + name + " of milk");
	console.log("you take one down, you pass it around." );
	num--;
	console.log(num + " bottles of milk on the wall\n");
	return num;	
}

// repeat the section 99 times
while(milk > 0) {
	//  console.log("No more bottles of milk on the wall...");
	milk = printVerse(milk);
	}
