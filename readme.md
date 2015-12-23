# jQuery Transport

Easily move elements between containers with media queries.

Uses [matchMedia](http://caniuse.com/#feat=matchmedia), if supported, or [Paul Irish's polyfill](https://github.com/paulirish/matchMedia.js) to move elements on resize.

![Screenshot](http://f.cl.ly/items/1J1s3S0P1D3b2w0W0J2K/sample.png)

## Downloads

* Development: [jquery.transport.js](https://raw2.github.com/vigetlabs/jquery.transport/master/src/jquery.transport.js)

* Production: [jquery.transport.min.js](https://raw2.github.com/vigetlabs/jquery.transport/master/build/jquery.transport.min.js)

## Usage

jQuery.Transport looks for the following pattern in a `data-transport` attribute
of an html element:

```html
<div data-transport="[media query key]![selector]|[media query key]![selector]...(and so on)"></div>
```

### Example

You can alias media queries by passing an object into the plugin
creation method:

```javascript
$('[data-transport]').transport({
	mobile: '(max-width: 500px)'
	tablet: '(max-width: 1024px)'
});
```

With the matching html:

```html
<main id="main"></main>
<footer id="footer"></footer>
<aside id="sidebar">

	<!-- The Important Stuff -->
	<div data-transport="tablet!#main|mobile!#footer">
		<p>
			Breakdown: at tablet, screen and (max-width: 1024px), this is transported to $("#main").
			At mobile, screen and (max-width: 500px), this is transported to $("#footer").
		</p>
	</div>

</aside>
```

### Demo

View this repo's [demo page](http://vigetlabs.github.io/jquery.transport/demo/).

## Setup development and run tests

```bash
brew install phantomjs
npm test
```

***

<a href="http://code.viget.com">
  <img src="http://code.viget.com/github-banner.png" alt="Code At Viget">
</a>

Visit [code.viget.com](http://code.viget.com) to see more projects from [Viget.](https://viget.com)
