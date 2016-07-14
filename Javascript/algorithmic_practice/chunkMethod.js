// chunk(["a", "b", "c", "d"], 2) should be [["a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 3) should be [[0, 1, 2], [3, 4, 5]]
// chunk([0, 1, 2, 3, 4, 5], 2) should be [[0, 1], [2, 3], [4, 5]]
// chunk([0, 1, 2, 3, 4, 5], 4) should be [[0, 1, 2, 3], [4, 5]]
// chunk([0, 1, 2, 3, 4, 5, 6], 3) should be [[0, 1, 2], [3, 4, 5], [6]]
// chunk([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should be [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

// Method 1
function chunk(arr, size) {
  var tempArr = [],
      newArr=[],
      len = arr.length;
  if (len <= size || size <=0){
    return arr;
  } else {
    for (var i = 0; i < len; i += size) {
      tempArr = arr.slice(i, i + size);
      // arr=[0,1,2,3,4,5,6,7,8] && size = 4 && arr.length = 9
      // 1st => i = 0 => yes => i+=size=4 => arr.slice(0,4)=>[0,1,2,3]
      // 2st => i = 4 => yes => i+=size=8 => arr.slice(4,8)=>[4,5,6,7]
      // 3st => i = 8 => yes => i+=size=12=> arr.slice(8,12)=>[8]
      // 4st => i = 12=> no
      newArr.push(tempArr);
    }
  }
  return newArr;
}

// Method 2
function chunk (arr, size) {

  var tempArr = [],
      newArr = [],
      i = 0,
      len = arr.length;

  while (i < len) {
    tempArr = arr.slice(i, i += size);
    newArr.push(tempArr);
    // arr=[0,1,2,3,4,5,6,7,8] && size = 4 && arr.length = 9
    // 1st => i = 0 => yes => arr.slice(0, 4) => tempArr = [0,1,2,3] => arr = [0,1,2,3,4,5,6,7,8] (i = 4, size=4)
    // 2st => i = 4 => yes => arr.slice(4, 8) => tempArr = [4,5,6,7] => arr = [0,1,2,3,4,5,6,7,8] (i = 8, size=4)
    // 3st => i = 8 => yes => arr.slice(8,12) => tempArr = [8] => arr = [0,1,2,3,4,5,6,7,8] (i = 12, size = 4)
    // 4st => i = 12 => no
  }

  return newArr;
}

// Method 3
function chunk (arr, size) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      newArr.unshift([]);
    }
    newArr[0].push(arr[i]);
  }

  newArr.reverse();
  return newArr;
}
