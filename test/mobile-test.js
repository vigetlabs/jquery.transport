/**
 * @name Mobile Test
 */

require("./lib/describe");

describe('Mobile View', './index.html', {
	viewportSize: { width: 320, height: 420 }
}).run(function(page) {

	it ("places #image1 in the dumping ground", function(check) {
		check.exists(page, "#dump #image1");
	});

	it ("places #image2 in the dumping ground", function(check) {
		check.exists(page, "#dump #image2");
	});

	it ("places #image3 in the dumping ground", function(check) {
		check.exists(page, "#dump #image3");
	});

	it ("places #image4 in the dumping ground", function(check) {
		check.exists(page, "#dump #image4");
	});

	phantom.exit();
});
