const test = require('tape')
const fs = require('fs')
const ffmpeg = require('../lib').default

test('should find ffmpeg', function (t) {
  t.plan(1)

  t.ok(fs.existsSync(ffmpeg))
})
