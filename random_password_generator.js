//Random password generator v1.1
/*
    Revisions:
    Can now use them as classes instead of id's which meand you can have the confirm password field show up many times
    
    Note if you try to use the confirm password field as password,             the two results will be different
*/

function shuffle() {
    //Getting array of alphabet
    var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //Selecting one letter from array randomly
    var rand = myArray[Math.floor(Math.random() * myArray.length)];

    //Returning the randomly selected letter
    return rand;
}

function key() {
    //Chosing the numbers one by one
    var firstNumber = Math.floor((Math.random() * 9) + 1);
    var secondNumber = Math.floor((Math.random() * 9) + 1);

    //Chosing the letters one by one
    var firstLetter = shuffle();
    var secondLetter = shuffle();

    //Concatinating indiviual values together as a set of 4
    var pin = firstNumber+firstLetter+secondNumber+secondLetter;
    
    //Returning the set of 4
    return pin;
}

function generate() {
    //Declaring sets
    var text1 = key();
    var text2 = key();
    var text3 = key();
    var text4 = key();

    //Concatinating sets together to create a 16 combination(19 Charecters toral with dashes)
    var final = text1 + "-" + text2 + "-" + text3 + "-" + text4;

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
