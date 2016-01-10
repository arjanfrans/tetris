class Brick {
    constructor (shape, x, y, board) {
        this.board = board;
        this.shape = shape;
        this.x = x;
        this.y = y;

        this.offsetX = 0;
        this.offsetY = 0;

        this.rotation = 0;
        this.rotationOffset = 0;
        this.stuck = false;
        this.color = 'red';
    }

    get shapeOffsetX () {
        return this.shape[this.rotation][0][0].length - 1;
    }

    get shapeOffsetY () {
        return this.shape[this.rotation][0].length - 1;
    }

    moveRight () {
        this.offsetX = 1;
    }

    moveLeft () {
        this.offsetX = -1;
    }

    moveDown () {
        this.offsetY = -1;
    }

    rotate () {
        this.rotationOffset = 1;
    }

    isOnFloor () {
        if (this.y === this.board.height - 1) {
            return true;
        }

        return false;
    }

    freeze () {
        for (let y = 0; y < this.shape[this.rotation]; y++) {
            for (let x = 0; x < this.shape[this.rotation][y].length; x++) {
                let piece = this.shape[this.rotation][y][x];

                if (piece) {
                    this.board.field[this.y + y][this.x + x] = {
                        color: this.color
                    };
                }
            }
        }
    }

    isValidMove () {
        for (let y = 0; y < this.shape[this.rotation].length; y++) {
            for (let x = 0; x < this.shape[this.rotation][y].length; x++) {
                let nextX = this.x + x + this.offsetX;
                let nextY = this.y + y + this.offsetY;

                // Left and right wall
                if (nextX >= this.board.width || nextX < 0) {
                    return false;
                }

                // Top and bottom wall
                if (nextY < 0 || nextY >= this.board.height) {
                    return false;
                }

                // Other blocks
                if (this.board.field[nextY][nextX]) {
                    return false;
                }

                return true;
            }
        }
    }

    update (delta) {
        if (this.isValidMove()) {
            if (this.rotation + this.rotationOffset === 3) {
                this.rotation = 0;
            } else {
                this.rotation += this.rotationOffset;
            }

            this.x += this.offsetX;
            this.y += this.offsetY;
        } else if (this.y === 0) {
            this.stuck = true;
        }

        this.offsetX = 0;
        this.offsetY = 0;
        this.rotationOffset = 0;
    }
}

export default Brick;
