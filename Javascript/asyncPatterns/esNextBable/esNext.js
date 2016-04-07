//https://www.promisejs.org/
//http://kangax.github.io/compat-table/esnext/

'use strict';

//Async ==========================

let main = (() => {
	var ref = _asyncToGenerator(function* () {

		var step1 = yield asyncMethod('Open Socket Connection', 0);
		var step2 = yield asyncMethod('Find User', step1);
		var step3 = yield asyncMethod('Validate User', step2);
		var step4 = yield asyncMethod('Do Something', step3);
	});

	return function main() {
		return ref.apply(this, arguments);
	};
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function asyncMethod(message, num) {
	return new Promise(function (fulfill, reject) {
		setTimeout(function () {
			console.log(message + ' ' + num);
			fulfill(num + 1);
		}, 700);
	});
}

main();

//================================
