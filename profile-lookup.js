//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];



function search(firstName, prop){
	var myArray = contacts;
	var nameTest = false
	var propTest = false;
	theValue = null;

	//Consecutive forloops for the nameTest and propTest
    for (var i=0; i < myArray.length; i++) {


        if(myArray[i].firstName === firstName && myArray[i].hasOwnProperty(prop)) {
            theValue = myArray[i][prop];
            break;
        } else {
        	theValue = 'No such Contact';
        }

		if (myArray[i].hasOwnProperty(prop) === false) {
			theValue = 'No such property';	
		} 

    }

    // Final conditional, if both tests are true we will return the value of the prop.);
    return theValue;
}


console.log(search('Akiraz', 'likes'));







