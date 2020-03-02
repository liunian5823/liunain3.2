<template>
  <div>
    <div class="search">
      <input type="text" placeholder="请输入目的地" autofocus="autofocus" v-model="keyworld" @keyup.enter="submit" />
      <router-link to="/">
        <span>取消</span>
      </router-link>
    </div>
    <!-- 搜索后显示的内容 -->
    <div v-if="serachcont">
      <div v-for="(item,index) in resule" :key="index">
        <router-link :to="'/container/'+item.id">
          <div class="content">
            <div class="content_img">
              <img :src="item.name.image" />
            </div>
            <div class="content_list">
              <div>{{item.name.name}}</div>
              <div>{{item.name.title}}</div>
            </div>
          </div>
        </router-link>
          
      </div>
    </div>

    <!-- 没有搜索内容 -->
    <div class="nosearch" v-else>
      没有内容
    </div>
  </div>
</template>

<script>
import { searchIng } from '../../api/api.js';
export default{
  name:"search",
  data(){
    return{
      //搜索词
      keyworld:'',
      resule:[],
      serachcont:true
    }
  },
  methods:{
    submit(){
      console.log(this.keyworld)
      //搜索功能  根据后端接口把用户输入的内容传进去
      searchIng(this.keyworld).then((res)=>{
        console.log(res)
        // alert(res)
        // this.resule=res.data
        var searchdata=res.data
        //判断搜索的内容是否存在
        if(searchdata.length!==0){
          this.resule=searchdata
          this.serachcont=true
        }else{
          this.serachcont=false
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }

}
</script>

<style scoped="scoped">
  @import url("../../assets/style/public.css");
  .search{
    display: flex;
    height: 1rem;
    align-items: center;
    padding: 0 0.2rem;
  }
  input[type='text']{
    height: 0.5rem;
    width: 100%;
    border-radius: 0.1rem;
    padding: 0.06rem 0.2rem;
    font-size: 0.26rem;
    background-color: #ececec;
    outline: none;
    border: none;
  }
  span{
    display: block;
    font-size: 20px;
    width:100%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    color: #f39c11;
    margin-left: 0.2rem;
    text-align: center;
    margin-right: .2rem;
  }
  .nosearch{
    text-align: center;

  }
  .nosearch img{
    width: 60%;
  }
</style>
