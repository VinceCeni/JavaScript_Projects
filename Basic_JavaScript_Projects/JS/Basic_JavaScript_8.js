function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function myFunction() {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("demo").innerHTML = res;
}

function myFunction2() {
    var str = "Mr. Blue has a blue house";
    var n = str.search("blue");
    document.getElementById("demo2").innerHTML = n;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}


function precision_Method_2() {
    var Y = 10000.11111111;
    document.getElementById("Precision2").innerHTML = Y.toPrecision(10);
}

function myFunction3() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("demo3").innerHTML = n;
}

function myFunction4() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("demo4").innerHTML = res;
}