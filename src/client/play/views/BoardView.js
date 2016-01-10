import BrickView from './BrickView';
import View from '../../../engine/graphics/View';

const BRICK_WIDTH = 32;
const BRICK_HEIGHT = 32;

class BoardView extends View {
    constructor (state) {
        super();

        this.board = state.board;
        this.bricks = [];
        this.currentBrick = null;
    }

    init () {
        this.mesh = new THREE.Object3D();

        for (let y = 0; y < this.board.height; y++) {
            this.bricks[y] = [];

            for (let x = 0; x < this.board.width; x++) {
                let brickView = new BrickView();

                brickView.init();
                brickView.visible = false;
                brickView.position.x = x * BRICK_WIDTH;
                brickView.position.y = y * BRICK_HEIGHT;


                this.mesh.add(brickView.mesh);

                this.bricks[y][x] = brickView;
            }
        }

        let meshWidth = this.board.width * BRICK_WIDTH;
        let meshHeight = this.board.height * BRICK_HEIGHT;
        this.currentBrick = new BrickView();
        this.currentBrick.init();
        this.currentBrick.visible = false;

        this.mesh.add(this.currentBrick.mesh);

        this.mesh.applyMatrix(new THREE.Matrix4().makeTranslation(meshWidth / 2, 0, 0));
        this.mesh.translateX((this.board.width * BRICK_WIDTH) / 2);

        super.init();
    }

    update (alpha) {
        for (let y = 0; y < this.board.height; y++) {
            for (let x = 0; x < this.board.width; x++) {
                let brick = this.board.field[y][x];
                let brickView = this.bricks[y][x];

                if (brick) {
                    // TODO change color
                    brickView.visible = true;
                } else {
                    brickView.visible = false;
                }
            }
        }

        let currentBrick = this.board.currentBlock;

        for (let y = 0; y < currentBrick.shape[currentBrick.rotation].length; y++) {
            for (let x = 0; x < currentBrick.shape[currentBrick.rotation][y].length; x++) {
                let viewX = currentBrick.x + x;
                let viewY = currentBrick.y + y;

                if (viewX < this.board.width && viewY < this.board.height) {
                    console.log(viewX, viewY);
                    let brickView = this.bricks[currentBrick.y + y - 1][currentBrick.x + x];

                    brickView.visible = true;
                    brickView.position.x = (currentBrick.x + x) * BRICK_WIDTH;
                    brickView.position.y = (currentBrick.y + y) * BRICK_HEIGHT;
                }
            }
        }
    }
}

export default BoardView;
