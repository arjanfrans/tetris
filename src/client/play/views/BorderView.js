import BrickView from './BrickView';
import View from '../../../engine/graphics/View';

const BRICK_WIDTH = 32;
const BRICK_HEIGHT = 32;

class BorderView extends View {
    constructor (state) {
        super();

        this.board = state.board;
    }

    init () {
        this.mesh = new THREE.Object3D();

        for (let y = 0; y < this.board.height; y++) {
            for (let x = 0; x < this.board.width; x++) {
                console.log(x, y);
                let createView = false;

                if (x < 1 || x === this.board.width - 1) {
                    createView = true;
                } else if (y > 0 && y < 2 || y === this.board.height - 1) {
                    createView = true;
                }

                if (createView) {
                    let brickView = new BrickView();

                    brickView.init();
                    brickView.position.x = x * BRICK_WIDTH;
                    brickView.position.y = y * BRICK_HEIGHT;
                    brickView.position.z = 50;

                    this.mesh.add(brickView.mesh);
                }
            }
        }

        super.init();
    }
}

export default BorderView;
