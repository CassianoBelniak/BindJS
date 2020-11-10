const BIND_HTML_CLASS = 'bind-html';
const BIND_VALUE_CLASS = 'bind-value';
const BIND_ATTRIBUTE_CLASS = 'bind-attribute';
const BIND_STYLE_CLASS = 'bind-style';

var binds = {};

function bindValue(variableName, element, parentObj){
	var targetObj = binds;
	if (parentObj != undefined && parentObj != null){
		targetObj = parentObj;
	}
	Object.defineProperty(targetObj, variableName, { 
	   get: () => { return element.value; },
       set: (value) => { element.value = value; },
       configurable: true,
       enumerable: true
	})
}

function bindHTML(variableName, element, parentObj){
	var targetObj = binds;
	if (parentObj != undefined && parentObj != null){
		targetObj = parentObj;
	}
	Object.defineProperty(targetObj, variableName, { 
	   get: () => { return element.innerHTML; },
       set: (value) => { element.innerHTML = value; },
       configurable: true,
       enumerable: true
	})
}

function bindAttribute(variableName, element, attributeName, parentObj){
	var targetObj = binds;
	if (parentObj != undefined && parentObj != null){
		targetObj = parentObj;
	}
	Object.defineProperty(targetObj, variableName, { 
	   get: () => { return element[attributeName]; },
       set: (value) => { element[attributeName] = value; },
       configurable: true,
       enumerable: true
	})
}

function bindStyle(variableName, element, styleName, parentObj){
	var targetObj = binds;
	if (parentObj != undefined && parentObj != null){
		targetObj = parentObj;
    }
    console.log(element.style);
    console.log(styleName);
	Object.defineProperty(targetObj, variableName, { 
	   get: () => { return element.style[styleName]; },
       set: (value) => { element.style[styleName] = value; console.log(styleName) },
       configurable: true,
       enumerable: true
	})
}

function removeBind(bindName, object){
	var targetObj = binds;
	if (object != undefined && object != null){
		targetObj = object;
    }
    delete targetObj[bindName];
}

window.addEventListener("load",autoBind);
function autoBind(){
    autoBindHTML();
    autoBindValue();
    autoBindAttribute();
    autoBindStyle();
}

function autoBindHTML(){
    var elements = document.getElementsByClassName(BIND_HTML_CLASS);
    for (var c = 0; c < elements.length; c++){
        var element = elements[c];
        var variable = element.dataset.bindHtmlVariable;
        bindHTML(variable, element);
    }
}

function autoBindValue(){
    var elements = document.getElementsByClassName(BIND_VALUE_CLASS);
    for (var c = 0; c < elements.length; c++){
        var element = elements[c];
        var variable = element.dataset.bindValueVariable;
        bindHTML(variable, element);
    }
}

function autoBindAttribute(){
    var elements = document.getElementsByClassName(BIND_ATTRIBUTE_CLASS);
    for (var c = 0; c < elements.length; c++){
        var element = elements[c];
        var variable = element.dataset.bindAttributeVariable;
        var attribute = element.dataset.bindAttributeName;
        bindAttribute(variable, element, attribute);
    }
}

function autoBindStyle(){
    var elements = document.getElementsByClassName(BIND_STYLE_CLASS);
    for (var c = 0; c < elements.length; c++){
        var element = elements[c];
        var variable = element.dataset.bindStyleVariable;
        var style = element.dataset.bindStyleName;
        bindStyle(variable, element, style);
    }
}