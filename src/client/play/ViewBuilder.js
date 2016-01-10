import PlayRenderView from './views/PlayRenderView';
import ViewContainer from '../../engine/graphics/ViewContainer';
import BoardView from './views/BoardView';
import BorderView from './views/BorderView';

let ViewBuilder = {
    create (state) {
        let renderView = new PlayRenderView(state);
        let viewContainer = new ViewContainer();

        viewContainer.addDynamicView(new BoardView(state));
        viewContainer.addStaticView(new BorderView(state));

        renderView.addViewContainer('main', viewContainer);
        renderView.currentViewContainer = 'main';

        return renderView;
    }
};

export default ViewBuilder;
