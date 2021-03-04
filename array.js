/**  
 *  array와 객체가 index를 통한 삽입 시 어느 정도 성능의 차이를 보이는 지 테스트
 * 
 */



let array2 = [];
console.time("array insert by index");
for(let j=0; j<10000000; j++){
    array2[j] = j;
}
console.timeEnd("array insert by index");

let array = [];
console.time("array insert by push method");
for(let k=0; k<10000000; k++){
    array.push(k);
}
console.timeEnd("array insert by push method");

let obj = {};
console.time("object insert by index");
for(let i=0; i<10000000; i++){
    obj[i] = i;
}
console.timeEnd("object insert by index");