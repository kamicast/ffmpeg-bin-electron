const os = require('os')
const path = require('path')

let platform = os.platform()
if (platform === 'darwin') { platform = 'mac' } else if (platform === 'win32') { platform = 'win' }
if (platform !== 'linux' && platform !== 'mac' && platform !== 'win' && platform !== 'browser') {
  console.error('Unsupported platform: ', platform)
  process.exit(1)
}

const arch = os.arch()
if (platform === 'mac' && arch !== 'x64') {
  console.error('Unsupported architecture: ', arch)
  process.exit(1)
}

const ffmpegPath = path.join(
  __dirname,
  '../',
  'bin',
  platform,
  arch,
  platform === 'win' ? 'ffmpeg.exe' : 'ffmpeg'
)

export default ffmpegPath
