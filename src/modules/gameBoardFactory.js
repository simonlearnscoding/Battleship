// Create Gameboard factory.


export function gameBoardFactory() {
    let gameboard = {
        shipFields: [],
        missedShots: [],

        //     Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
        placeShip(ship, x, y, orientation) {


            for (let i = 0; i <= ship.length; i++)
                if (orientation === 'horizontal') {
                    let xvar = x + i;
                    this.shipFields.push({xvar, y})
                } else {
                    let yvar = y + i;
                    this.shipFields.push({x, yvar})
                }
        },

        // a receiveAttack function that takes a pair of coordinates as arguments and then calls the hit function on the ship at those coordinates.
        receiveAttack(x, y) {
            //TODO: Review this
            let ship = this.shipFields.find((ship) => ship.x === x && ship.y === y);
            if (ship) {
                ship.ship.hit();
            } else {
                this.missedShots.push({
                    x: x,
                    y: y,
                });
            }
            // Gameboards should be able to report whether or not all of their ships have been sunk.
            this.allShipsSunk = this.shipFields.every((ship) => ship.ship.isSunk);
        },
    }
    return gameboard;
}

// Create Player.
//
//     Players can take turns playing the game by attacking the enemy Gameboard.
//     The game is played against the computer, so make ‘computer’ players capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal. (i.e. it shouldn’t shoot the same coordinate twice).
