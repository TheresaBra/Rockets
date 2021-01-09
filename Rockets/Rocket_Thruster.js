"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = [];
        this.powerRocket = 0;
        this.code = code;
        this.thrusters = [];
        Rocket.rockets.push(this);
    }
    Object.defineProperty(Rocket.prototype, "setPowerRocket", {
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
            return ("\n\t\t\t\t    <span>\n                    Rocket:  " + this.getCode + " \n                    <li>Number of thrusters: " + rocket.thrusters.length + " </li>\n                    <li>Possible max. power:  " + rocket.possibleMaxPowerAllThruster() + "</li>\n                    <li>Current total power:  " + rocket.CurrentTotalPower() + "</li></span></br>");
        }
    };
    Rocket.prototype.possibleMaxPowerAllThruster = function () {
        var showMaxPower = 0;
        for (var _i = 0, _a = this.thrusters; _i < _a.length; _i++) {
            var thruster = _a[_i];
            showMaxPower += (thruster.getMaxPower);
        }
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
