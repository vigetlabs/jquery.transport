# jQuery Tube

Pipe elements around to other containers based upon media queries.

## Usage

jQuery.Tube looks for the following pattern in a `data-tube` attribute
of an html element:

```
[media query]![selector]|[media-query]|selector
```

You can alias media queries by passing an object into the plugin
creation method:

```javascript
$(".element").tube({
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
	<img class="element" data-tube="tablet!#main-content|mobile!#footer">

</aside>
```

## Setup development and run test

```bash
brew install phantomjs
npm test
```
