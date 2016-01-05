import ObjectPool from '../../../engine/ObjectPool';
import View from '../../../engine/graphics/View';
import BrickView from './BrickView';

class BrickViewPool extends View {
    constructor (state) {
        super();

        this.board = state.board;

        this.viewPool = new ObjectPool(() => {
            return new BrickView();
        }, this.board.area, 20);
    }

    init () {
        this.mesh = new THREE.Object3D();

        super.init();
    }

    update () {
        let field = this.board.field;

        for (let y = 0; y < field.length; y++) {
            for (let x = 0; x < field[y].length; x++) {
                // TODO
            }
        }
    }
}

export default BrickViewPool;
