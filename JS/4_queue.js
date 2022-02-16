/*
Queue(큐) : 
  First in First out이라는 개념을 가진 선형구조.(먼저 들어간 것이 먼저 나옴. 대기열 같은 느낌)
  'Linear Queue'와 'Circular Queue' 두 가지 종류가 존재.
  Front : Queue의 맨 앞 요소.
  Rear : Queue의 맨 뒤 요소.
  EnQueue : Queue에 요소를 추가하는 것.
  DeQueue : Queue에 요소를 빼는 것.
*/

//Linear Queue(선형 큐) :
//  2가지 방식으로 구현 가능.
/*    1. Array(배열) :
      DeQueue, EnQueue를 반복하면서 생긴 앞쪽 공간을 메꾸기 위해 실행되는 동작에서 선형시간이 소요됨.
      >>매우 큰 시간 소요(비추천). 
      >>그러나 코딩테스트에서는 정확성을 위해 배열 추천.
      */
      //[Queue 알고리즘을 직접 만들어보기.]      
      class QueueArray {
        constructor() {
          this.queue = [];
          this.front = 0;
          this.rear = 0;
        };

        enqueue(value) {
          this.queue[this.rear++] = value;
        };

        dequeue() {
          const value = this.queue[this.front];
          delete this.queue[this.front];
          this.front += 1;
          return value;
        };

        peek() {
          return this.queue[this.front];
        };

        size() {
          return this.rear - this.front;
        };
      };

/*    2. Linked List(연결리스트) :
      index에 대한 고민을 따로 하지 않아도 되기 때문에, array보다 추천되는 방식임. 
      */
     //[Queue 알고리즘 직접 만들어보기(by Linked List)]
      class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        };
      };

      class QueueLinkedList {
        constructor() {
          this.head = null;
          this.tail = null;
          this.size = 0;
        };

        enqueue(newValue) {
          const newNode = new Node(newValue);
          if (this.head === null) {
            this.head = this.tail = newNode;
          } else {
            this.tail.next = newNode;
            this.tail = newNode;
          };
          this.size += 1;
        };

        dequeue() {
          const value = this.head.value;
          this.head = this.head.next;
          this.size -= 1;
          return value;
        };

        peek() {
          return this.head.value;
        };
      };

      const queue2 = new QueueLinkedList();
      console.log(queue2);
      queue2.enqueue(`en1`);
      queue2.enqueue(`en2`);
      console.log(queue2);
      queue2.dequeue();
      console.log(queue2);
      console.log(queue2.peek());

      //shift함수는 쓰지 말 것!!
      //shift는 선형시간이 소요되기 때문에!!

/*Circular Queue(환형 큐) :
  처음과 끝이 이어진 큐. Linked List로 구현했을 때 이점이 없다.
  linear와 다른 점 : 
    maxsize를 받아 queue의 크기를 제한함.
    rear.front가 크기를 벗어날 경우, 0으로 순환시킴.
    환형 큐가 꽉 찼는지 확인하는 함수도 필요함.
  코딩테스트에서 환형큐가 사용되는 경우는 극히 적기 때문에, 꼭 외워야 할 필요는 없음.
*/
// 환형 큐 알고리즘 만들어보기
class QueueCircular {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  };

  enqueue(value) {
    if(this.isFull()) {
      console.log(`Queue is full`);
      return;
    };
    this.queue[this.rear] = value;
    this.rear = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  };

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  };

  isFull() {
    return this.size === this.maxSize;
  };

  peek() {
    return this.queue[this.front];
  };
};

const queue3 = new QueueCircular(4);

      

