import { TextureManager, TextureFrame, View } from '../../../engine/graphics';

class BrickView extends View {
    constructor () {
        super();

        this.color = 0x00ff00;
    }

    init () {
        let textureAtlas = TextureManager.getAtlas('play', false);

        this.geometry = new THREE.BoxGeometry(32, 32, 32);
        this.textureFrame = new TextureFrame(textureAtlas, this.geometry, 'brick');
        this.material = new THREE.MeshBasicMaterial({
            color: this.color,
            map: this.textureFrame.texture
        });

        this.mesh = new THREE.Mesh(this.geometry, this.material);

        super.init();
    }

    update (alpha) {
    }
}

export default BrickView;
