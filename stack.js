/**
 *  자바스크립트로 스택을 구현한다.
 * 
 */

 class Stack{
    constructor(){
        this.array = [];
    }
    push(item){
        this.array.push(item);
    }
    pop(item){
        this.array.pop();
    }
 }

 let stack = new Stack();
 stack.push(1);
 stack.push(2);
 stack.push(3);
 console.log("스택에 3개의 원소를 push:", stack);
 stack.pop();
 console.log("스택의 pop을 1회 실행 후:", stack);