function splitter(argv) {

	var vowels = 'aeiouy';
	var glasn = 'аяуюоёеэиы';

	var vowelsOut = [];
	var consonantsOut = [];
	var numbersOut = [];


	for (var i = 0; i<argv[2].length; i++) {
		var inputChr = argv[2].charAt(i);

		if (inputChr.toLowerCase() != inputChr.toUpperCase()) {
			if (vowels.indexOf(inputChr.toLowerCase())!=-1 || glasn.indexOf(inputChr.toLowerCase())!=-1) {
				vowelsOut.push(inputChr);
			} else {
				consonantsOut.push(inputChr);
			}
		} else {
			if (!isNaN(parseInt(inputChr, 10))) {
				numbersOut.push(inputChr);
			}
		}

	}

	return vowelsOut.join("") + " " + consonantsOut.join("") + " " + numbersOut.join("");
}


if (process.argv.length>2) {
	if (process.argv[2].length>=1 && process.argv[2].length<=10000) {
		process.stdout.write(splitter(process.argv));
	} 
}