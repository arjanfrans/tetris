# Tetris

[![Build Status](https://travis-ci.org/arjanfrans/tetris.svg)](https://travis-ci.org/arjanfrans/tetris)
[![Dependency Status](https://david-dm.org/arjanfrans/tetris.svg)](https://david-dm.org/arjanfrans/tetris)
[![devDependency Status](https://david-dm.org/arjanfrans/tetris/dev-status.svg)](https://david-dm.org/arjanfrans/tetris#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/arjanfrans/tetris/badge.svg?branch=master&service=github)](https://coveralls.io/github/arjanfrans/tetris?branch=master)

The game is built using [three.js](http://threejs.org/three.js) for graphics and [howler.js](https://github.com/goldfire/howler.js)
for audio.

## Demo

[example.com](http://example.com/)
## Setup

Clone the repository:

```
git clone https://github.com/arjanfrans/tetris
```

Go into the project directory and install packages:
```
npm install
```

Start the game:
```
npm start
```

## Development tools
* [BMFont](http://www.angelcode.com/products/bmfont/): generate bitmap fonts.
* [spritesheet-js (fork)](https://github.com/arjanfrans/spritesheet.js): generate spritesheets.
Requires `imagemagick` to be installed.
* [audiosprite](https://github.com/tonistiigi/audiosprite): generate audiosprites for howler.js.
Requires `ffmpeg` to be installed.
