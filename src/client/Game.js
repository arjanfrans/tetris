import Engine from '../engine/Engine';
import AssetManager from '../engine/AssetManager';
import path from 'path';

const ASSET_PATH = path.resolve(__dirname, '../../assets/');
const ASSET_CONFIG = {
    paths: {
        atlases: ASSET_PATH + '/spritesheets',
        fonts: ASSET_PATH + '/fonts',
        audio: ASSET_PATH + '/audio/sprites'
    },
    textureAtlases: [
    ],
    fonts: [
        'keep_calm'
    ],
    audio: [
    ]
};

let Game = {

    /**
     * Load assets and start the game.
     *
     * @returns {void}
     */
    start () {
        AssetManager.init(ASSET_CONFIG).then(function () {
            let engine = new Engine({
                debugMode: true
            });

            // TODO
            let playState = null;

            engine.addState('play', playState);

            engine.changeState('playState');

            engine.run();
        }).catch(function (err) {
            throw err;
        });
    }
};

module.exports = Game;
