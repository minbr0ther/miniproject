1. removeChild()

var list = document.querySelector("ul"); //문서에서 ur을 찾아서 list에 저장한다

list.removeChild(list.lastElementChild); //list에 있는 마지막 li를 제거한다


/*********************************************************/


2. appendChild()

var list = document.querySelector("ul");

var node = document.createElement("LI");
var textnode = document.createTextNode("오렌지");
node.appendChild(textnode);

list.appendChild(node);


/*********************************************************/


