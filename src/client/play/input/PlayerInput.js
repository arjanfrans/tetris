import Keyboard from '../../../engine/input/Keyboard';
import HumanInput from '../../../engine/input/HumanInput';

class PlayerInput extends HumanInput {
    constructor (state) {
        super();

        this.board = state.board;
    }

    update (delta) {
        if (this.keyboardDownOnce(Keyboard.UP)) {
            this.board.rotate();
        }

        if (Keyboard.isDown(Keyboard.DOWN)) {
            this.board.drop = true;
        } else {
            this.board.drop = false;
        }

        if (this.keyboardDownOnce(Keyboard.RIGHT)) {
            this.board.moveRight();
        } else if (this.keyboardDownOnce(Keyboard.LEFT)) {
            this.board.moveLeft();
        }
    }
}

export default PlayerInput;
