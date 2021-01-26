const fs = require('fs');
const process = require('process');
const axios = require('axios');
const userInput = process.argv[2];

const cat = (path, output) => {
	fs.readFile(path, 'utf-8', (error, data) => {
		if (error) {
			console.error(`Error! ${path} : ${error}`);
			process.exit(1);
		} else {
			handleOutput(data, output);
		}
	});
};
const webCat = async (url, output) => {
	try {
		const response = await axios.get(url);
		handleOutput(response.data, output);
	} catch (error) {
		console.error(`Error. URL: ${url} ; Error: ${error}`);
		process.exit(1);
	}
};
const handleOutput = (text, output) => {
	if (output) {
		fs.writeFile(output, text, 'utf8', (error) => {
			if (error) {
				console.error(`Can not write ${output} : ${error}`);
				process.exit(1);
			}
		});
	} else {
		console.log(text);
	}
};

let output, path;
if (userInput === '--out') {
	output = process.argv[3];
	path = process.argv[4];
} else {
	path = process.argv[2];
}
//
if (path.slice(0, 4) === 'http') {
	webCat(path, output);
} else {
	cat(path, output);
}
