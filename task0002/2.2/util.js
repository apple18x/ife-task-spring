// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return (typeof arr =='object') && arr.constructor == Array; 
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return (typeof fn=='function') && fn.constructor == Function; 

}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var result;
    var oClass = isClass(src);

    //确定result的类型
    if(oClass==="Object"){
        result={};
    }else if(oClass==="Array"){
        result=[];
    }else{
        return src;
    }

    for(key in src){
        var copy = src[key];
        if(isClass(copy) == "Object"){
            result[key] = arguments.callee(copy);//递归调用
        }else if(isClass(copy)=="Array"){
            result[key] = arguments.callee(copy);
        }else{
            result[key] = src[key];
        }
    }

    return result;
}

//返回传递给他的任意对象的类
function isClass(o){
    if(o===null) return "Null";
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray1(arr){
    var tempArr = []; //一个新的临时数组
    for(var i = 0; i < arr.length; i++) //遍历当前数组
    {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (tempArr.indexOf(arr[i]) == -1) 
            tempArr.push(arr[i]);
    }
    return tempArr;
}

//只适用于数字数组
function uniqArray2(arr){
    var n = {}; //n为hash表
    var r = []; //r为临时数组
    for(var i = 0; i < arr.length; i++) //遍历当前数组
    {
        console.log(n[arr[i]]);
        if (!n[arr[i]]) //如果hash表中没有当前项
        {
            n[arr[i]] = true; //存入hash表
            r.push(arr[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
}

function uniqArray3(arr){
    var n = [this[0]]; //结果数组
    for(var i = 1; i < this.length; i++) //从第二项开始遍历
    {
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (this.indexOf(this[i]) == i) n.push(this[i]);
    }
    return n;
}
/*

    其中第1种和第3种方法都用到了数组的indexOf方法。此方法的目的是寻找
存入参数在数组中第一次出现的位置。很显然，js引擎在实现这个方法的时候
会遍历数组直到找到目标为止。所以此函数会浪费掉很多时间。 而第2中方法
用的是hash表。把已经出现过的通过下标的形式存入一个object内。下标的引
用要比用indexOf搜索数组快的多。

*/


function uniqArray4(arr)
{
    arr.sort();
    var re=[arr[0]];
    for(var i = 1; i < arr.length; i++)
    {   
        //先把数组排序，然后比较相邻的两个值。 
        //最终测试的结果是此方法运行时间平均是第二种方法的三倍左右，不过比第一种和第三种方法快了不少。
        if( arr[i] !== re[re.length-1])
        {
            re.push(arr[i]);
        }
    }
    return re;
}


// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function LTrim(str)  
{  
    var i;  
    for(i = 0; i<str.length; i++)  
    {   
        //  从前往后，直到找到第一个非空格字符位置，跳出
        if(str.charAt(i)!=" ")
            break;  
    }  
    //前面的空格截掉
    str=str.substring(i,str.length);  
    return str;  
}  

function RTrim(str)  
{  
    var i;  
    for(i = str.length-1; i >= 0; i--)  
    {  
        //  从后往前，直到找到第一个非空格字符位置，跳出
        if(str.charAt(i)!=" ")  break;          
    }
    //后面的空格截掉  
    str=str.substring(0,i+1);  
   
    return str;  
}  

function simpleTrim(str) {
    return LTrim(RTrim(str)); 
}

//正则表达式去除字符串头部和尾部空白字符
function trim(str) {
    // ^是开始，\s是空白，*表示0个或多个，|是或，$是结尾，g表示全局
    return str.replace(/(^\s*)|(\s*$)/g, "");  
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
}


// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    return Object.keys(obj).length;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(emailStr); 
}

// 判断是否为手机号
function isMobilePhone(phone) {
    var reg = /^1\d{10}$/;
    return reg.test(phone);

}


window.onload = function() {
    // 1. 判断arr是否为一个数组
    var arr = new Array("1","2"); 
    document.getElementById("judge-arr").innerText = 'Array("1","2") ' + "is an array: " + isArray(arr);
    console.log(new Date().valueOf());
    // 判断fn是否为一个函数
    var myFunc = function(){}; 
    document.getElementById("judge-func").innerText = 'myFunc ' + "is a function: " + isFunction(myFunc);

    // 2. 值类型和引用类型
    // 实现深度克隆
    var srcObj = {
        a: 1,
        b: {
            b1: ["hello", "hi"],
            b2: "JavaScript"
        }
    };
    var abObj = srcObj;
    var tarObj = cloneObject(srcObj);

    srcObj.a = 2;
    srcObj.b.b1[0] = "Hello";

    console.log(abObj.a);
    console.log(abObj.b.b1[0]);

    console.log(tarObj.a);      // 1
    console.log(tarObj.b.b1[0]);    // "hello"

    // 3. 数组、字符串、数字
    var a = [1, 3, 5, 7, 5, 3];
    var b = uniqArray4(a);
    console.log(b); // [1, 3, 5, 7]


    // 4. 去除字符串头部和尾部空白字符
    var str = '          hi!          ';
    str = simpleTrim(str);
    console.log(str); 

    str = trim(str);
    console.log(str); 


    // 5. 遍历数组
    var arr = ['java', 'c', 'php', 'html'];
    function output(item) {
        console.log(item)
    }
    each(arr, output);  // java, c, php, html

    // 6. 获取一个对象里面第一层元素的数量，返回一个整数
    var obj = {
        a: 1,
        b: 2,
        c: {
            c1: 3,
            c2: 4
        }
    };
    console.log(getObjectLength(obj)); // 3


    // 7. 判断是否为邮箱、手机地址
    console.log(isEmail("xyang4173@sina.com"));
    console.log(isMobilePhone("15801008930"));

}

