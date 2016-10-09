// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
 
// Only change code below this line
function updateRecords(id, prop, value) {
   if(value !== ""){
     var checkUndefined = (typeof collection[id][prop] === "undefined") ? collection[id][prop] = [] : '';
      /* isTrack checks if our collection has property "tracks" then pushes the new track "value" to the collection and if not tracks set its property to a value */
     var isTrack = prop === "tracks" ? collection[id][prop].push(value) : collection[id][prop] = value;
   }
   else{
     delete collection[id][prop];
   }
 return collection;
}

updateRecords(5439, "tracks", "Take a Chance on Me");
console.log(isTrack);
 
