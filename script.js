var list = document.getElementById('list');
var add = document.getElementById('addElem');

   function checkOnclickEvent() {
    var element = document.createElement('li');
    var listLength = list.getElementsByTagName('li').length;
    console.log(listLength);
      element.innerHTML = "item " + listLength;

      if (listLength >= 9) {
        alert("alert");
        return;
      }
    console.log(element);
    list.appendChild(element);
 }

add.addEventListener('click', checkOnclickEvent);
