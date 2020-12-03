
class Rocket {
    private static rockets:Rocket[] = []; 
    private thrusters:Thruster[] =[]; 
    // private nrThrusters:number = 0; 
    private powerRocket:number = 0;
    private code:string;
     
    
    constructor(code:string){
        this.code = code;
        this.thrusters = []; 
        // !code || code.trim().length === 0
		Rocket.rockets.push(this); 
    }

    //setters// 
    // set setNrThrusters (nrThrusters:number){
    //     this.nrThrusters = nrThrusters;
    // }
   
    set setPowerRocket(powerRocket:number){
        this.powerRocket = powerRocket;
    }
    set setThrusters(thrusters:Thruster[]){
        this.thrusters = thrusters; 
    }
    //getters//
    // get getNrThrusters(){
    //     return this.nrThrusters;
    // }
    get getCode():string{
        return this.code; 
    }
    get getPowerRocket(){
        return this.powerRocket;
    }
    get getRockets():Rocket[]{
        return Rocket.rockets;
    }
    
    toString(){
        for (let rocket of rockets){

            return (
                    "Code: " + this.getCode + "; " +
                    "Number of thrusters: " + rocket.thrusters.length + "; " +
                    "Possible max. power rocket: " + rocket.possibleMaxPowerAllThruster() + "; " +
                    "Current total power rocket: " + rocket.CurrentTotalPower()
                ); 
        }
    }

    possibleMaxPowerAllThruster() {
        let showMaxPower =0;
                for (let thruster of this.thrusters) {
            showMaxPower += (thruster.getMaxPower);
        }
    //    showMaxPower = showMaxPower.substr(showMaxPower.length, - 2);
		
		return showMaxPower;
	}

	CurrentTotalPower(): number {
		let sum: number = 0;
		for (let thruster of this.thrusters) {
			sum += thruster.getCurrentPowerThruster;
		}
		return sum;
	}

	speedUp() {
        let increasePower = 10; 
		for (let thruster of this.thrusters) {
			if (thruster.getCurrentPowerThruster + 10 <= thruster.getMaxPower){
                thruster.setCurrentPowerThruster = thruster.getCurrentPowerThruster + increasePower;
            }
		}
	}

	speedDown() {
        let loweringPower = 10;
		for (let thruster of this.thrusters) {
			if (thruster.getCurrentPowerThruster > 0){
                thruster.setCurrentPowerThruster = thruster.getCurrentPowerThruster - loweringPower;
            }
		}
	}
        
}


class Thruster {

    private minThrust:number = 0; 
    private currentPowerThruster:number = 0; 
    maxPower:number; 
    model; 

    public constructor(model:string, maxPower:number){ //
        this.maxPower = maxPower;
        this.model = model;
    }
    set setCurrentPowerThruster(currentPowerThruster:number){
        this.currentPowerThruster=currentPowerThruster;
    }

    get getMaxPower(){
        return this.maxPower;
    }
    get getCurrentPowerThruster(){
        return this.currentPowerThruster;
    }

    get getModel(){
        return this.model; 
    }
    get getMinThrust (){
        return this.minThrust; 
    }
  
}