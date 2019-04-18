# ffmpeg-bin-electron [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[travis-image]: https://travis-ci.org/Kamicast/ffmpeg-bin-electron.svg?branch=master
[travis-url]: https://travis-ci.org/Kamicast/ffmpeg-bin-electron
[npm-image]: https://img.shields.io/npm/v/oconnorct1/ffmpeg-bin-electron.svg
[npm-url]: https://npmjs.org/package/oconnorct1/ffmpeg-bin-electron
[downloads-image]: https://img.shields.io/npm/dm/oconnorct1/ffmpeg-bin-electron.svg
[downloads-url]: https://npmjs.org/package/oconnorct1/ffmpeg-bin-electron

## About

This is a modified module from [here](https://github.com/eugeneware/ffmpeg-bin-electron)

**[ffmpeg](https://ffmpeg.org) static binaries for Mac OSX, Linux, and Windows.**

*Note:* This version of `ffmpeg-bin-electron` follows [SemVer](http://semver.org). When releasing new versions, **we do *not* consider breaking changes in `ffmpeg` itself**, but only the JS interface (see below). To stop `ffmpeg-bin-electron` from breaking your code by getting updated, [lock the version down](https://docs.npmjs.com/files/package.json#dependencies) or use a [lockfile](https://docs.npmjs.com/files/package-lock.json).


## Developer
In order to download and prep the binaries you *may* need to change permissions for the shell script:

```sh
chmod +x binaries.sh
```

To run the script either execute `sudo ./binaries.sh` or `sudo yarn run build-bin`

## Install
```sh
npm install --save ffmpeg-bin-electron
# or
yarn add ffmpeg-bin-electron
```

## How to use
```js
// ES6
import ffmpeg from 'ffmpeg-bin-electron';
// ES5
const ffmpeg = require('ffmpeg-bin-electron').default;


console.log(ffmpeg.path);
// /Users/craigoconnor/Projects/ffmpeg-test/ffmpeg-bin-electron/bin/darwin/x64/ffmpeg
```


## The binaries sources

[The build script](build/index.sh) downloads binaries from these locations:

- [Windows builds](https://ffmpeg.zeranoe.com/builds/win64/static/)
- [Linux builds](https://johnvansickle.com/ffmpeg/)
- [macOS builds](https://evermeet.cx/pub/ffmpeg/)

## Building the project

The `unzip`, `tar` and `7zr` CLI executables need to be installed. On macOS, use `brew install p7zip gnu-tar xz`.

---

## ISC License (ISC)

Copyright 2019 <Kamicast>
Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC")
Copyright (c) 1995-2003 by Internet Software Consortium


Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
