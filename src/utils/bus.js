class EventBus {
    constructor() {
        this.events = {}
    }
    //订阅者(subscriber)
    $on(type, fn) {
        //首先检查events里面有没有这个事件,如果有,就将事件处理函数添加到该属性对应的数组中,如果没有我们就要创建一个
        if (!this.events[type]) {
            //如果没有
            //给events添加一个属性
            this.events[type] = []
        }
        //将事件处理函数添加到events里面去
        this.events[type].push(fn)
    }
    //发布者(publisher)
    $emit(type, arg) {
        //也要检查一下,有没有人订阅这个类型的事件
        if (this.events[type]) {
            //说明有人订阅了

            //将这个事件对应的数组拿出来
            let eventArr = this.events[type]
            //遍历这个数组
            eventArr.forEach(fn => {
                fn(arg)
            })
        }
    }
    //移除订阅者
    $off(type, fn) {
        //判断一下这个事件有没有订阅者 如果有那就移除
        if (this.events[type]) {
            //先将事件对应的数组拿下来

            let eventArr = this.events[type];
            //过滤掉传入进来的处理函数
            //并且对这个属性重新赋值
            this.events[type] = eventArr.filter(itemFn => itemFn !== fn)
            console.warn(`${type}事件移除成功`)
        } else {
            console.error(`error:没有${type}这个事件`)
        }
    }
}

export default new EventBus