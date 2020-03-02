import vue from 'vue'

//引入弹窗组件
import popupCompoent from './popup.vue'

//使用vue基础构造器创建一个子类
const popupctor = vue.extend(popupCompoent)

//定义一个弹窗组件的函数,显示提示信息是什么，显示的时间多长
function showToast(text,time=2000){
    //实例化一个弹窗组件
    const toastDom = new popupctor({
        //createElement()创建一个元素
        el:document.createElement('div'),
        data(){
            return{
                text:text,
                showwrap:true //是否显示组件
            }
        }
    })
    //把实例化的弹窗组件添加到body里面来
    document.body.appendChild(toastDom.$el)

    //多长时间隐藏组件
    setTimeout(() => {
        toastDom.showwrap=false
    }, time);
}

//注册为全局组件的函数
function popupToast(){
    //将组件注册到vue的原型链中
    //其他页面借可以直接this.$popups就可以直接调用哪个弹出组件
    vue.prototype.$popups = showToast
}

export default popupToast
    

// #                                                                                                    
// #                 ``                                                                        ```.`    
// #               `+/                                                                 ``.-/+o+:-.      
// #             `/mo                                                          ``.-:+syhdhs/-`          
// #            -hMd                                                    `..:+oyhmNNmds/-`               
// #          `oNMM/                                            ``.-/oyhdmMMMMNdy+:.                    
// #         .hMMMM-                                     `.-/+shdmNMMMMMMNdy+:.                         
// #        :mMMMMM+                             `.-:+sydmNMMMMMMMMMNmho:.`                             
// #       :NMMMMMMN:                    `.-:/oyhmmNMMMMMMMMMMMNmho:.`                                  
// #      .NMMMMMMMMNy:`          `.-/oshdmNMMMMMMMMMMMMMMMmhs/-`                                       
// #      hMMMMMMMMMMMMmhysooosyhdmNMMMMMMMMMMMMMMMMMMmds/-`                                            
// #     .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdy+-.`                                                
// #     -MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdy+-.`                                                     
// #     `NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmyo:.`                                                          
// #      /NMMMMMMMMMMMMMMMMMMMMMMMmho:.`                                                               
// #       .yNMMMMMMMMMMMMMMMMmhs/.`                                                                    
// #         ./shdmNNmmdhyo/-``                                                                         
// #              `````         