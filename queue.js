/**
 *  자바스크립트로 Queue를 구현한다.
 * 
 */

 class Queue{
     constructor(){
         this.array = [];
     }
     enqueue(item){
         this.array.push(item);
     }
     dequeue(){
         this.array.shift();
     }
 }
 
 let queue = new Queue();
 queue.enqueue(1);
 queue.enqueue(2);
 queue.enqueue(3);
 console.log("queue에 3개의 원소를 삽입했을 때:", queue);
 queue.dequeue();
 console.log("dequeue를 1회 실행했을 때", queue);