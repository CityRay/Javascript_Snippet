/*
* @Title: 紀錄console用法及測試方法
* @Author: RayLin
* @Date:   2016-01-06 14:38:45
* @Last Modified by:   RayLin
* @Last Modified time: 2016-01-06 16:55:23
*/

// reference
//http://www.ruanyifeng.com/blog/2011/03/firebug_console_tutorial.html
//http://andyyou.logdown.com/posts/302114-practical-javascript-debug-tips
//https://developer.chrome.com/devtools/docs/console-api

// console.log
var site = 'root';
var domain = 'http://www.gugustore.com';
console.log('%s/%s', domain, site);

console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.debug("Back to the outer level");

// console table style
var animals = [
 { animal: 'Horse', name: 'Henry', age: 43 },
 { animal: 'Dog', name: 'Fred', age: 13 },
 { animal: 'Cat', name: 'Frodo', age: 18 }
];
console.table(animals);

// trace
function add(a,b){
  console.trace();
  return a+b;
}
add(5, 4);

//中斷點
debugger;

// assert
var a = 'assert';
console.assert(true, a);
console.assert(false, a);

//性能分析
function parent() {
  for (var i = 0; i < 10000; i++) {
    childA(i)
  }
}
function childA(j) {
  for (var i = 0; i < j; i++) {}
}
console.profile('性能分析');
parent();
console.profileEnd();


// javascript Heap & GC
// http://buildnewgames.com/garbage-collector-friendly-code/
window.performance.memory.totalJSHeapSize;
window.performance.memory.usedJSHeapSize
