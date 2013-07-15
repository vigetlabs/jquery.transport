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
			docElem.removeChild( fakeBody );

			return {
				matches: bool,
				media: q
			};

		};

	}( document ));

  
	var Tube = function(el) {
		this.$el = $(el);
    
		this.home = this.$el.parent();
		this.queries = this.getQueries();
    
		this.check();
    
		$window.on("resize:tube", this.check.bind(this));
	};
  
	// Aliases allow for cleaner markup, for example:
	// <img src="..." data-tube="tablet!#tube-id" />
	Tube.aliases = {
		tablet: "screen and (max-width: 1023px)",
		mobile: "screen and (max-width: 600px)"
	};  
  
	Tube.prototype = {
      
		check: function() {
			var destination = this.home;
			var queries = this.queries;
			var len = queries.length;

			for (var i = 0; i < len; i++) {      
				if (matchMedia(queries[i].rule).matches) {
					destination = queries[i].element;
					break;
				}        
			}

			this.$el.appendTo(destination);

			// Send a warning if the tub selected doesn't match, this will
			// happen if the selector picked doesn't exist
			if (this.$el.parent().is(destination) === false) {
				console.warn("Tube was not found:", destination);
			}
		},

		getQueries: function() {
			var rules = this.$el.data("tube");

			return $.map(rules.split("|"), function(rule) {
				var parts = rule.split("!");
				var query = parts[0];
				var tube = parts[1];

				query = Tube.aliases[query] || query;

				return { rule: query, element: tube };
			});
		}

	};

	// Scroll spy
	$window.on("resize", function() {
		clearTimeout(Tube.timeout);
    
		Tube.timeout = setTimeout(function() {
			$window.trigger("resize:tube");
		}, 250);    
	});

  
	// Boot
	$.fn.tube = function() {
		this.each(function() {
			return $(this).data("tube", new Tube(this));
		});
	};
  
	$("[data-tube]").tube();
  
}(window.jQuery));
