//https://www.promisejs.org/

function asyncMethod(message){
	return new Promise(function(fulfill, reject){
		setTimeout(function(){
			console.log(message);
			fulfill();
		}, 700);
	});
	
}

//Step 1 =========================
// function findUser(){
// 	asyncMethod('Find User')
// 		.then(validateUser);
// }

// function validateUser(){
// 	asyncMethod('Validate User')
// 		.then(doSomething);
// }

// function doSomething(){
// 	console.log('Do Something');
// }

// asyncMethod('Open Connection')
// .then(findUser);
//================================

//Step 2 =========================
function findUser(){
	return asyncMethod('Find User');
}

function validateUser(){
	return asyncMethod('Validate User');
}

function doSomething(){
	return asyncMethod('Do Something');
}

asyncMethod('Open Socket Connection')
.then(findUser)
.then(validateUser)
.then(doSomething)
.then(function(){
	console.log('Well Done');
});
//================================