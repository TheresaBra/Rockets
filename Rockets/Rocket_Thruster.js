"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = [];
        // private nrThrusters:number = 0; 
        this.powerRocket = 0;
        this.code = code;
        this.thrusters = [];
        // !code || code.trim().length === 0
        Rocket.rockets.push(this);
    }
    Object.defineProperty(Rocket.prototype, "setPowerRocket", {
        //setters// 
        // set setNrThrusters (nrThrusters:number){
        //     this.nrThrusters = nrThrusters;
        // }
        set: function (powerRocket) {
            this.powerRocket = powerRocket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "setThrusters", {
        set: function (thrusters) {
            this.thrusters = thrusters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getCode", {
        //getters//
        // get getNrThrusters(){
        //     return this.nrThrusters;
        // }
        get: function () {
            return this.code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getPowerRocket", {
        get: function () {
            return this.powerRocket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getRockets", {
        get: function () {
            return Rocket.rockets;
        },
        enumerable: false,
        configurable: true
    });
    Rocket.prototype.toString = function () {
        for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
            var rocket = rockets_1[_i];
            return ("Code: " + this.getCode + "; " +
                "Number of thrusters: " + rocket.thrusters.length + "; " +
                "Possible max. power rocket: " + rocket.possibleMaxPowerAllThruster() + "; " +
                "Current total power rocket: " + rocket.CurrentTotalPower());
        }
    };
    Rocket.prototype.possibleMaxPowerAllThruster = function () {
        var showMaxPower = 0;
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            showMaxPower += (thruster.getMaxPower);
        }
        //    showMaxPower = showMaxPower.substr(showMaxPower.length, - 2);
        return showMaxPower;
    };
    Rocket.prototype.CurrentTotalPower = function () {
        var sum = 0;
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            sum += thruster.getCurrentPowerThruster;
        }
        return sum;
    };
    Rocket.prototype.speedUp = function () {
        var increasePower = 10;
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            if (thruster.getCurrentPowerThruster + 10 <= thruster.getMaxPower) {
                thruster.setCurrentPowerThruster = thruster.getCurrentPowerThruster + increasePower;
            }
        }
    };
    Rocket.prototype.speedDown = function () {
        var loweringPower = 10;
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            if (thruster.getCurrentPowerThruster > 0) {
                thruster.setCurrentPowerThruster = thruster.getCurrentPowerThruster - loweringPower;
            }
        }
    };
    Rocket.rockets = [];
    return Rocket;
}());
var Thruster = /** @class */ (function () {
    function Thruster(model, maxPower) {
        this.minThrust = 0;
        this.currentPowerThruster = 0;
        this.maxPower = maxPower;
        this.model = model;
    }
    Object.defineProperty(Thruster.prototype, "setCurrentPowerThruster", {
        set: function (currentPowerThruster) {
            this.currentPowerThruster = currentPowerThruster;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thruster.prototype, "getMaxPower", {
        get: function () {
            return this.maxPower;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thruster.prototype, "getCurrentPowerThruster", {
        get: function () {
            return this.currentPowerThruster;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thruster.prototype, "getModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Thruster.prototype, "getMinThrust", {
        get: function () {
            return this.minThrust;
        },
        enumerable: false,
        configurable: true
    });
    return Thruster;
}());
