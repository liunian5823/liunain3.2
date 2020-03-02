<template>
  <div class="ticket">
    <div>
      <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229864841,4232235061&fm=26&gp=0.jpg" />
      <p>机票</p>
    </div>
    <div>
      <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229864841,4232235061&fm=26&gp=0.jpg" />
      <p>机票</p>
    </div>
    <div>
      <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229864841,4232235061&fm=26&gp=0.jpg" />
      <p>机票</p>
    </div>
    <div>
      <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2229864841,4232235061&fm=26&gp=0.jpg" />
      <p>机票</p>
    </div>
  </div>
</template>

<script>
export default{
  name:"ticket",
  methods:{
  }
}
</script>

<style scoped="scoped">
  .ticket{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 0.3rem 0;
  }
  .ticket img{
    width: 80%;
   }
   .ticket p{
     font-size: 0.3rem;
   }

</style>
