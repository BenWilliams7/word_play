// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.

$(document).ready(function(){

  var newArray = [];

  $("form").submit(function(event){
    event.preventDefault();
    var stringToSplit = $("input#userInput").val();
    console.log(stringToSplit);
    var res = stringToSplit.split(" ");
    console.log(res);

    res.forEach(function(string){
      if(string.length >= 3){
      // alert("this word" + string + "is more than 3 chars");
      newArray.push(string);
      }
    });
    console.log("this is the new array: " + newArray);
    newArray.reverse();
    console.log("this is the reverse array: " + newArray);
  var newString = newArray.toString();
  console.log("this is the reverse stringy array: " + newString);
  var newSpacey = newString.replace(/,/g, " ");

  console.log("this is the reverse stringy spacey array: " + newSpacey);
  });
});
