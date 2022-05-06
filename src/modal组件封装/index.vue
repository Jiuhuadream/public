<template>
    <div class="marsk" v-if="visible">
        <div class="modal-wrap">
            <div class="title">
                <slot name="title">提示</slot>
            </div>
            <div class="body">
                <slot name="body">
                    提示内容
                </slot>
            </div>
            <div class="footer">
                <button @click="suc">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    //设计组件
    //1.tilte body  footer中的结构是可以给用户自定义随意传入的

    //2.需要一个属性来控制当前这个组件的显示和隐藏 这个属性的名字我们就暂定为visible 当visible为true的时候显示组件 当visible为false的时候不显示组件

    //3.点击确定按钮的时候 要回调事件函数 这个事件函数是由用户传递的

    export default {
        props:{
            //控制组件的结构显示和隐藏的属性
            visible:{
                default(){
                    return false
                },
                type:Boolean
            }
        },
        methods:{
            suc(){
                //组件内部的真正的点击事件
                //通过这个点击事件触发组件的自定义事件ok
                this.$emit('ok')
            }
        }
    }
</script>
<style scoped>
.marsk {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-wrap {
    border-radius: 10px;
    background-color: #fff;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 1px solid #ccc; */
}

.marsk .title,
.marsk .footer,
.marsk .body {
    margin: 20px 0;
}

button {
    outline: none;
    border: 0;
    width: 150px;
    height: 30px;
    background: linear-gradient(90deg, #1596fb, #002dff);
    border-radius: 0.28571429rem;
    display: block;
    color: #fff;
    cursor: pointer;
}
</style>