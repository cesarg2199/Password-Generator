//Random password generator v2.0

function shuffle() {
    //Getting array of alphabet
    var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C',
        'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
        'P', 'Q', 'R', 'S', 'T', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '@',
        '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '`', '~', '@',
        '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '`', '~', '1',
        '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5',
        '6', '7', '8', '9'];

    //Selecting one letter from array randomly
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function key() {
    var firstChar = shuffle();
    var secondChar = shuffle();
    var thirdChar = shuffle();
    var fourthChar = shuffle();

    //Concatinating indiviual values together as a set of 4
    return firstChar+secondChar+thirdChar+fourthChar;
}

function generate() {
    //Declaring sets
    var set1 = key();
    var set2 = key();
    var set3 = key();
    var set4 = key();

    //Concatinating sets together to create a 16 combination(19 Charecters total with dashes)
    return set1 + "-" + set2 + "-" + set3 + "-" + set4;
}

function randomPassword()
{
    var generated = generate();

    document.getElementById("password").value = generated;
    document.getElementById("confirm").value = generated;
    document.getElementById("getter").innerHTML = generated;
}
