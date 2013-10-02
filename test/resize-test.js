/**
 * @name Resize Test
 */

require("./lib/describe");

describe('Resize Test', './index.html', {
	viewportSize: { width: 1023, height: 768 }
}).run(function(page) {

	page.viewportSize = { width: 5000, height: 768 };

	setTimeout(function() {

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

		it ("places #child1content in the sidebar", function(check) {
			check.exists(page, "#sidebar #child1content");
		});

		it ("places #child2content in the sidebar", function(check) {
			check.exists(page, "#sidebar #child2content");
		});

		it ("places #child1content before #child2content in the sidebar", function(check) {
			var firstID = page.evaluate(function() {
				return document.querySelectorAll("#sidebar .child-content")[0].id;
			});
			var expectedID = "child1content";
			if (firstID !== expectedID) {
				throw Error("Found " + firstID + ". Expected " + expectedID + ".");
			}
		});

		phantom.exit();

	}, 500);

});
