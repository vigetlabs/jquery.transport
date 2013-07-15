/**
 * @name Check
 */

var check = module.exports = function(condition, message) {
	if (!condition) throw Error(message);
};

check.find = function(page, selector) {
	return page.evaluate(function(selector) {
		return !!document.querySelectorAll(selector).length;
	}, selector);
};

check.exists = function (page, selector, message) {
	if (!this.find(page, selector)) {
		throw Error(message || selector + " not found!");
	}
};
