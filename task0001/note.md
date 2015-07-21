### Web Server

> 浏览器给服务器发一个请求，服务器不是一看就知道怎么响应的。首先这些请求和响应要有一个通用的写法，也就是要有一个协议，常用的是 HTTP 协议。
> HTTP 响应里还包括很多东西，比如 Content-type 表示服务器发过来的文件类型是什么（文本？动画？图片？音频？），这样发过去了人家浏览器好知道怎么展示给用户看。人家服务器怎么知道按协议要写什么东西进去呢，这就是 Web Server 干活的时候了。


形象化一下HTTP响应，大概就长这样：
HTTP Header:
    - HTTP/1.1 200 OK
    - Content-Type: text/html
    - Content-Encoding: "gzip"
HTTP body:
    html goes here...

浏览器和服务器的交互方式：
1. 浏览器地址 例如：http://www.zhihu.com/question/22689
2. AJAX
3. 应用软件与服务器的交互 
   例如：
    - 微信、QQ 与腾讯的服务器的交互
    - 网游客户端与网游公司服务器的交互
    - 搜索引擎用来搜集网页信息的程序（爬虫）与各种各样的网站服务器的交互
    - 只要你知道用什么地址访问、怎样访问人家的服务器，并且有相应权限，你也可以自己写一些程序去和他们的服务器交互（比如用微博API - 新浪微博API获取微博，开发第三方应用或者做数据分析）。

> 从这些栗子里可以看出，客户端与服务器的交互的主体、客体、载体是五花八门的：
> 服务器可以是大型机也可以是个人电脑，只要能跑相应的程序就行
> 客户端像前面举的栗子里一样，可以是各种软件，而且这些软件不一定运行在个人电脑上，也可以是手机、平板、智能穿戴设备等等
> 有时候不是传生成好的 HTML 或者其他服务器上已经有的文件，而是传输经过一定逻辑处理后生成的字符串或者其他各种封装好的数据    


### Web Services
> 像前面提到的 HTML 需要有一定标准一样。
> 要让这些形形色色的机器能够通过网络进行交互，我们就需要指明一种协议（比如 HTTP/HTTPS）和一种数据封装格式（比如 HTML/XML）。
> Web Server 提供的 Web Service，指的就是这种协议+格式的交流体系。

一个普通网站访问的过程
简单概括一下，对于我们普通的网站访问，涉及到的技术就是：
用户操作浏览器访问，浏览器向服务器发出一个 HTTP 请求；
服务器接收到 HTTP 请求，Web Server 进行相应的初步处理，使用服务器脚本生成页面；
服务器脚本（利用Web Framework）调用本地和客户端传来的数据，生成页面；
Web Server 将生成的页面作为 HTTP 响应的 body，根据不同的处理结果生成 HTTP header，发回给客户端；
客户端（浏览器）接收到 HTTP 响应，通常第一个请求得到的 HTTP 响应的 body 里是 HTML 代码，于是对 HTML 代码开始解析；
解析过程中遇到引用的服务器上的资源（额外的 CSS、JS代码，图片、音视频，附件等），再向 Web Server 发送请求，Web Server 找到对应的文件，发送回来；
浏览器解析 HTML 包含的内容，用得到的 CSS 代码进行外观上的进一步渲染，JS 代码也可能会对外观进行一定的处理；
用户与页面交互（点击，悬停等等）时，JS 代码对此作出一定的反应，添加特效与动画；
交互的过程中可能需要向服务器索取或提交额外的数据（局部的刷新，类似微博的新消息通知），一般不是跳转就是通过 JS 代码（响应某个动作或者定时）向 Web Server 发送请求，Web Server 再用服务器脚本进行处理（生成资源or写入数据之类的），把资源返回给客户端，客户端用得到的资源来实现动态效果或其他改变。

### text-indent

* 属性含义： 第一行缩进
* 取值： 绝对数值（正值或负值），百分比
* 默认值： 0

【注】：
1. text-indent属性可应用于有块级元素，但无法应用于行内元素。若想把一个行内元素的第一行进行“锁紧”，可以用“左内边距”或“外边距”。
2. text-indent 属性可以继承


### text-transform

* 属性含义： 文本的大小写
* 取值： none(原有大小写)、uppercase(大写)、lowercase(小写)、capitalize(首字母大写)
* 默认值： none

### text-decoration

* 属性含义： 文本装饰
* 取值： none(无装饰)、underline(下划线)、overline(上划线)、line-through(贯穿线)、blink(闪烁)
* 默认值： none

【注】：
1. 无装饰的文本是默认外观，但链接默认样式为下划线。
2. 如果两个不同的装饰都与同一元素匹配，胜出规则的值会完全取代另一个值。
   例如：
   >h2.stricken {text-decoration: line-through;}
   >h2 {text-decoration: underline overline;}

### word-spacing

* 属性含义： 字间距
* 取值： normal(标准间距)、长度
* 默认值： noarmal

【注】：word-spacing属性对中文不起作用

### letter-spacing

* 属性含义： 字母间距
* 取值： normal(标准间距，相当于值为 0)、长度
* 默认值： noarmal
* JavaScript语法： object.style.letterSpacing="3px"

### white-space

