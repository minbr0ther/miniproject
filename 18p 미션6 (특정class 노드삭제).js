var list = document.querySelector("ul:nth-child(2)"); //문서에서 두번째 ul을 찾아서 list에 저장한다
var red = list.querySelectorAll(".red"); //list에서 class가 red인 항목을 찾아 red에 저장한다

list.removeChild(red[0]); //list에 있는 첫번째 red항목을 삭제한다
list.removeChild(red[1]); //list에 있는 두번째 red항목을 삭제한다