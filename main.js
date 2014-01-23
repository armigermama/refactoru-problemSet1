//Problem Set #1

//Write a function called letterCapitalize which takes a single string parameter and 
//capitalizes the first letter of each word in the string. 
//You can assume that words in the input string will be separated by only one space.

var LetterCapitalize = function (str) { 
  var capStr =[];
  for (var i in str.length) {
    if (i===0 || str[i-1]===" ") {
      capStr.push(str[i].toUpperCase());
    } else {
      capStr.push(str[i]);
    }
  }
  var capStr = capStr.join("");    
  return capStr; 
}

LetterCapitalize("I am having an almond butter and honey sandwich for breakfast.");

//Write a function called wordCount which takes a single string parameter and 
//returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). 
//You can assume that words in the input string will be separated by only one space.

var wordCount = function (str){
  var wordSplit = str.split(" ");
  return wordSplit.length;
};

wordCount("I am having an almond butter and honey sandwich for breakfast.");

//Write a function called primeTime that takes a single number parameter and 
//returns the true if the parameter is a prime number, otherwise false. 
//The range will be between 1 and 2^16.

var primeTime = function (num) {
  for (i=2; i <= Math.sqrt(num); i++){
    if (num%i === 0) {
      return false;
    }
  }
  return true;
}


