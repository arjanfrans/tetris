import RenderView from '../../../engine/graphics/RenderView';

class PlayRenderView extends RenderView {
    constructor (state) {
        super();

        this.state = state;
        this.clearColor = 0x00f000;
    }

    init () {
        super.init();

        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 100, 1000);

        this.camera.position.x = this.width / 2;
        this.camera.position.y = this.height / 2;
        this.camera.position.z = 600;

        let ambientLight = new THREE.AmbientLight(0x030303);
    }

    update (delta) {
        super.update(delta);
    }

}

export default PlayRenderView;
