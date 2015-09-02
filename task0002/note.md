### 了解JavaScript是什么

JavaScript是一个轻量级的、解释型的、面向对象的、将函数视为一级公民，被多数人看作是用于网页编程的脚本语言，但也在很多非网页环境中运用，例如 node.js 或 Apache CouchDB。它是一种基于原型的、多范式的动态脚本语言，并且支持面向对象、命令式编程风格和函数式编程风格。

avaScript 的标准就是 ECMAScript。截至 2012 年为止，所有的主流浏览器都完整的支持 ECMAScript 5.1，旧式的浏览器至少支持 ECMAScript 3 标准。在2015年6月17日，ECMAScript的第六个版本正式发布，该版本正式名称为ECMAScript 2015，但通常被称为ECMAScript 6或者ES6。

**JavaScript能做什么？**

1.增强页面动态效果(如:下拉菜单、图片轮播、信息滚动等)    
2.实现页面与用户之间的实时、动态交互(如:用户注册、登陆验证等)    

参考网址：http://www.imooc.com/code/48

### 如何在HTML页面加载JavaScript代码

* **JS放在HTML文件中**  

**放在`<head>`部分**  
最常用的方式是在页面中head部分放置`<script>`元素，浏览器解析head部分就会执行这个代码，然后才解析页面的其余部分。

**放在`<body>`部分**  
JavaScript代码在网页读取到该语句的时候就会执行。

使用`<script>`标签在HTML网页中插入JavaScript代码时，`<script>`标签要成对出现，并把JavaScript代码写在`<script></script>`之间。

`<script type="text/javascript">`表示在`<script></script>`之间的是文本类型(text)，javascript是为了告诉浏览器里面的文本是属于JavaScript语言。

* **JS作为外部文件**

可以单独创建一个JS文件，其文件后缀通常为.js，然后将JS代码直接写在JS文件中。

嵌入HTML文件时，在HTML中添加如下代码：

`<script src="script.js"></script>`

【注】：在JS文件中，不需要`<script>`标签,直接编写JavaScript代码就可以了。

### 为什么把`<script>`放在`</body>`前

javascript作为一种脚本语言可以放在html页面中任何位置，但是浏览器解释html时是按先后顺序的，所以前面的script就先被执行。比如进行页面显示初始化的js必须放在head里面，因为初始化都要求提前进行（如给页面body设置css等）；而如果是通过事件调用执行的function那么对位置没什么要求的。

然而，javascript放在`<head></head>`标签中将会存在性能问题（脚本阻塞）：

        <html>
        <head>
            <title>Source Example</title>
            <script type="text/javascript" src="script1.js"></script>
            <script type="text/javascript" src="script2.js"></script>
            <script type="text/javascript" src="script3.js"></script>
            <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
        <body>
            <p>Hello world!</p>
        </body>
        </html>

在上述示例中，当浏览器解析到 `<script>` 标签（第 4 行）时，浏览器会停止解析其后的内容，而优先下载脚本文件，并执行其中的代码，这意味着，其后的 styles.css 样式文件和`<body>`标签都无法被加载，由于`<body>`标签无法被加载，那么页面自然就无法渲染了。因此在该 JavaScript 代码完全执行完之前，页面都是一片空白。

第一个 JavaScript 文件开始下载，与此同时阻塞了页面其他文件的下载。此外，从 script1.js 下载完成到 script2.js 开始下载前存在一个延时，这段时间正好是 script1.js 文件的执行过程。每个文件必须等到前一个文件下载并执行完成才会开始下载。在这些文件逐个下载过程中，用户看到的是一片空白的页面。

从 IE 8、Firefox 3.5、Safari 4 和 Chrome 2 开始都允许并行下载 JavaScript 文件。这是个好消息，因为`<script>`标签在下载外部资源时不会阻塞其他`<script>`标签。遗憾的是，JavaScript 下载过程仍然会阻塞其他资源的下载，比如样式文件和图片。尽管脚本的下载过程不会互相影响，但页面仍然必须等待所有 JavaScript 代码下载并执行完成才能继续。因此，尽管最新的浏览器通过允许并行下载提高了性能，但问题尚未完全解决，脚本阻塞仍然是一个问题。

综上，将所有的`<script>`标签放到页面底部，也就是`</body>`闭合标签之前，这能确保在脚本执行前页面已经完成了渲染。

参考网址： http://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html





### JavaScript 数据类型

最新的 ECMAScript 标准定义了 7 种数据类型:

* 原始(primitive)类型:  
  - Boolean  
  - Null  
  - Undefined  
  - Number  
  - String  
  - Symbol (new in ECMAScript 6)  
* 引用(reference)类型
  - 本地对象  
  - 宿主对象
  - 内置对象 

#### 原始类型和引用类型

* 原始类型是存储在栈(stack)中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。

* 引用类型是存储在堆(heap)中的对象，也就是说，存储在变量处的值是一个指针，指向存储对象的内存处。


### 原始类型

#### 1. Undefined

    取值： undefined  
    情景： 
    - 未初始化的声明的变量  
    - 无返回值的函数
    - 未传入实参的形参变量  


            小知识：  

            对变量或值调用typeof运算符将返回下列值之一：  
            - "undefined" : 如果变量是Undefined类型的  
            - "boolean" : 如果变量是Boolean类型的  
            - "number" : 如果变量是Number类型的  
            - "string" : 如果变量是String类型的  
            - "object" : 如果变量是引用类型或Null类型的  

            【注】：对于未声明的变量，只能使用typeof运算符，其他运算符只能用于已声明的变量（否则将会引发错误）

    注意，未声明的变量使用 typeof 运算符后输出也为undefined，然而，undefined并不等于未声明

            var oTemp;

            // var oTemp2;

            alert(typeof oTemp);    //outputs "undefined"
            alert(typeof oTemp2);   //outputs "undefined"

#### 2. Null 

    取值： null  
    情景： - 尚未存在的对象  

    值undefined实际上是从值null派生来的，因此ECMAScript把它们定义为相等的。
            alert(null == undefined);   //outputs "true"


#### 3. Boolean 
    
    取值： true和false  
    情景： 

#### 4. Number  

    取值： 整数和浮点数  

    ##### 整数  
    - 八进制： 首数字必须是0
                var iNum = 070;     //070 is equal to 56 in decimal

    - 十六进制： 首数字必须为0，其后接字母x
                var iNum2 = 0x1f;    //0x1f is equal to 31 in decimal 

    尽管所有整数都可以为八进制或十六进制，但所有数学运算返回的都是十进制结果。

    ##### 浮点数  
    - 要定义浮点值，必须包括小数点和小数点后的一位数字
                var fNum = 5.0;

    ##### 科学计数法
        var fNum = 3.125e7;

    

5. String  

6. Symbol (new in ECMAScript 6)  


### 引用类型


### 判断IE浏览器
参考网址：http://www.2cto.com/kf/201405/299905.html
    https://msdn.microsoft.com/library/dn423948(v=vs.85).aspx