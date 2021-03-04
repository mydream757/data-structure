/**
 *  자바스크립트로 리스트를 구현한다.
 * 
 * 
 */
class Node{
    constructor(value){
        this.value = value;
        this.next;
    }
    getValue(){
        return this.value;
    }
    getNext(){
        return this.next;
    }
}


function createLinkedList(){
    let head = new Node();
    return head;
}

function pushNode(head, node){
    //가장 마지막 노드를 찾는다.
    let currentNode = head;
    while(currentNode.next!=undefined){
        currentNode = currentNode.next;
    }
    currentNode.next = node;
}

function insertToIndexOf(index, head, node){
    let i = index;
    let currentNode = head;
    while(i>0){
        if(currentNode.next == undefined) break;
        currentNode = currentNode.next;
        i--;
        
    }
    node.next = currentNode.next;
    currentNode.next = node;
}
function deleteNode(index, head){
    let i = index;
    let currentNode = head;
    while(i>0){
        if(currentNode.next == undefined) break;
        currentNode = currentNode.next;
        i--;
    }
    let target = currentNode.next;
    currentNode.next = target.next;
    delete target;
            
}
function showAll(head){
    let currentNode = head;
    while(currentNode.next!=undefined){
        currentNode = currentNode.next;
        console.log(currentNode.value);
    }

}

let head = createLinkedList();
pushNode(head, new Node(1));
pushNode(head, new Node(2));
pushNode(head, new Node(3));
console.log('삽입 이후');
showAll(head);
deleteNode(1, head);
console.log('삭제 이후');
showAll(head);
insertToIndexOf(1, head, new Node(5));
console.log('삽입 이후');
showAll(head);