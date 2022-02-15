document.write('3. Stack(스택)');
/*
Stack(스택) :
  Last in First out이라는 개념을 가진 선형자료구조.
  cf. 'Last in First out' : 나중에 들어간 요소가 먼저 나옴. 혹은 먼저 들어간 요소가 나중에 나오는 개념.(프링글스 통에 감자칩을 쌓는거라고 생각하면 편하다.)
  - Top : stack의 맨 위에 있는 요소.
  
Stack의 동작 원리 :
  - Push : 요소를 stack에 넣는 행위.
  - Pop : 요소를 stack에서 빼는 행위.
  cf. 가장 맨 위에 있는 요소만 컨트롤하면 되기에, 구현또한 그렇게 어렵지 않음.

Stack 자료구조를 이용하는 대표적인 예 :
  1. Stack memory : 함수 호출을 할 때 stack memory를 통해 함수들이 하나하나 push되며, push후 실행된 함수는 pop되는 형식을 띈다.

Stack을 코드로 표현하는 방법 :
  1. Array로 표현하기
  2. Linked List로 표현하기 (이 경우, Linked List의 head가 Stack의 top이라고 할 수 있음.)
*/  

//JS에서 Stack을 사용하는 방법 :
/*  1. Array로 구현하는 방법
  - 사실 JS의 Array에는 이미 push()와 pop()이 존재하기 때문에 크게 할 일이 없다. */
const stack1 = [];
stack1.push("push1");
console.log(stack1);
stack1.push("push2", "push3");
console.log(stack1);

stack1.pop();
console.log(stack1);

/* 2. Linked List로 구현하는 방법
  - 기존의 Linked List코드에서 head를 top으로 지정하고, 제거로직은 오직 head만 제거하도록 코딩하면 된다. */

class stackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  };
  push(value) {
    const node = new stackNode(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  };
  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  };
  size() {
    return this.size;
  };
};

const stack2 = new Stack();
stack2.push("push1");
console.log(stack2);
