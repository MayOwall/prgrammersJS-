document.write('2. Linked List(연결 리스트)<br>');
/* 추가와 삭제가 반복되는 로직이라면, 어떤 알고리즘이 적합할까?
- 배열(array)는 추가, 삭제가 반복되면 반복될수록 시간복잡도가 증가되므로, 위와같은 로직에서는 추천되지 않음.
- '연결 리스트' :
  추가, 삭제가 반복되는 로직에 적합한 알고리즘.
  각 요소를 포인터로 연결하여 관리하는 선형 자료구조.
  각 요소는 노드라고 불리움. (첫번째 노드 : head라고 불리움.)
  데이터 영역과 포인터 영역(다음 노드를 가르키는 역할)으로 구성되어 있음.

- 연결 리스트의 특징 :
  메모리가 허용하는 한, 요소를 제한없이 동적으로 추가할 수 있음.
  탐색에 선형시간(O(n))이 소요된다.
  요소를 추가하거나 제거하는데에는 상수시간(O(1))이 소요된다.
  구현에 3가지 방식이 존재(Single Linked List(단일연결리스트), Double Linked List(이중연결리스트), Circular linked List(환형연결리스트)).

- 배열과 연결리스트와의 차이점 :
    [배열] : 순차적으로 데이터가 들어감 > 메모리를 연속적으로 사용.
    ◻︎◻︎◻︎◻︎◻︎◻︎◻︎◻︎
    ◻︎◻︎◻︎◼︎◼︎◼︎◼︎◻︎
    ◻︎◻︎◻︎◻︎◻︎◻︎◻︎◻︎
    배열 요소를 삭제,추가하기 위해 선형시간(O(n)) 필요. (삭제된 요소의 공백을 메꾸기 위해, 뒷 요소들을 앞으로 끌어오는 행위를 n번 반복해야 하기 때문.)

    [연결리스트] : 순차적이지 않게 각 데이터가 퍼져 있음.
    퍼져 있는 메모리 영역을 알기 위해, 포인터를 사용하여 각 영역을 참조.
    ◻︎◻︎◻︎◻︎◻︎◼︎◻︎◻︎
    ◻︎◻︎◼︎◻︎◻︎◻︎◼︎◻︎
    ◻︎◻︎◻︎◻︎◼︎◻︎◻︎◻︎
    연결리스트 요소를 추가,삭제하기 위해 상수시간(O(1)) 필요. 
    (삭제할 요소의 전 요소의 포인터를 다음 요소로 이은다음, 해당 요소 삭제(단 1회만 실행));

- 연결리스트의 종류
  cf.연결 리스트의 핵심 로직 3가지 : 찾기, 연결, 삭제
  1. Singly Linked List (단일연결리스트)
    head(가장 첫번째 요소)에서 tail(가장 마지막 요소)까지 단방향으로 이어지는 리스트.
    가장 단순한 형태의 리스트
    tail : 포인터 영역이 null로 구성됨.(더이상 갈 곳이 없다는 의미)
    요소 찾기 : head에서부터 해당 데이터를 찾아 차례대로 포인터를 따라감. > 선형시간(O(n)) 필요!
    요소 추가 : (1)추가할 요소의 포인터를 다음 요소에 연결. (2)전 포인터를 추가한 요소에 연결 > 상수시간(O(n))필요!
    cf. 추가할 데이터의 위치를 찾기 위해 데이터를 찾는 로직을 작성하는 경우가 있음. 이럴경우 연결리스트 특성상 선형시간이 추가되기 때문에, 시간복잡도 감소를 위해서 가능한 요소 찾기에 관한 로직은 작성하지 않는 것이 좋음!
    요소 삭제 : (1)삭제할 요소의 전 요소의 포인터를 후 요소에 연결. (2)해당 요소 삭제 > 상수시간(O(1))필요!

  2. Doubly Linked List (이중연결리스트)
    양방향으로 이어지는 리스트.
    포인터 노드가 하나 더 추가 됨 > Singly Linked List보다 자료구조의 크기가 더 큼.(사실, 지금같이 큰 메모리를 사용하는 시대에는 크게 단점으로 작용되지는 않음.)
    요소 추가 : (1)추가 할 요소의 포인터를 다음 요소에 연결. (2)다음 요소의 포인터를 추가할 요소에 연결 (3) 전 요소의 포인터를 추가할 요소에 연결 (4)추가할 요소의 포인터를 전 요소에 연결 (상수시간(O(1))소요!)
    요소 삭제 : (1)삭제 할 요소의 이전 요소 포인터가 이후 요소를 가리키도록 연결. (2)이후 요소의 포인터가 이전 요소를 가리키도록 연결. (3)삭제할 요소 삭제.(상수시간(O(1))필요)
  
  3. Circular Linked list (환형연결리스트)
  SLL, DLL에서, tail의 노드가 head노드로 연결되는 리스트.
  메모리를 아껴 쓸 수 있다.
  중간에서 탐색을 하더라도, 환형구조 덕분에 한바퀴를 온전히 탐색할 수 있다.
*/

//연결 리스트 작성하기
//Node & SingleLinkedList 작성
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  };

  find(value) {
    let currNode = this.head;
    while(currNode.value !== value) {
      currNode = currNode.next;
    };
    return currNode;
  };

  append(newValue) {
    let newNode = new Node(newValue);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    };
  };

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  };

  remove(value) {
    let prevNode = this.head;
    while(prevNode !== value) {
      prevNode = prevNode.next;
    };
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    };
  };
};