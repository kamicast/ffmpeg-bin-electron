const ffbinaries = require('ffbinaries')
const chalk = require('chalk')
const waterfall = require('async-waterfall')

function getWin32 (cb) {
  console.log(chalk.yellow('Downloading windows 32-bit ffmpeg binaries'))
  let destination = './bin/win/ia32'
  ffbinaries.downloadBinaries('ffmpeg', { platform: 'win-32', quiet: true, destination }, () => {
    console.log(chalk.blue('Download successful'))
    cb()
  })
}

function getWin64 (cb) {
  console.log(chalk.yellow('Downloading windows 64-bit ffmpeg binaries'))
  let destination = './bin/win/x64'
  ffbinaries.downloadBinaries('ffmpeg', { platform: 'win-64', quiet: true, destination }, () => {
    console.log(chalk.blue('Download successful'))
    cb()
  })
}

function getOSX64 (cb) {
  console.log(chalk.yellow('Downloading OS X 64-bit ffmpeg binaries'))
  let destination = './bin/mac/x64'
  ffbinaries.downloadBinaries('ffmpeg', { platform: 'osx-64', quiet: true, destination }, () => {
    console.log(chalk.blue('Download successful'))
    cb()
  })
}

function getLinux32 (cb) {
  console.log(chalk.yellow('Downloading Linux 32-bit ffmpeg binaries'))
  let destination = './bin/linux/ia32'
  ffbinaries.downloadBinaries('ffmpeg', { platform: 'linux-32', quiet: true, destination }, () => {
    console.log(chalk.blue('Download successful'))
    cb()
  })
}

function getLinux64 (cb) {
  console.log(chalk.yellow('Downloading OS X 64-bit ffmpeg binaries'))
  let destination = './bin/linux/x64'
  ffbinaries.downloadBinaries('ffmpeg', { platform: 'linux-64', quiet: true, destination }, () => {
    console.log(chalk.blue('Download successful'))
    cb()
  })
}

waterfall([
  getWin32,
  getWin64,
  getOSX64,
  getLinux32,
  getLinux64
])
