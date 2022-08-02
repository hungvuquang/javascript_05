var list = document.getElementsByTagName('ul')[0];

var newItemLass = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLass.appendChild(newTextLast);
list.appendChild(newTextLast);

var newIteamFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newTextFirst.appendChild(newIteamFirst);
list.insertBefore(newIteamFirst, list.firstChild);

var listItems = document.querySelectorAll('li');

var i;
for (i=0; i< listItems.length; i++) {
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;

