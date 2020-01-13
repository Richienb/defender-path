# Defender Path [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/defender-path/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/defender-path)

Gets the current path of the Windows Defender CLI binary.

[![NPM Badge](https://nodei.co/npm/defender-path.png)](https://npmjs.com/package/defender-path)

## Install

```sh
npm install defender-path
```

## Usage

```js
const defenderPath = require("defender-path");

defenderPath;
//=> 'C:\\Program Files\\Windows Defender\\MpCmdRun.exe'
```

## API

### defenderPath

Type: `string`

The path of the Windows Defender CLI binary.
