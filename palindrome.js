//More regex required for capital letters

function palindrome(str) {
   //Initialize variables
   var cleaned, ready;

   //Clean the string, reverse it and return it
   var junkit = function(){
		// Clean string for checking with regex
		var cleaned = str.replace(/[^a-zA-Z]/g, "");

		//Reverse the string
		function reverseIt(str) {
			return str.split("").reverse().join("");
		}

		return reverseIt(cleaned);
   }; //junkit ends

  //Store junkit result in a variable
  var ready = junkit();

  // Check the cleaned and reversed string against original variable. 
  var checkit = function(val){
	  var result = (val === str) ? true : false;
	  return result;
  };

  console.log(checkit(ready));
  return checkit(ready);
}



palindrome("Hannah");
