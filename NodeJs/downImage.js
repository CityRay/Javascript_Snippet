let http = require('http');
let request = require('superagent');
let cheerio = require('cheerio');
let fs = require('fs');

const savePath = __dirname + '\\download';

let downloadImg = function(url, dest) {
    let file = fs.createWriteStream(dest);

    return new Promise(function(resolve, reject){
        let request = http.get(url, function(response) {
            if (response.statusCode !== 200) {
                reject('Response status was ' + response.statusCode);
            }
            response.pipe(file);
            file.on('finish', function() {
                file.close(function() {
                    resolve(dest + ' is Finished!');
                });  // close() is async, call cb after close completes.
            });

        }).on('error', function(err) { // Handle errors
            fs.unlink(dest); // Delete the file async. (But we don't check the result)
            reject(err.message);
        });

        file.on('error', function(err) { // Handle errors
            fs.unlink(dest); // Delete the file async. (But we don't check the result)
            reject(err.message);
        });

    });

};

let parseUrl = function(url) {
    request
    .get(url)
    .end(function(err, res){
        // Do something
        // console.log(res.body);
        // console.log(res.header);
        // console.log(res.type);
        // console.log(res.text);
        let $ = cheerio.load(res.text, {
            normalizeWhitespace: true,
            xmlMode: true
        });

        let imgLen = $('img').length;
        $('img').each(function(i, elem){
            // console.log($(this).attr('src'));

            if (i > 2 && i < imgLen) {
                let uri = 'http:' + $(this).attr('src');
                let splitUri = $(this).attr('src').split('/');
                let originFilename = splitUri[splitUri.length - 1];

                if (originFilename.match(/^.*\.(png|jpg)$/i)){
                    let fileName = savePath + '\\' + originFilename;
                    // console.log(uri);

                    downloadImg(uri, fileName)
                    .then(function(res) {
                        if (res !== undefined) {
                            console.log(res);
                        }
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
                }
            }
        });
    });
};

parseUrl('http://xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
