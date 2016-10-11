(function(dp) {
    "use strict";

    function round10(number) {
        return Math.round(number * 100) / 100;
    }

    function degreesToRads(degrees) {
        return degrees / 180 * Math.PI;
    }

    function radsToDegrees(radians) {
        return radians * 180 / Math.PI;
    }
    // ===================
    dp.Point = function(x, y) {
            this.type = "Point";
            this.x = x || 0;
            this.y = y || 0;
            this.distanceTo = function(x, y) {
                var dx = x - this.x,
                    dy = y - this.y;
                return round10(Math.sqrt(dx * dx + dy * dy));
            }
        }
        // ===================
    dp.Segment = function(p1, p2) {

            this.type = "Segment";
            if (p1 && p1.type == "Point") {
                this.p1 = p1;
            } else {
                this.p1 = new dp.Point()
            }
            if (p2 && p2.type == "Point") {
                this.p2 = p2;
            } else {
                this.p2 = new dp.Point()
            }
            this.getAngleToP1 = function() {
                return round10(Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x));

            }
            this.getAngleToP2 = function() {
                return round10(Math.atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x));
            }
            this.getLength = function() {
                return this.p1.distanceTo(this.p2.x, this.p2.y);
            }
            this.update = function() {
                this.angleToP1 = this.getAngleToP1();
                this.angleToP2 = this.getAngleToP2();
                this.length = this.getLength();
            }
            this.update();
        }
        // ===================
    dp.Vector = function(x, y) {
        this.type = "Vector";
        this.x = x || 1;
        this.y = y || 1;
        this.getAngle = function() {
            return round10(Math.atan2(this.y, this.x));
        }
        this.getLength = function() {
            return round10(Math.sqrt(this.x * this.x + this.y * this.y));
        };
        this.update = function() {
            this.angle = this.getAngle();
            this.length = this.getLength();
        }
        this.update();
    }

})(window.domphysics = {})