组件的data配置为什么只能是函数,不能是对象

保证同一个组件的多个实例对象的data对象不是共用的，而是各自有各自的data属性

组件对象与vue的关系

所有组件对象的原型对象都是一个vm对象

所有组件对象都能看到定义在vue原型对象上的属性或方法

### vue中的this  vue控制的回调函数this就是组件对象或者vm 

匿名函数自调用

changeOrigin 支持跨域



core jsbabel处理新语法







事件监听

保存回调的容器

存回调

分发事件

取出对应的回调

调用回调

接触绑定

判断接触绑定的时间名根据解除绑定的要求去删除回调