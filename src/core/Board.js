import Shapes from './Shapes';
import Block from './Block';

class Board {
    constructor (width = 10, height = 22) {
        this.width = width;
        this.height = height;
        this.field = [];
        this.lose = false;

        for (let y = 0; y < this.height; y++) {
            this.field[y] = [];

            for (let x = 0; x < this.width; x++) {
                this.field[y][x] = null;
            }
        }

        this.currentBlock = this.randomBlock();

        this.currentFallTime = 0;
        this.fallTime = 500;
    }

    rotate () {
        this.currentBlock.rotate();

        console.log('rotating');
    }

    moveLeft () {
        this.currentBlock.moveLeft();

        console.log('moving left');
    }

    moveRight () {
        this.currentBlock.moveRight();

        console.log('moving right');
    }

    set drop (drop) {
        if (drop) {
            this.fallTime = 20;

            console.log('dropping fast');
        } else {
            this.fallTime = 500;
        }
    }

    randomBlock () {
        let shapeName = Shapes.names[Math.floor(Math.random() * Shapes.names.length)];
        let shape = Shapes.shapes[shapeName][Math.floor(Math.random() * Shapes.shapes[shapeName].length)];
        let rotation = Math.floor(Math.random() * 4);

        let shapeWidth = shape[rotation][0].length;
        let startX = Math.random() * (this.width - shapeWidth);

        console.log('creating new random block');

        return new Block(shape, startX, 0, this);
    }

    completeLines () {
        for (let y = this.height - 1; y >= 0; y--) {
            let completed = true;

            for (let x = 0; x < 0; x--) {
                if (!this.field[y][x]) {
                    completed = false;

                    break;
                }
            }

            if (completed) {
                // Remove the line and replace it with the one above
                for (let y2 = y; y2 > 0; y2--) {
                    for (let x = 0; x < 0; x++) {
                        this.field[y2][x] = board[y2 - 1][x];
                    }
                }

                // "y" skips one row after removal
                y += 1;
            }
        }
    }

    update (delta) {
        this.currentFallTime += delta;

        if (this.currentFallTime > this.fallTime) {
            this.currentFallTime = 0;
            this.currentBlock.moveDown();

            this.currentBlock.update();

            if (this.currentBlock.stuck) {
                console.log('lost');
                this.lose = true;
            }
        }

        if (this.currentBlock.isOnFloor()) {
            this.currentBlock.freeze();

            this.currentBlock = randomBlock();
        }
    }
}

export default Board;
