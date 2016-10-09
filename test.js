// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  var tester = myObj.hasOwnProperty(checkProp);
  console.log(tester)
  
//   return (tester) ? myobj.checkProp : 'Not Found';
}

// Test your code by modifying these values
checkObj("gifts");