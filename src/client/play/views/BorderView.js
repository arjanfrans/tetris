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
                let createView = false;

                if (x === 0 || x === this.board.width - 1) {
                    createView = true;
                } else if (y === 0 || y === this.board.height - 1) {
                    createView = true;
                }

                if (createView) {
                    let brickView = new BrickView();

                    brickView.init();
                    brickView.position.x = x * BRICK_WIDTH;
                    brickView.position.y = y * BRICK_HEIGHT;

                    this.mesh.add(brickView.mesh);
                }
            }
        }

        let meshWidth = this.board.width * BRICK_WIDTH;
        let meshHeight = this.board.height * BRICK_HEIGHT;

        this.mesh.applyMatrix(new THREE.Matrix4().makeTranslation(meshWidth / 2, 0, 0));
        this.mesh.translateX((this.board.width * BRICK_WIDTH) / 2);

        super.init();
    }
}

export default BorderView;
