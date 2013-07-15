/**
 * @name Describe
 */

var check = require("./check");

it = function(message, behavior) {
	var fail = false;
	try {
		behavior(check);
	} catch(x) {
		fail = x;
	}

	console.log("  it", message);

	if (fail) {
		console.log("    ", "Failed!", fail);
	}
};

describe = function(suite, location, pageProps) {
	var run = function run(fn) {
		run.page.open(run.location, function(status) {
			if (status !== 'success') throw run.location + " not found.";
			console.log("\n"  + run.suite);
			fn(run.page);
		});
	};

	run.suite = suite;
	run.page = require('webpage').create();
	run.location = location;

	for (var p in pageProps) run.page[p] = pageProps[p];

	return { run: run };
}; 
