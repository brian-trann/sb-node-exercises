const fs = require('fs');
const process = require('process');
const file = process.argv[2];

const cat = (path) => {
	fs.readFile(path, 'utf-8', (error, data) => {
		if (error) {
			console.error(`Error! ${path} : ${error}`);
			process.exit(1);
		} else {
			console.log(data);
		}
	});
};
// cat(file);

module.exports = { cat };
