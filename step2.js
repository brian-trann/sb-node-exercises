const fs = require('fs');
const process = require('process');
const axios = require('axios');
const file = process.argv[2];

const { cat } = require('./step1.js');

// cat(file);

const webCat = async (url) => {
	try {
		const response = await axios.get(url);
		console.log(response);
	} catch (error) {
		console.error(`Error. URL: ${url} ; Error: ${error}`);
		process.exit(1);
	}
};
// if (file.slice(0, 4) === 'http') {
// 	webCat(file);
// } else {
// 	cat(file);
// }

module.exports = { webCat };
