//https://www.promisejs.org/
//http://kangax.github.io/compat-table/esnext/

'use strict';

function asyncMethod(message, num){
	return new Promise(function(fulfill, reject){
		setTimeout(function(){
			console.log(message + ' ' + num);
			fulfill(num + 1);
		}, 700);
	});
	
}


//Async ==========================

async function main() {

	var step1 = await asyncMethod('Open Socket Connection', 0);
	var step2 = await asyncMethod('Find User', step1);
	var step3 = await asyncMethod('Validate User', step2);
	var step4 = await asyncMethod('Do Something', step3);
}

main();

//================================