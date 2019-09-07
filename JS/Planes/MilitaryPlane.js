import Plane from './Plane';

class militaryPlane extends Plane {
    militaryPlane(model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        Plane(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.militaryType = militaryType;
    }
    getMilitaryType() {
        return this.militaryType;
    }
}

export default militaryPlane;