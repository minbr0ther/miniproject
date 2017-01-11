var list = document.querySelector("ul");

var node = document.createElement("LI");
var textnode = document.createTextNode("melon");
node.appendChild(textnode);

list.insertBefore(node, list.childNodes[4]); 
//2,3번 사이에 추가된다 
//text, node, text, node, ... 순이라 (원하는 위치)*2 를 []안에 넣는다