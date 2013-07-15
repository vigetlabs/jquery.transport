/**
 * @name Desktop Test
 */

require("./lib/describe");

describe('Desktop View', './index.html', {
	viewportSize: { width: 1200, height: 768 }
}).run(function(page) {

	it ("places #image1 in the sidebar", function(check) {
		check.exists(page, "#sidebar #image1");
	});

	it ("places #image2 in the sidebar", function(check) {
		check.exists(page, "#sidebar #image2");
	});

	it ("places #image3 in the sidebar", function(check) {
		check.exists(page, "#sidebar #image3");
	});

	it ("places #image4 in the sidebar", function(check) {
		check.exists(page, "#sidebar #image4");
	});

	phantom.exit();
});
