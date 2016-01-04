import RenderView from '../../../engine/graphics/RenderView';

class StatsRenderView extends RenderView {
    constructor (state) {
        super();

        this.state = state;
    }

    init () {
        super.init();

        this.camera = new THREE.OrthographicCamera(0, this.width,
            this.height, 0, 0, 1);
    }

    update (delta) {
        super.update(delta);
    }

}

export default StatsRenderView;
