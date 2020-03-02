<template>
    <div class="wrap" v-if="showwrap">{{text}}</div>
</template>

<script>
export default{
    name:"popup",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .wrap{
        position: fixed;
        left: 50%;
        top: 50%;
        background-color: rgb(0, 0, .35);
        padding: 10px;
        border-radius: 5px;
        transform: translate(-50%,-50%);
        color: #fff
    }
</style>