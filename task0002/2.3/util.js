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
    var prefix = selector.substr(0,1);
    var element = selector.substr(1);

    if(prefix == "#"){

    }else if(prefix == "."){

    }else{
        return document.getElementsByTagName(selector); 
    }

    
}