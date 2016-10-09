
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


// Only change code below this line
function updateRecords(id, prop, value) {

  firstTest();

  function firstTest(){

    if(prop != "tracks" && value != ""){
        console.log('a');
      collection[id][prop] = value ;
    }
    secondTest(); 

  }

  function secondTest(){

    if(prop === "tracks" && collection[id].hasOwnProperty("tracks") === false){
        console.log('b');
          console.log(collection[id].hasOwnProperty(prop));
      var array = [];
      collection[id][prop] = array;
    } 

    thirdTest();

  };

  function thirdTest(){

    if(value === ''){
          console.log('c');
      delete collection[id][prop];
    }
    fourthTest();

  } 

  function fourthTest(){
    if (prop === "tracks" && value !== '') {
          console.log('d');
      collection[id][prop].push(value);
        console.log(collection);
    }
  }

  return collection;

}



updateRecords(2468, "tracks", "Free")
// Alter values below to test your code
// updateRecords(5439, "artist", "ABBA");
// updateRecords(5439, "tracks", "Take a Chance on Me");
// updateRecords(2548, "artist", "");