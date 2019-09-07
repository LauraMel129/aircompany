class Plane {

    plane(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }
    getModel() {
        return this.model;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
    Get_Max_Flight_Distance() {
        return this.maxFlightDistance;
    }
    getMaxLoadCapacity() {
     let result = this.maxLoadCapacity;
     return result;
    }
}

export default Plane;
