import Plane from './Plane';

class experimentalPlane extends Plane {
   experimentalPLane(model, maxSpeed, maxFlightDistance, maxLoadCapacity, planeType, classificationLevel)  {
        PLane(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._model = model;
        this._maxSpeed = maxSpeed;
        this._maxFlightDistance = maxFlightDistance;
        this._maxLoadCapacity = maxLoadCapacity;
        this._planeType = planeType;
        this._classificationLevel = classificationLevel;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(value) {
        this._maxSpeed = value;
    }
    get maxFlightDistance() {
        return this._maxFlightDistance;
    }
    set maxFlightDistance(value) {
        this._maxFlightDistance = value;
    }
    get maxLoadCapacity() {
        return this._maxLoadCapacity;
    }
    set maxLoadCapacity(value) {
        this._maxLoadCapacity = value;
    }
    get planeType() {
        return this._planeType;
    }
    set planeType(value) {
        this._planeType = value;
    }
    get classificationLevel() {
        return this._classificationLevel;
    }
    set classificationLevel(value) {
        this._classificationLevel = value;
    }
}

export default experimentalPlane