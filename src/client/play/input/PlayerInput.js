import Keyboard from '../../../engine/input/Keyboard';
import Gamepad from '../../../engine/input/Gamepad';
import HumanInput from '../../../engine/input/HumanInput';

class PlayerInput extends HumanInput {
    constructor (player) {
        super();

        this.player = player;
    }

    update (delta) {
        if (Keyboard.isDown(Keyboard.UP) || Gamepad.isStickDown(this.gamepadIndex, 'left', 'up')) {
            // TODO
        } else if (Keyboard.isDown(Keyboard.DOWN) || Gamepad.isStickDown(this.gamepadIndex, 'left', 'down')) {
            // TODO
        } else {
            // TODO
        }

        if (Keyboard.isDown(Keyboard.RIGHT) || Gamepad.isStickDown(this.gamepadIndex, 'right', 'right')) {
            // TODO
        } else if (Keyboard.isDown(Keyboard.LEFT) || Gamepad.isStickDown(this.gamepadIndex, 'right', 'left')) {
            // TODO
        } else {
            // TODO
        }
    }
}

export default PlayerInput;
