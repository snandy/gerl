/**
 * @gerl
 */

var grunt = require('grunt');

//define
var gerl = module.exports;

/**
 * @总的初始化函数 from ../index.js
 * @commander
 */
gerl.start = function(argv) {

    //读取配置文件
    var cmd2 = argv[2];
    console.log(argv.length)
    console.log(grunt)
    if (argv.length < 3 || cmd2 === '-h' || cmd2 === '--help') {
        gerl.help();
    }
};

/**
 * @commoder help
 */
gerl.help = function() {
    var content = [];
    content = content.concat([
        '',
        '  Usage: gerl <Command>',
        '',
        '  Command:',
        '',
        '    install      install init dir, demo',
        //'  init         project directory init',
        '    build        build project',
        '      -open      auto open html/index.html ',
        '      -combo     combo debug for online/RD debug',
        '      -css       compile less/scss file in current dir',
        '      -plain     output project with plain',
        '',
        '    release      release project',
        '',
        '    output       output project',
        '      -html      output project (include html) ',
        '      dirname    output your own custom dirname',
        '      -debug     uncompressed js,css,images for test',
        '      -backup    backup outputdir to tags dir',
        '',
        '    server       debug for online/RD debug',
        '    lint         file lint',
        '    format       file formater',
        ' ',
        '  Extra commands:',
        '',
        '    compress     compress js/css (gerl compress input output)',
        '    clean        clean cache folder',
        '    -h           get help information',
        '    -v           get the version number',
        ''
    ]);
    console.log(content.join('\n'));
}

exports.gerl = gerl;