import {gameBoardFactory} from "../modules/gameBoardFactory";
import {shipFactory} from "../modules/shipFactory";

let gameBoard;
beforeAll(() => {
    gameBoard = gameBoardFactory()
})
describe('a test suite for gameboard', function () {

    test('gameboard exists', () => {
        expect(gameBoard).toBeDefined()
    })


});
