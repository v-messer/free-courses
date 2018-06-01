function palindrome(argv) {

	if (argv.length>2){
		
		var str = argv[2];

		if (10000>=str.length && str.length >=1) {

		  	var re = /[\W_]/g;
		  	var lowRegStr = str.toLowerCase().replace(re, '');
		  	var reverseStr = lowRegStr.split('').reverse().join(''); 

			process.stdout.write(reverseStr === lowRegStr ? 'YES': 'NO');
		}
	}
}

palindrome(process.argv);