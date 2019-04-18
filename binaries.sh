#!/bin/sh
set +e
cd $(dirname $0)

tar_exec=$(command -v gtar)
if [ $? -ne 0 ]; then
	tar_exec=$(command -v tar)
fi

download () {
	curl -L -# -A 'https://github.com/Kamicast/ffmpeg-bin-electron' -o $2 $1
}

echo 'windows x64'
echo '  downloading from ffmpeg.zeranoe.com'
download 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip' win-x64.zip
echo '  extracting'
unzip -o -d ./bin/win/x64 -j win-x64.zip '**/ffmpeg.exe'
echo ' cleaning up'
rm win-x64.zip

echo 'windows ia32'
echo '  downloading from ffmpeg.zeranoe.com'
download 'https://ffmpeg.zeranoe.com/builds/win/static/ffmpeg-latest-win-static.zip' win-ia32.zip
echo '  extracting'
unzip -o -d ./bin/win/ia32 -j win-ia32.zip '**/ffmpeg.exe'
echo ' cleaning up'
rm win-ia32.zip

echo 'linux x64'
echo '  downloading from johnvansickle.com'
download 'https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz' linux-x64.tar.xz
echo '  extracting'
$tar_exec -x -C ./bin/linux/x64 --strip-components 1 -f linux-x64.tar.xz --wildcards '*/ffmpeg'
echo ' cleaning up'
rm linux-x64.tar.xz

echo 'linux ia32'
echo '  downloading from johnvansickle.com'
download 'https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-i686-static.tar.xz' linux-ia32.tar.xz
echo '  extracting'
$tar_exec -x -C ./bin/linux/ia32 --strip-components 1 -f linux-ia32.tar.xz --wildcards '*/ffmpeg'
echo ' cleaning up'
rm linux-ia32.tar.xz

echo 'mac x64'
echo '  downloading from evermeet.cx'
download "https://evermeet.cx/ffmpeg/getrelease" mac-x64-ffmpeg.7z
7z e -y -bd -o./bin/mac/x64 mac-x64-ffmpeg.7z >/dev/null
echo ' cleaning up'
rm mac-x64-ffmpeg.7z
