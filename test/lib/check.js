/**
 * @name Check
 */

module.exports =  {

	find: function(page, selector) {
		return page.evaluate(function(selector) {
			return !!document.querySelectorAll(selector).length;
		}, selector);
	},

	exists: function (page, selector, message) {
		if (!this.find(page, selector)) {
			throw Error(message || selector + " not found!");
		}
	}
};
