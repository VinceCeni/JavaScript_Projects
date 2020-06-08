window.alert(Math.random());

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 = 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 and you have a remainder of: " + simple_Math;
}

function increment() {
    var X = 5;
    X++;
    document.getElementById("Math6").innerHTML = "X++ = " + X;
}

function decrement() {
    var Y = 5;
    Y--;
    document.getElementById("Math7").innerHTML = "Y-- = " + Y;
}

function negation_Operator() {
    var Z = 10;
    document.getElementById("Math8").innerHTML = -Z;
}

document.getElementById("demo").innerHTML = Math.PI;