var orgStr = "";

var length = document.getElementById("length");
length.addEventListener("click", lengthFn);

var replace = document.getElementById("replace");
replace.addEventListener("click", replaceFn);

var indexOf = document.getElementById("indexOf");
indexOf.addEventListener("click", indexOfFn);

var uppercase = document.getElementById("uppercase");
uppercase.addEventListener("click", toUpperCaseFn);

var lowercase = document.getElementById("lowercase");
lowercase.addEventListener("click", toLowerCaseFn);

var repeat = document.getElementById("repeat");
repeat.addEventListener("click", repeatFn);

var match = document.getElementById("match");
match.addEventListener("click", matchFn);

var search = document.getElementById("search");
search.addEventListener("click", searchFn);

var concat = document.getElementById("concat");
concat.addEventListener("click", concatFn);

var split = document.getElementById("split");
split.addEventListener("click", splitFn);

var trim = document.getElementById("trim");
trim.addEventListener("click", trimFn);

var slice = document.getElementById("slice");
slice.addEventListener("click", sliceFn);

function lengthFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let len = orgStr.length;
    document.getElementById("resultArea").value = "The Length is : "+len;

    // document.getElementById("inputArea").value = "";
}

function replaceFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    document.getElementById("resultArea").value = orgStr;
    //This Command is not getting Activated. i.e, The Original Typed String is not Shown in the result area. Rather than that, it jumps to the Prompt command and Executes the Final ResultShow

    let replace = prompt("Enter The Word to be Replaced: ");
    let replacement = prompt("Enter the Replacement Word: ");

    let replacedStr = orgStr.replace(replace, replacement);

    document.getElementById("resultArea").value = replacedStr;
}

function indexOfFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let indexFindWord = prompt("Enter the Word to Find its Index: ");
    let indexFind = orgStr.indexOf(indexFindWord);

    document.getElementById("resultArea").value = "The Index of "+indexFindWord+" is: "+indexFind;
}

function repeatFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    orgStr = "\""+orgStr+"\" ";

    let repeatCount = prompt("Enter the Number of Times the String Should Be Repeated: ");
    let repeatedString = orgStr.repeat(repeatCount+" ");

    document.getElementById("resultArea").value = repeatedString;
}

function toUpperCaseFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let strUpper = orgStr.toUpperCase();

    document.getElementById("resultArea").value = strUpper;
}

function toLowerCaseFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let strLower = orgStr.toLowerCase();

    document.getElementById("resultArea").value = strLower;
}

function matchFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let matchWord = prompt("Enter the Word to find Match in the Original String: ");

    let foundMatch = orgStr.match(matchWord);

    document.getElementById("resultArea").value = foundMatch;
}

function searchFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let searchWord = prompt("Enter the Word to find Search in the Original String: ");

    let foundSearch = orgStr.search(searchWord);

    document.getElementById("resultArea").value = "Starting index: "+foundSearch;
}

function concatFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    concatStr = "";

    concatStr = prompt("Enter the String to be Concatenated: ");
    resultStr = orgStr.concat(" "+concatStr);

    document.getElementById("resultArea").value = resultStr;
}

function splitFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let splitStr = orgStr.split(" ");
    //The Space is the Separator. i.e, the space is where it breaks it into elements. i.e, "Oh there is a space, so they are separate elements"
    document.getElementById("resultArea").value = "["+splitStr+"]";
}

function trimFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    document.getElementById("resultArea").value = orgStr.trim();
}

function sliceFn() {
    let input = document.getElementById("inputArea").value;
    orgStr = input;

    let sliceStart = prompt("Enter the Start Value of Slicing");
    let sliceEnd = prompt("Enter the End Value of Slicing");

    let slicedStr = orgStr.slice(sliceStart, sliceEnd);

    document.getElementById("resultArea").value = "Sliced String: "+slicedStr;
}