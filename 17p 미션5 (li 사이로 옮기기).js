var list = document.querySelector("ul"); //문서에서 ur을 찾아서 list에 저장한다

list.removeChild(list.firstElementChild); //list에 있는 첫번째 li를 제거한다

var node = document.createElement("LI"); //<li></li>
var textnode = document.createTextNode("apple"); // <li>apple</li>

node.appendChild(textnode); //node에 textnode를 추가한다

list.insertBefore(node, list.childNodes[8]); //4(8/2)번째 li에 추가한다