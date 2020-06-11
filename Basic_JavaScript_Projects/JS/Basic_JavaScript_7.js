function get_Date() {
    if  (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Vehicle(Make, Model, Year) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
}
var Jack = new Vehicle("Dodge", "Viper", 2020);
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019);
var Erik = new Vehicle("Ford", "Pinto", 1971);
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "  + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_Function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

