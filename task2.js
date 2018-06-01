
function fibonacci(argv, n){

	var c = 0;
	var absN = Math.abs(n);

	switch(n) {
		case  0:
		case  1:
		case -1:
			c = absN;
			break;
		default: 
			c = calcFiboMod(absN);
			if (n<0) {
				c= Math.pow(-1, absN+1) * c;
			}
	}
	return c;
}

function calcFiboMod(n){
	var a=0;
	var b=1;
	var c=0;

	for (var i =2; i<=n; i++) {
		c=a+b;
		a=b;
		b=c;
	}

	return c;
}

var argv =process.argv;
var n = parseInt(argv[2], 10);
var toNum = Number(argv[2]);

if (argv.length>2 && !isNaN(n) && !isNaN(toNum) && (n === toNum) && -10000<=n && n <=10000){
	process.stdout.write(String(fibonacci(argv, n)));
}

