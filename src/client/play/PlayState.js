import State from '../State';
import PlayerInput from './input/PlayerInput';
import Board from '../../core/Board';
import ViewBuilder from './ViewBuilder';

class PlayState extends State {
    constructor () {
        super('play');

        this.board = new Board();
        this.isPlaying = true;
        this.inputs.add(new PlayerInput(this));
        this.views.add(ViewBuilder.create(this));
    }

    init () {
        super.init();
    }

    update (delta) {
        super.updateInputs(delta);

        // super.updateAudio(delta);

        if (this.isPlaying) {
            this.board.update(delta);
        }
    }
}

export default PlayState;
