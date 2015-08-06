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


window.onload = function() {
    // 判断arr是否为一个数组
    var arr = new Array("1","2"); 
    document.getElementById("judge-arr").innerText = 'Array("1","2") ' + "is an array: " + isArray(arr);

    // 判断fn是否为一个函数
    var myFunc = function(){}; 
    document.getElementById("judge-func").innerText = 'myFunc ' + "is a function: " + isFunction(myFunc);

    // 深度克隆
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
}

