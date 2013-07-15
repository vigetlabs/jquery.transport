# jQuery Transport

Move elements to other containers based upon media queries.

![Screenshot](http://f.cl.ly/items/1J1s3S0P1D3b2w0W0J2K/sample.png)

## Usage

jQuery.Tube looks for the following pattern in a `data-transport` attribute
of an html element:

```
<element data-transport="[media query]![selector]|[media-query]![selector]...(and so on)"></element>
```

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
	<img class="element" data-transport="tablet!#main-content|mobile!#footer">

</aside>
```

## Setup development and run test

```bash
brew install phantomjs
npm test
```
