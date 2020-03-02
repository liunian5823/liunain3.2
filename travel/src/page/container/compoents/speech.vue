<template>
  <!-- -->
  <div>
    <!-- 语言功能 -->
    <div class="speech">
      <div>
        <p>{{this.culum}}</p>
        <p>{{this.lecturer}}</p>
      </div>
      <div>
        <img src="" @click="plays()" alt="1" v-show="playing" />
        <img src="" @click="suspende()" alt="2" v-show="suspend" />
        <audio :src="aispeech" controls="controls" ref="audio" @ended="songend"></audio>
      </div>
    </div>
    <!-- 文章 -->
    <div class="strategy" ref="box">
      <div v-html="article"></div>
    </div>
    <div @click="voIce"></div>
  </div>
</template>

<script>
import { speechend } from '../../../api/api.js'
export default{
  name:"speech",
  props:{
	culum:"",
  lecturer:"",
  article:""
  },
  data(){
    return{
      playing:true,
      suspend:false,
      textcon:"",
      aispeech:""
    }
  },
  methods:{
    //音频开始
    plays(){
      var Audio=this.$refs.audio
      Audio.play();
      this.playing=false
      this.suspend=true
    },
    //音频停止
    suspende(){
      var Audio=this.$refs.audio;
      Audio.pause()
      this.playing=true
      this.suspend=false
    },
    //播放完以后
    songend(){
      console.log("播放完")
      this.playing=true
      this.suspend=false
    },
    voIce(){
      var box=this.$refs.box
      var con=box.textContent || box.innerText
      this.textcon=con
      // console.log(con)
      const formData=new FormData();
      //formData
      formData.append('speechen',this.textcon)
      speechend(formData).then((res)=>{
        console.log(res)
        this.aispeech=res.data.speeching
      }).catch((error)=>{
        console.log(error)
      })
    },
  },
  //监听文章是否渲染完毕
  watch:{
    article(){
      //渲染完毕回调函数
      // this.$nextTick  在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
      this.$nextTick(function(){
        console.log('渲染完毕')
        this.voIce()
      })
    }
  }
}
</script>

<style scoped="scoped">
.speech{
  height: 1rem;
  background-color: #0086B3;
  display: flex;
}
p{
  font-size: 14px;
}
.strategy{
  margin: 0.5rem 0.1rem;
  line-height: 20px;
}
audio{
  /* opacity: 0; */
}
</style>
