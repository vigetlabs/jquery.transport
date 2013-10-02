/**
 * @name Tablet Test
 */

require("./lib/describe");

describe('Tablet View', './index.html', {
	viewportSize: { width: 1023, height: 768 }
}).run(function(page) {

	it ("places #image1 in the header portal", function(check) {
		check.exists(page, "#header-portal #image1");
	});

	it ("places #image2 in the main portal", function(check) {
		check.exists(page, "#main-portal #image2");
	});

	it ("places #image3 in the main portal", function(check) {
		check.exists(page, "#main-portal #image3");
	});

	it ("places #image4 in the sidebar", function(check) {
		check.exists(page, "#footer-portal #image4");
	});

	it ("places #child1content in the sidebar", function(check) {
		check.exists(page, "#footer-portal #child1content");
	});

	it ("places #child2content in the sidebar", function(check) {
		check.exists(page, "#footer-portal #child2content");
	});

	phantom.exit();
});
