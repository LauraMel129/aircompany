import Plane from './Plane';

class militaryPlane extends Plane {
    militaryPlaneDetails (model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        generalMilitaryPlaneDetails(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.militaryType = militaryType;
    }
    getMilitaryType() {
        return this.militaryType;
    }
}

export default militaryPlane;