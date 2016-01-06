import path from 'path';

import Engine from '../engine/Engine';
import AssetManager from '../engine/AssetManager';
import PlayState from './play/PlayState';

const ASSET_PATH = path.resolve(__dirname, '../../assets/');
const ASSET_CONFIG = {
    paths: {
        atlases: ASSET_PATH + '/spritesheets',
        fonts: ASSET_PATH + '/fonts',
        audio: ASSET_PATH + '/audio/sprites'
    },
    textureAtlases: [
        'play'
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

            let playState = new PlayState();

            engine.addState('play', playState);

            engine.changeState('play');

            engine.run();
        }).catch(function (err) {
            throw err;
        });
    }
};

module.exports = Game;
