/*
* @Author: RayLin
* @Date:   2016-01-06 17:01:54
* @Last Modified by:   RayLin
* @Last Modified time: 2016-01-22 12:04:33
*/

// 判斷http or https
var http = 'https:' == document.location.protocol ? false : true;

// JS 類型檢測
var obj = {key:'value'},
        arr = ["hello","javascript"],
        fn  = function(){},
        str = "hello js",
        num = 55,
        bool = true,
        User = function(){},
        user = new User();

/*typeof test*/
console.log(typeof obj);    //object
console.log(typeof arr);    //object
console.log(typeof fn);     //function
console.log(typeof str);    //string
console.log(typeof num);    //number
console.log(typeof bool);   //boolean
console.log(typeof user);   //object
/*constructor test*/
console.log(obj.constructor == Object); //true
console.log(arr.constructor == Array);  //true
console.log(str.constructor == String); //true
console.log(num.constructor == Number); //true
console.log(bool.constructor == Boolean);//true
console.log(user.constructor == User);  //true
/*instanceof*/
console.log(obj instanceof Object);
console.log(arr instanceof Object);

// 字首字母轉為大寫
var fistLetterUpper = function(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
};
console.log(fistLetterUpper('hello'));      //Hello
console.log(fistLetterUpper('good'));       //Good

//判斷是否是合理的IP
function isIP(str) {
  var pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  return pattern.test(str);
}

//URL 驗證
function isURL(str) {
    var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
            + "(([0-9]{1,3}.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
            + "|" // 允许IP和DOMAIN（域名）
            + "([0-9a-z_!~*'()-]+.)*" // 域名- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." // 二级域名
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // 端口- :80
            + "((/?)|"
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    var re = new RegExp(strRegex);

    return re.test(str);
}

// QQ
var isQQ = function(str) {
    /**
    *@descrition:
    * 1-9開頭，最少5位。
    */
    var pattern = /^[1-9][0-9]{4,}$/
    return pattern.test(str);
}

// 電話號碼判斷
var isfixedphone = function(str) {
    /**
    *
    * @desctition:规则->區號2位，號碼7-8位,可以有分機(3-4碼)
    * 格式如下："02-29888888-123"
    *
    */
    var pattern =  /^\d{2}-\d{7,8}(-\d{3,4})?$/;
    return pattern.test(str);
}

//email
var isEmail = function(str){
    /**
    * 1.a-z、A-Z、0-9開頭，最小長度為1
    * 2.如果左側部分包含-、_、.則前面須包含一個數字or字母。
    * 3.@ 符號必填
    * 4.右側部份，第一部份為域名地址(可包含符號 -、_、.)，第二部份為域名后缀，最短為2位，最長為7位
    */
    var pattern = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,7}$/;
    return pattern.test(str);
}


/**
*
* @description: 判斷傳入值的長度是否有效
* @param: minL->最小長度
* @param: maxL->最大長度
* @param: str-> 待驗證的值
* @return : true 表示通過
*
*/
var isAvaiableLength = function(minL,maxL,str){
    return (str.length >= minL && str.length <= maxL) ? true : false;
}

// 字串是否為空值
var isEmpty = function (str) {
    //空引用  空字符串  空输入
    return str === null || typeof str === "undefined" || str.trim() == "" ? true : false;
}

// 是否為全中文
var isChinese = function (str) {
    var pattern = /^[\u0391-\uFFE5]+$/g;
    return pattern.test(str);
}

// 是否為數值
var isNumber = function(o) {
    return !isNaN(o);
}

// 隨機產生文字
function generateRandomAlphaNum(len) {
    var rdmString = "";
    //toString接受的參數表示進制，默認為10進制。36進制為0-9 a-z
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}

// 截短文字
var cutstr = function(str, len) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/g,    //中文字符匹配
        strre = "";

    for (var k = 0; k < str.length; k++) {
        if (icount < len ) {
            temp = str.substr(k, 1);
            if (temp.match(patrn) == null) {
                icount = icount + 1;
            } else {
                icount = icount + 2;
            }
            strre += temp;
        } else {
            break
        }
    }
    return strre + "...";
}
