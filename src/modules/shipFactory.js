// Begin your app by creating the Ship factory function.

// Your ‘ships’ will be objects that include their length, the number of times they’ve

export function shipFactory(length) {
    let ship = {
        length: length,
        hits: 0,
        isSunk: false,
        hit() {
            this.hits++;
            if (this.hits === this.length) {
                this.isSunk = true;
            }
        },
    };
    return ship;
}



