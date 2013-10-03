# jQuery Transport

Easily move elements between containers with media queries.

Uses [matchMedia](http://caniuse.com/#feat=matchmedia), if supported, or [Paul Irish's polyfill](https://github.com/paulirish/matchMedia.js) to move elements on resize.

![Screenshot](http://f.cl.ly/items/1J1s3S0P1D3b2w0W0J2K/sample.png)

## Usage

jQuery.Transport looks for the following pattern in a `data-transport` attribute
of an html element:

```
<element data-transport="[media query]![selector]|[media-query]![selector]...(and so on)"></element>
```

### Example

You can alias media queries by passing an object into the plugin
creation method:

```javascript
$(".element").transport({
	mobile: "screen and (max-width: 500px)"
	tablet: "screen and (max-width: 1024px)"
})
```

With the matching html:

```html
<main id="main"></main>
<footer id="footer"></footer>
<aside id="sidebar">

	<!-- The Important Stuff -->
	<div class="element" data-transport="tablet!#main|mobile!#footer">
		<h2>Content to transport</h2>
		<p>
			Breakdown: at tablet, screen and (max-width: 1024px), this is transported to $("#main").
			At mobile, screen and (max-width: 500px), this is transported to $("#footer").
		</p>
	</div>

</aside>
```

## Setup development and run tests

```bash
brew install phantomjs
npm test
```
