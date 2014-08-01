//Random password generator v2.0
/*

Revisions:

Can now use them as classes instead of id's, which means you can have the confirm password field show up many times
    
Passwords will include uppercase letters

Password will include symbols

In the 2.0 Update now the order is randomized so passwords are even harder to crack because of the no pattern to track

**Note if you try to use the confirm password field as password, the two results will be different.

*/

function shuffle() {
    //Getting array of alphabet
    var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '`', '~', '@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '`', '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    //Selecting one letter from array randomly
    var rand = myArray[Math.floor(Math.random() * myArray.length)];

    //Returning the randomly selected letter
    return rand;
}

function key() {
    var firstChar = shuffle();
    var secondChar = shuffle();
    var thirdChar = shuffle();
    var fourthChar = shuffle();

    //Concatinating indiviual values together as a set of 4
    var pin = firstChar+secondChar+thirdChar+fourthChar;
    
    //Returning the set of 4
    return pin;
}

function generate() {
    //Declaring sets
    var set1 = key();
    var set2 = key();
    var set3 = key();
    var set4 = key();

    //Concatinating sets together to create a 16 combination(19 Charecters total with dashes)
    var final = set1 + "-" + set2 + "-" + set3 + "-" + set4;

    //Returning long password
    return final;
}


$("#button").click(function () {
    //Setting the value of the password field with what was generated
    var $pass = $(".password").val(generate);

    //Setting was on the password field to the confirm password field
    $(".c_password").val($pass.val());

    //How to show user what was generated
    $("#getter").text($pass.val());
});
