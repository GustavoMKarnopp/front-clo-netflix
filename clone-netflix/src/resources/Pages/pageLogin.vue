<template>
<div>
    <div class="row banner">
      <div class="col">
        <navBar/>
      </div>
      <div class="col alinha-card">
        <cardLogin/>
      </div>
      <div class="containerrrr">
        <footerr/>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name:'pageLogin',
  data(){
    return {
    }
  },
  components:{
    cardLogin : () => import('../Home_login/_components/cardLogin.vue'),
    navBar : () => import('../Nav_bar/_components/navBar.vue'),
    footerr : () => import('../Footer/_components/footer.vue'),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner {
    background-image: url('~@/assets/website_large.jpg');
    background-color: #fff;
    color: #000;
    height: auto;
  }
  .alinha-card{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
  .containerrrr{
    width: 100%;
    background-color: #000000c2;
}
</style>
