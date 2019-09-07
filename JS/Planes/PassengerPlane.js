import Plane from './Plane';

class passengerPlane extends Plane {

    passengerPlane(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        Plane(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }
    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

export default passengerPlane;