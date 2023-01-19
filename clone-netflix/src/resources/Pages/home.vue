<template>
    <div>
        <div class="row" style="background-color: white; height: 8vh; display: flex;align-items: center; justify-content: center;">
          <div style="display: flex;align-items: center; justify-content: center;">
            <div><strong style="padding: 5px; border-radius: 15px; margin: 10px; background-color: #e50914; color: white;">NOVO!</strong></div>
            <div class="mob">
                <span >
                    Planos a partir de 
                    <strong style="margin: 0px 3px;"> R$ 18,90.</strong>
                </span>
            </div>
            <div class="mob">
                <strong style="margin: 0px 5px;"><a href="" style="text-decoration: none; color: blue;">Saiba mais</a></strong>
            </div>
          </div>
        </div>
        <div class="row banner" >
          <div class="col">
            <navBar/>
          </div>
          <div class="col alinha-card">
              <InformeEmailHome/>
          </div>
          <div class="col alinha-card">
              <bannerAproveite/>
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
          navBar: () => import("../Nav_bar/_components/navBar.vue"),
          InformeEmailHome: () => import("../Home/_components/InformeEmailHome.vue"),
          bannerAproveite: () => import("../Home/_components/bannerAproveite.vue"),
          bannerAproveite: () => import("../Home/_components/bannerAproveite.vue"),          
      }
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
      .banner {
        /* background-image:  linear-gradient(to center, #00000070); */
        /* background-image: background-color: transparent; */
        background-image:  linear-gradient( to right, rgba(209, 11, 11, 0.767), transparent, rgba(29, 29, 209, 0.767) ), url('~@/assets/website_large.jpg');
        /* background-image:  linear-gradient( to right, red, transparent, blue ), url('~@/assets/website_large.jpg');BOMNITO LEGAL ASSIM */
        background-color: #fff;
        color: #000;
        height: 100vh;
      }
      .alinha-card{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
      }
    </style>
    <style scoped>
    @media (max-width: 1280px){
        
    }
    @media (max-width: 992px){
        
    }
    @media (max-width: 600px){
        
    }
    @media (max-width: 480px){
        .mob{
            display: flex;
            align-items: center;
            text-align: center;
            padding: 0px 20px;
        }
    }
    @media (max-width: 320px){
        .mob{
            display: flex;
            align-items: center;
            text-align: center;
            padding: 0px 20px;
        }
    }
    
    </style>