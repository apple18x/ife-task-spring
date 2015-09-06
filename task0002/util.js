function $(id) {
    return document.getElementById(id);
}

function add(num1, num2) {
    return num1 + num2;
}

function renderResult(result) {
    $("result").innerHTML = result;
}

function addEventHandle() {
    var num1 = $("number1").value;
    var num2 = $("number2").value;
    var result = add(num1, num2);
    renderResult(result);
}

// function initEvent() {
//     $("addbtn").addEventListener("click", addEventHandle, false);
// }

// initEvent();








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

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    if (!element.className) { 
        element.className = newClassName; 
    }else { 
        newClass = element.className; 
        newClass += " "; 
        newClass += newClassName; 
        element.className = newClass; 
    } 
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // 若只有一个样式
    if (element.className.length ==  oldClassName.length ) {
        element.removeAttribute("class"); 
    }else {
        var classlist = element.className;
        var regExp = eval("/\\s*" + oldClassName + "\\s*/");

        classlist.replace(regExp,"");
        element.className = classlist.replace(regExp,"");
    }

}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    var isSibling = false;
    var p = element.parentNode.children;

    for(var i =0; i < p.length; i++) {
        if(p[i] == element) {
            isSibling = true;
            break;
        }
    }
    return isSibling;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var xPos = element.offsetLeft;
    var yPos = element.offsetTop;

    return {
        x: xPos,
        y: yPos
    };
}


// 实现一个简单的Query
function $(selector) {
    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    this.context = selector.context;
    var match = rquickExpr.exec(selector);
    
    if ( match && (match[1] || !context) ) {
        var elem = document.getElementById( match[2] );
        return elem;
    }    
}


// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
}

// 例如：
function clicklistener(event) {
    
}
// addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
}






// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {

    // 只有IE浏览器支持ActiveXObject，但IE11除外
    var isIE = "ActiveXObject" in window ? true : false;
     
    if(isIE){
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        //非ie11返回true，ie11返回false
        var appVer = reIE.test(navigator.appVersion);

        // 非ie10及一下版本  
        if(appVer) {    
            return parseFloat(RegExp["$1"]);
        }else{
            return 11;
        }
    }else{
        return -1;
    }
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var exptime = new Date();  

    //getTime()返回距1970.01.01之间的毫秒数，setTime()以毫秒设置 Date 对象，设置后日期变为过期时间
    exptime.setTime(exptime.getTime() + expiredays * 24 * 3600 * 1000);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + exptime.toGMTString();
}

// 获取cookie值
// 注：chrome浏览器为了安全只支持online-cookie，不支持本地设置cookie。因此需要在非chrome浏览器下检查下面的代码
function getCookie(cookieName) {
    var arrStr = document.cookie.split(";"); 
    
    for(var i = 0;i < arrStr.length;i ++){ 
        var cookiePair = arrStr[i].split("="); 
        if(cookiePair[0] == cookieName) return unescape(cookiePair[1]); 
    }
}

function ajax(url, options) {
    var method = options.type;
    var par = "?";

    //get方法通过url发送数据
    for (key in options.data){
        par = par + key + "=" + options.data[key] + "&" ; 
    }
    par = par.substring(0,par.length-1);

    console.log(url+par);
    alert(options.onsuccess);

    // var xmlhttp;
    // if (window.XMLHttpRequest){
    //     // code for IE7+, Firefox, Chrome, Opera, Safari
    //     xmlhttp=new XMLHttpRequest();
    // }else{
    //     // code for IE6, IE5
    //     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    // }

    // xmlhttp.onreadystatechange=function(){
    //     if(xmlhttp.readyState==4 && xmlhttp.status==200){
    //        
    //     }
    // }
    // xmlhttp.open(method,url,true);
    // xmlhttp.send();
}
