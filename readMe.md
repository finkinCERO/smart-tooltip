# How to use

This tooltip is working smart. It positions itself intelligently in view depending on the position of an element

## import style

example

``` html
<link rel="stylesheet" href="./tooltip/tooltip.css">
```

## import javascript file

import javascript file at the end of `body` -tag

``` html
<body>
    <!-- HERE IS YOUR HTML -->
    <!-- Insert javascript tooltip right before body is closing: -->
    <script src="./tooltip/tooltip.js"></script>
</body>
```

## set tooltip via html
- add class `tooltip-item` to an element
- add attribute `tooltip="your-text"` to an element
example:
```html
<body>
    <div class="tooltip-item" tooltip="Your tooltip text">Hello World</div>
    <!-- Insert javascript tooltip right before body is closing: -->
    <script src="./tooltip/tooltip.js"></script>
</body>
```

## set tooltip via javascript
- requirements: `tooltip.js` should be loaded & style is inserted

example:
```js
function example(){
    let body = document.getElementsByTagName("BODY")[0]
    let div = document.createElement("div")
    div.textContent = "Example"
    tooltip(div, "My tooltip text")
    body.appendChild(div)
}
function anotherExample(){
    let myElement = document.getElementById("example-element")
    tooltip(myElement, "My tooltip text")
}
```

## change style of tooltip

you can change style of tooltip by editing `tooltip.css`

example (white tooltip):
```css
.tooltip {
    position: absolute;
    height: 2em;
    width: auto;
    background: white;
    color: black;
    z-index: 1000000;
    padding: 3px;
    font-weight: 600;
    border: 1px solid #333;
}
```
