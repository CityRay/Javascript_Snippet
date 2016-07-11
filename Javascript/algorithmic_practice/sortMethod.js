class SortMethod {
  
  // 快速排序(Quicksort), https://zh.wikipedia.org/wiki/%E6%9D%B1%E5%B0%BC%C2%B7%E9%9C%8D%E7%88%BE
  static quickSort(arr) {
    if(arr.length <= 1){
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex,1)[0];
    let left = [];
    let right = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    
    return this.quickSort(left).concat([pivot],this.quickSort(right));
  }
  
}
