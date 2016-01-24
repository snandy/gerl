var gerl = require('./lib/gerl.js');
var index = module.exports = {
	init:function(argv){
		gerl.start(argv);

	}
};
// console.log(gerl)
// console.log(process.argv)
// index.init(process.argv);