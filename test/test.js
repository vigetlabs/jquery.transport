var casper = require('casper').create();

casper.start('index.html', function() {
	this.echo(this.getTitle());
});

casper.run();
