import PlayRenderView from './views/PlayRenderView';
import ViewContainer from '../../engine/graphics/ViewContainer';
import BoardView from './views/BoardView';

let ViewBuilder = {
    create (state) {
        let renderView = new PlayRenderView(state);
        let viewContainer = new ViewContainer();

        viewContainer.addDynamicView(new BoardView(state));

        renderView.addViewContainer('main', viewContainer);
        renderView.currentViewContainer = 'main';

        return renderView;
    }
};

export default ViewBuilder;
