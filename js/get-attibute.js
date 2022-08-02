var firstItem = document.getElementById('one');
if (firstItem.hasAttributes('class')) {
    var attr = firstItem.getAttribute('class');
    var el = document.getElementById('scriptResults');
    var el = document.getElementById('scriptResults');
    el.innerHTML='<p>The first item has a class name: ' + attr + '</p>';
    
}