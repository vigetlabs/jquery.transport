/**
 * @name jQuery.Transport
 * @desc Move elements to other containers with matching media queries.
 * @author Nate Hunzaker, Viget Labs
 */

(function($) {

	var $window = $(window);

	/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
	var matchMedia = window.matchMedia = window.matchMedia || (function( doc, undefined ) {

		"use strict";

		var bool;
		var docElem = doc.documentElement;
		var refNode = docElem.firstElementChild || docElem.firstChild;
		// fakeBody required for <FF4 when executed in <head>
		var fakeBody = doc.createElement( "body" );
		var div = doc.createElement( "div" );

		div.id = "mq-test-1";
		div.style.cssText = "position:absolute;top:-100em";
		fakeBody.style.background = "none";
		fakeBody.appendChild(div);

		return function(q){

			div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

			docElem.insertBefore( fakeBody, refNode );
			bool = div.offsetWidth === 42;
			fakeBody.parentNode.removeChild( fakeBody );

			return {
				matches: bool,
				media: q
			};

		};

	}( document ));


	var Transport = function(el, aliases) {
		this.$el = $(el);

		// defaults for a single element
		this.$contents = this.$el;
		this.$home = this.$el.parent();

		// or transport the contents of this element
		if (this.$el.children().length) {
			this.$contents = this.$el.children();
			this.$home = this.$el;
		}
		this.aliases = $.extend({}, Transport.aliases, aliases);
		this.queries = this.getQueries();

		this.check();

		$window.on("resize:transport", $.proxy(this.check, this));
	};

	// Aliases allow for cleaner markup, for example:
	// <img src="..." data-transport="tablet!#container-id" />
	Transport.aliases = {};

	Transport.prototype = {

		ship: function(destination) {
			var $destination = $(destination);

			// Send a warning if the tub selected doesn't match, this will
			// happen if the selector picked doesn't exist
			if ($destination.length === 0) {
				console.warn("Transport location was not found:", destination);
			}

			if (!$destination.has(this.$el).length) {
				this.$contents.appendTo(destination);
				this.$el.trigger("transport", $destination);
			}
		},

		check: function() {
			var destination = this.$home;
			var queries = this.queries;
			var len = queries.length;

			for (var i = 0; i < len; i++) {
				if (matchMedia(queries[i].rule).matches) {
					destination = queries[i].element;
				}
			}

			this.ship(destination);
		},

		getQueries: function() {
			var rules = this.$el.data("transport") || "";
			var aliases = this.aliases;

			return $.map(rules.split("|"), function(rule) {
				var parts = rule.split("!");
				var query = parts[0];
				var tube = parts[1];

				query = aliases[query] || query;

				return { rule: query, element: tube };
			});
		}

	};

	// Scroll spy
	$window.on("resize", function() {
		clearTimeout(Transport.timeout);

		Transport.timeout = setTimeout(function() {
			$window.trigger("resize:transport");
		}, 250);
	});


	// Boot
	$.fn.transport = function(aliases) {
		this.each(function() {
			return $(this).data("pluginTransport", new Transport(this, aliases));
		});
	};

}(window.jQuery));
