
var request = require('request');
var fs = require('fs');
var url = 'https://sytantris.github.io/http-examples/future.jpg';
var arq = "./future.jpg";
request.get(url)
            .on('error', function(err) {
              throw err;
            })
            .on('response', function(response) {
              //console.log(response.statusMessage, response.headers['content-type']);
              console.log('Downloading image...');
            })
            .on('end', function() {
              console.log('Download complete.');
            })
            .pipe(fs.createWriteStream(arq));
