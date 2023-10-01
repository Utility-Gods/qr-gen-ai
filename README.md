# Generate QR Code/AI QR Code Generator



Remove type from package.json before deploying to fly

Build-

docker build -t qrkit .

Copy the dockerfile from docker folder so to trick fly to think ti is docker image,

Test-
 docker run -p5176:5176 -p 24678:24678 -d qrkit
