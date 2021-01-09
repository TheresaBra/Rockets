"use strict";
var rockets = [];
var thrusters = [];
//rocket 1//
var rocket1 = new Rocket("32WESSDS");
rockets.push(rocket1);
var thruster1 = new Thruster("Alfa", 10);
var thruster2 = new Thruster("Alfa", 30);
var thruster3 = new Thruster("Alfa", 80);
rocket1.setThrusters = [thruster1, thruster2, thruster3];
thrusters.push(thruster1, thruster2, thruster3);
console.log(rockets);
console.log(thrusters);
// rocket 2//
var rocket2 = new Rocket("LDSFJA32");
rockets.push(rocket2);
var thruster4 = new Thruster("Beta", 30);
var thruster5 = new Thruster("Alfa", 40);
var thruster6 = new Thruster("Alfa", 50);
var thruster7 = new Thruster("Alfa", 50);
var thruster8 = new Thruster("Alfa", 30);
var thruster9 = new Thruster("Alfa", 10);
rocket2.setThrusters = [thruster4, thruster5, thruster6, thruster7, thruster8, thruster9];
thrusters.push(thruster4, thruster5, thruster6, thruster7, thruster8, thruster9);
console.log(rockets);
console.log(thrusters);
for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
    var rocket = rockets_1[_i];
    console.log(rocket.thrusters);
}
function createRocket() {
    var code = document.getElementById("code").value;
    var exist = false;
    var newRocket;
    if (code == "") {
        alert("Please enter code");
    }
    else {
        for (var _i = 0, rockets_2 = rockets; _i < rockets_2.length; _i++) {
            var rocket = rockets_2[_i];
            if (rocket.getCode == code) {
                exist = true;
                alert("The rocket already exists");
            }
        }
        if (!exist) {
            newRocket = new Rocket(code);
            rockets.push(newRocket);
            console.log(rockets);
            document.getElementById("output").innerHTML = rockets.join("").toString();
        }
        document.getElementById("code").value = "";
    }
}
function addThruster() {
    var code = document.getElementById("codeRocket").value;
    var model = document.getElementById("model").value;
    var maxPower = document.getElementById("maxPower").value;
    var exist = false;
    var newThruster;
    for (var _i = 0, rockets_3 = rockets; _i < rockets_3.length; _i++) {
        var rocket = rockets_3[_i];
        if (rocket.code == code) {
            exist = true;
            newThruster = new Thruster(model, parseInt(maxPower));
            rocket.thrusters.push(newThruster);
            thrusters.push(newThruster);
            // rocket.setThrusters = [new Thruster(model, parseInt(maxPower))];
            // rocket.thrusters.push(newThruster); 
            console.log(thrusters);
            console.log(rocket.thrusters);
            // console.log(rocket.CurrentTotalPower());
            // console.log(rocket.possibleMaxPowerAllThruster());
            console.log(rocket.toString());
        }
    }
    if (!exist) {
        alert("The rocket does not exist");
    }
}
function accRocket() {
    var code = document.getElementById("codeRocket1").value;
    var exist = false;
    for (var _i = 0, rockets_4 = rockets; _i < rockets_4.length; _i++) {
        var rocket = rockets_4[_i];
        if (rocket.code == code) {
            exist = true;
            rocket.speedUp();
            document.getElementById("output").innerHTML = "Current total power rocket: " + rocket.CurrentTotalPower();
            console.log(thrusters);
            console.log(rocket.thrusters);
            console.log(rocket.toString());
        }
    }
    if (!exist) {
        alert("The rocket does not exist");
    }
    document.getElementById("codeRocket1").value = "";
}
function brakeRocket() {
    var code = document.getElementById("codeRocket1").value;
    var exist = false;
    for (var _i = 0, rockets_5 = rockets; _i < rockets_5.length; _i++) {
        var rocket = rockets_5[_i];
        if (rocket.code == code) {
            exist = true;
            rocket.speedDown();
            document.getElementById("output").innerHTML = "Current total power rocket: " + rocket.code + ": " + rocket.CurrentTotalPower();
            console.log(thrusters);
            console.log(rocket.thrusters);
            console.log(rocket.toString());
        }
    }
    if (!exist) {
        alert("The rocket does not exist");
    }
    document.getElementById("codeRocket1").value = "";
}
function printRockets() {
    var content = "";
    for (var _i = 0, rockets_6 = rockets; _i < rockets_6.length; _i++) {
        var rocket = rockets_6[_i];
        content += rocket.toString();
    }
    document.getElementById("output").innerHTML = content;
}
