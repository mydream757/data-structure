/** 
 *  문제 설명 : 종이를 우에서 좌로만 접는다. 이때 접는 것은 무조건 종이가 나를 바라보는 방향으로 접는다.
 *  접힌 부분이 아래쪽(v모양)되어있다면 0, 위쪽(^모양)으로 되어있다면 1로 표시한다고 하였을 때,
 *  n번 종이를 접을 경우, 접힌 모양에 대한 표시를 좌에서 우로 배열에 넣어 반환하라.
 *  
 *  예시 :
 *   n = 1 : [0]
 *   n = 2 : [0,0,1]
 *   n = 3 : [0,0,1,0,0,1,1]
 *   n = 4 : [0,0,1,0,0,1,1,0,0,0,1,1,0,1,1]
 *      .....
 */


 /** 
  *  내가 생각한 해법 
  *  - 일단 종이를 계속해서 같은 방법으로 접는다면,
  *    접을 때마다 각각의 단면이 접히게 되는데, 이때 이것을 다시 펼칠 경우,
  *    종이는 결국 단면이 접히기 전을 기준으로 좌v 우 ^모양으로 접히게 되고,
  *    이 모양은 결국 왼쪽 가지는 0, 오른쪽 가지는 1만 나오는 이진트리의 형태로 나옴. 예를 들어
  *    n = 1이면,
  *         0
  *
  *    n = 2이면
  *         0
  *     0       1
  * 
  *    n = 3이면
  *         0
  *     0       1
  *  0    1   0   1
  *     
  * 
  *             0
  *     0               1
  *  0    1           0   1
  *0   1 0  1       0  1 0  1
  * ....
  * 
  *  재귀적으로, 각 노드에서 좌, 우에 대해서 array에 넣도록만 하면 되는데? edge가 있을 경우 재귀 호출,
  *  엣지가 없으면 자기 자신을 반환해서 재귀 종료.
  * 
  *  
  *  
  */

function solution(n){
    console.log('n:',n);
    let answer = [];

    function getArrayOfSubTree(value, depth){
        //자식 노드가 없으면 값을 리턴한다.
        let array = [];
        array.push(value);

        depth--;
        if(depth == 0){
            return array;
        }else{
            return [...getArrayOfSubTree(0, depth), ...array, ...getArrayOfSubTree(1, depth)];
        }
    }
    
    //n=0(접지 않을 경우)
    if(n!=0){
        answer = getArrayOfSubTree(0, n);
    }
    console.log('answer:', answer);

    return answer;
}
console.time("solution check");
solution(3);
console.timeEnd("solution check");