* 属性含义： 处理元素内的空白的方式
* 取值： normal(空白被忽略)、pre(空白被保留)、nowrap(文本不换行)、pre-wrap(保留空白符序列，但正常地进行换行)、pre-line(合并空白符序列，但是保留换行符)
* 默认值： normal

【注】：
1. pre-wrap 和 pre-line 是 CSS 2.1 中新增的

### font

* 属性含义： 文本字体、大小和颜色
* 取值： color(字体颜色)： rgb(x,x,x)、#xxxxxx、colorname
	     face(字体)： font_family
	     size(字体尺寸)： number
* 默认值： normal

【注】：
1. 在 HTML 4.01 中，font 元素不被赞成使用。
   在 XHTML 1.0 Strict DTD 中，font 元素不被支持。
2. 不赞成使用，建议用样式取代它。

### font-family

* 属性含义： 文本字体
* 取值： family-name(指定字体)、generic-family(通常字体)
* 默认值： 取决于浏览器

【注】：
1. 如果浏览器不支持第一个字体，则会尝试下一个。font-family 属性的值是用于某个元素的字体族名称或/及类族名称的一个优先表。浏览器会使用它可识别的第一个值。
2. 有两种类型的字体系列名称：
   指定的系列名称：具体字体的名称，比如："times"、"courier"、"arial"。
   通常字体系列名称：比如："serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"

### font-weight

* 属性含义： 文本粗细
* 取值： normal(默认值)、bold(粗体)、bolder(更粗)、lighter(更细)、100、200、...、900(400 等同于 normal，而 700 等同于 bold)
* 默认值： normal

### @font-face

* 定义： @font-face是CSS3中的一个模块，能够加载服务器端的字体文件，让客户端显示客户端没有安装的字体。
* 语法：@font-face: {属性：取值}
* 取值： font-family(字体名称)、font-style(文本样式)、font-variant(大小写)、font-weight(粗细)、font-stretch(横向拉伸变形)、font-size(字体大小)、src(自定义字体的相对路径或绝对路径)
* 默认值： normal


### 背景线性渐变

webkit内核的safari、 Chrome的Linear Gradients (线性渐变)
-webkit-gradient是background的一个属性值；
webkit内核的safari、 Chrome的Linear Gradients (线性渐变) 基本语法：
background-image:-webkit-gradient(type, x1 y1, x2 y2, from(开始颜色值), to(结束颜色值), [color-stop(偏移量小数, 停靠颜色值), ...] );
webkit内核的Linear Gradients (线性渐变) 第一组参数type（类型）为 linear；
第二组参数是“x1 y1, x2 y2”，颜色开始点和颜色结束点的坐标。“x1, x2, y1, y2"的取值范围为0%-100%，x1和x2也可以取值left（或0%）或right（或100%），同样y1和y2可以取值top（或0%）或bottom（或100%）；
当x1等于x2，y1不等于y2，实现垂直渐变，调整y1，y2的值可以调整渐变半径大小；
当y1等于y2，x1不等于x2，实现水平渐变，调整x1，x2的值可以调整渐变半径大小；
当y1不等于y2，x1不等于x2，实现角度渐变
当x1等于x2，y1等于y2，实现没有渐变，取from色，即“ from(颜色值) ”；
from(开始颜色值), to(结束颜色值)是两个渐变颜色值；
[color-stop(偏移量<小数> ,停靠颜色值), ...]：可以使用多个color-stop，如果渐变只有2个颜色，那么可以不使用该参数；偏移量必须为小数，如果偏移量>=1,那么该color-stop相当于无效；
firefox下的Linear Gradients (线性渐变) 请参阅：
演示

div {
    width:200px;
    height:200px;
    border:1px solid #CCC;    
    background-image: -webkit-gradient(linear, 0% 0%, 50% 100%, from(#000), to(#FFF), color-stop(0.3, #336600), color-stop(0.5, yellow));
}
效果：
Webkit Grandient

注意：红线上的颜色值都是相同的，并且和"绿色"的线保持垂直。

参考文章

webkit内核的safari、 Chrome的Linear Gradients (线性渐变)
CSS3 Gradient
Firefox的Linear Gradients (线性渐变)
-moz-linear-gradient是background的一个属性值；
Firefox的Linear Gradients基本语法：
background-image:-moz-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )
Point：渐变出发的点（开始点）。
单位可以是百分比，也可以是像素。或使用left、center、right进行水平定位，也可以使用top、center、buttom进行垂直定位。这点非常像background-position。
angle：渐变出发的方向，它代表的是渐变方向和水平线之间的夹角，逆时针方向。
stop：渐变停靠点，它有两部分组成<color, pos>，pos为0~100%之间的值。注意0%代表的是“起始点”，100%代表的是“结束点”。
示例

div {
    width:200px;
  height:200px;
  border:1px solid #CCC;
  background-image: -moz-linear-gradient(50% 180px 90deg, #000000 0%, #FFFFFF 30%, #336600 60%,#662C13 90%)
}
效果：
Firefox Linear Gradient

注意：如果不指定第二个Stop点的位置（30%），他会介于第三个Stop和第一个Stop点中间。

参考网址：http://www.cnblogs.com/rainman/archive/2011/07/12/2104722.html