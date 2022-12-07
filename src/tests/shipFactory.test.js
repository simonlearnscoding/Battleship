// jest test mock function for shipFactory function
import {shipFactory} from '../modules/shipFactory';


// create an example test suite for the shipFactory function
describe('shipFactory function', () => {
    // create a ship mock object before each test
    let ship;
    beforeEach(() => {
        ship = shipFactory(3);
    });
    test('shipFactory function exists', () => {
        expect(shipFactory).toBeDefined();
    });
    test('shipFactory function returns an object', () => {
        expect(shipFactory(3)).toBeInstanceOf(Object);
    });
    test('shipFactory function property isSunk is true when ship is sunk', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk).toBe(true);
    });
});
