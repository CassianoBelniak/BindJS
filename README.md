# BindJS
Automatically bind HTML elements to Javascript variables

### About
BindJS is a framework that allows html attribues from a page to be accessed through simple variables. It can be used to bind form values, DOM attibutes, style and even HTML content.

### Example
To access the DOM elements in a simple page, you had to do the following code:
```HTML
<div id="my-element"></div>
```
```js
var element = document.getElementById('my-element');
element.innerHTML = "<p>new content</p>";
```
With BindJS the code is simplified to:
```HTML
<div class="bind-html" data-bind-html-variable="myElement"></div>
```
```js
binds.myElement = "<p>new content</p>";
```

### Installation
Download the BindJS.min.js (or the BindJS.js, for debug) file, add to your project folder and add the following code on the HTML page header:
```html
<script src="pathTo/BindJS.js"></script>
```

### Usage
### Automatic binding:
All binding are avaliable through the ``binds`` variable (`` binds.myElement = 'value'``).
* HTML content:
Add the ``bind-html`` class to your DOM element, add the ``data-bind-html-variable`` attribute to set the variable name.
```html
<div class="bind-html" data-bind-html-variable="myElement"></div>
```
* Value property:
Add the ``bind-value`` class to your DOM element, add the ``data-bind-value-variable`` attribute to set the variable name.
```html
<input type="text" class="bind-value" data-bind-value-variable="myElement"></input>
```
* Element attribute:
Add the ``bind-attribute`` class to your DOM element. Add the ``data-bind-attribute-variable`` attribute to set the variable name. Add the ``data-bind-attribute-name`` to choose the attribute to bind.
```html
<div class="bind-html" data-bind-html-variable="myElement" data-bind-attribute-name="align"></div>
```
* Style attribute:
Add the ``bind-style`` class to your DOM element. Add the ``data-bind-style-variable`` attribute to set the variable name. Add the ``data-bind-style-name`` to choose the style to bind.
```html
<div class="bind-style" data-bind-style-variable="myElement" data-bind-style-name="color"></div>
```

### Manual binding
The Following commands are avaliable to manual binding:
```js
bindHTML(variableName, element, [variableContainer])
bindValue(variableName, element, [variableContainer])
bindAttribute(variableName, element, attributeName, [variableContainer])
bindStyle(variableName, element, styleName, [variableContainer])
```
* variableName: The variable that will be binded with the element.
* element: the element to bind.
* variableContainer: Optional. The object to nest the variables. The default is ``binds`` but any other object could be used. ``window`` also could be provided. to be able to access the variables without using a variable.

### Unbinding
To remove binding use:
```js
removeBind(bindName, [bindedObject]);
```

License
----

MIT
