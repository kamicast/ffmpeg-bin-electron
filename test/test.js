const test = require('tape')
const fs = require('fs')
const ffmpegPath = require('../lib').default

test('should find ffmpeg', function (t) {
  t.plan(1)

  t.ok(fs.existsSync(ffmpegPath))
})
