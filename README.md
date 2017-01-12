## 2017. 1. 11.

# MiniProject (3~7)

### 3. stawberry 아래에 새로운 과일 추가 , 삭제

```javascript
var list = document.querySelector("ul");

var node = document.createElement("LI");
var textnode = document.createTextNode("melon");
node.appendChild(textnode);

list.appendChild(node); //li아래 melon추가하기
list.removeChild(list.lastElementChild); //list에 있는 마지막 li를 제거한다
```


### 4. 바나나와 오렌지 사이에 새로운 과일 추가.

```javascript
var list = document.querySelector("ul");

var node = document.createElement("LI");
var textnode = document.createTextNode("melon");
node.appendChild(textnode);

list.insertBefore(node, list.childNodes[4]); 
//2,3번 사이에 추가된다 
//text, node, text, node, ... 순이라 (원하는 위치)*2 를 []안에 넣는다
```


### 5. apple을 grape 와 stawberry 사이에 옮기기.

```javascript
var list = document.querySelector("ul"); //문서에서 ur을 찾아서 list에 저장한다

list.removeChild(list.firstElementChild); //list에 있는 첫번째 li를 제거한다

var node = document.createElement("LI"); //<li></li>
var textnode = document.createTextNode("apple"); // <li>apple</li>

node.appendChild(textnode); //node에 textnode를 추가한다

list.insertBefore(node, list.childNodes[8]); //4(8/2)번째 li에 추가한다
```


### 6. class 가 'red'인 노드만 삭제합니다.

```javascript
var list = document.querySelector("ul:nth-child(2)"); //문서에서 두번째 ul을 찾아서 list에 저장한다
var red = list.querySelectorAll(".red"); //list에서 class가 red인 항목을 찾아 red에 저장한다

list.removeChild(red[0]); //list에 있는 첫번째 red항목을 삭제한다
list.removeChild(red[1]); //list에 있는 두번째 red항목을 삭제한다
```


### 7. section 태그 자손 중에 blue 라는 클래스를 가진 노드가 있다면, 그 하위에 있는 h2 노드를 삭제합니다.

```javascript
var section = document.querySelector("section");
var blue = document.querySelector("section .blue");
var h2 = document.querySelector("section h2");

if(blue !== null){
  section.removeChild(h2);
}
```