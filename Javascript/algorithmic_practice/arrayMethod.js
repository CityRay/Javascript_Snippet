class ArrayMethod {
  
  // 過濾 Array 並刪除 Array 中的項目
  static filterDestroy(arr, ...args) {
    // console.log(args);
    return arr.filter(function(el){
        return args.indexOf(el) === -1;
    });
  }

}
