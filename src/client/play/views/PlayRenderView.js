import RenderView from '../../../engine/graphics/RenderView';

class PlayRenderView extends RenderView {
    constructor (state) {
        super();

        this.state = state;
        this.clearColor = 0x00f000;
    }

    init () {
        super.init();

        this.camera = new THREE.OrthographicCamera(0, this.width,
            this.height, 0, -100, 1000);
    }

    update (delta) {
        super.update(delta);
    }

}

export default PlayRenderView;
