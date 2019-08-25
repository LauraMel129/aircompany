import Plane from './Plane';

class passengerPlane extends Plane {

    passengerPlaneDetails(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        generalPassengerPlaneDetails(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._passengersCapacity = passengersCapacity;
    }
    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

export default passengerPlane;