var list = document.querySelector("ul");

var node = document.createElement("LI");
var textnode = document.createTextNode("melon");
node.appendChild(textnode);

list.appendChild(node); //li아래 melon추가하기
list.removeChild(list.lastElementChild); //list에 있는 마지막 li를 제거한다