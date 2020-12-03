let rockets:any = [];
let thrusters:any = []; 

//rocket 1//
let rocket1 = new Rocket("32WESSDS"); 
rockets.push(rocket1); 
let thruster1 = new Thruster("Alfa", 10); 
let thruster2 = new Thruster("Alfa", 30);
let thruster3 = new Thruster("Alfa", 80);
rocket1.setThrusters = [thruster1, thruster2, thruster3]; 
thrusters.push(thruster1, thruster2, thruster3);  
console.log(rockets);
console.log(thrusters);
// rocket 2//
let rocket2 = new Rocket("LDSFJA32"); 
rockets.push(rocket2); 
let thruster4 = new Thruster("Beta", 30); 
let thruster5 = new Thruster("Alfa", 40);
let thruster6 = new Thruster("Alfa", 50);
let thruster7 = new Thruster("Alfa", 50); 
let thruster8 = new Thruster("Alfa", 30);
let thruster9 = new Thruster("Alfa", 10);
rocket2.setThrusters = [thruster4, thruster5, thruster6, thruster7,thruster8,thruster9]; 
thrusters.push(thruster4, thruster5, thruster6, thruster7,thruster8,thruster9);  
console.log(rockets);
console.log(thrusters);

for (let rocket of rockets){
    
    console.log(rocket.thrusters); 
    
}

function createRocket(){
    let code = (document.getElementById("code") as HTMLInputElement).value; 
    let exist = false; 
    let newRocket; 

    for (let rocket of rockets){
        if (rocket.getCode == code){
            exist = true;
            alert("The rocket already exists"); 
        }
    }
  
    if(!exist){
        newRocket = new Rocket(code);
        rockets.push(newRocket); 
        console.log(rockets);
        (document.getElementById("rocketInfo")as HTMLElement).innerHTML = rockets.toString(); 
    }
   (document.getElementById("code") as HTMLInputElement).value = "";
}

function addThruster(){
    let code = (document.getElementById("codeRocket") as HTMLInputElement).value; 
    let model = (document.getElementById("model") as HTMLInputElement).value; 
    let maxPower = (document.getElementById("maxPower") as HTMLInputElement).value; 
    let exist = false; 
    let newThruster; 

    for (let rocket of rockets){
        if (rocket.code == code){
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
            // (document.getElementById("rocketInfo")as HTMLElement).innerHTML = rocket.toString(); 
        }
    }
    
    if(!exist){
            alert("The rocket does not exist"); 
        }
}

function accRocket(){
    let code = (document.getElementById("codeRocket1") as HTMLInputElement).value; 
    let exist = false; 

    for (let rocket of rockets){
        if (rocket.code == code){
            exist = true;
            rocket.speedUp();
            (document.getElementById("rocketInfo")as HTMLElement).innerHTML = "Current total power rocket: " + rocket.CurrentTotalPower();
            console.log(thrusters); 
            console.log(rocket.thrusters);
            console.log(rocket.toString());
        }
    }
    if(!exist){
            alert("The rocket does not exist"); 
        }
    
    (document.getElementById("codeRocket1") as HTMLInputElement).value = "";
}

function brakeRocket(){
    let code = (document.getElementById("codeRocket1") as HTMLInputElement).value; 
    let exist = false; 

    for (let rocket of rockets){
        if (rocket.code == code){
            exist = true;
            rocket.speedDown();
            (document.getElementById("rocketInfo")as HTMLElement).innerHTML = "Current total power rocket: " + rocket.code + ": " + rocket.CurrentTotalPower();
            console.log(thrusters); 
            console.log(rocket.thrusters);
            console.log(rocket.toString());
        }
    }
    if(!exist){
            alert("The rocket does not exist"); 
        }
    (document.getElementById("codeRocket1") as HTMLInputElement).value = "";

}
function printRockets(){
    for (let rocket of rockets){
        rocket.toString(); 
    }
}

