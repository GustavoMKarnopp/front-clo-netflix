<template>
    <div class="container" style=" display: flex; align-items: center;">
        <div style="display: flex; text-align: center; margin: 20px 0px">
            <div style="display: flex; align-items: center;">
                <a >
                    <img src="../../../assets/netflix-logo-5.png" alt="" width="120vh">
                </a>
            </div>
            <div >
                <ul style="display: flex;">
                    <li><a>Inicio</a></li>
                    <li><a>Séries</a></li>
                    <li><a>Filmes</a></li>
                    <li><a>Bombando</a></li>
                    <li><a>Minha lista</a></li>
                    <li><a>Navegar por idiomas</a></li>
                </ul>
            </div>
        </div>
        <div style="display: flex; align-items: center;">
            <div>
                <Pesquisa/>
            </div>
            <div style="margin: 0px 10px;">
                <strong style="color: white;">Categoria</strong>
            </div>
            <div style="margin: 0px 10px;">
                <i style="color: white;" class="fa fa-bell"></i>
            </div>
            <div style="margin: 0px 10px; display: flex; align-items: center;">
                <!-- <small style="color: white;">{{avatar.avatar}}</small> -->
                <dropdown/>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            avatar: null
        }
    },
    components:{
          Pesquisa: () => import("../../../componets_extra/Barra_pesquisa.vue"),        
          dropdown: () => import("./dropDown.vue"),        
    },
    mounted(){
        if (typeof sessionStorage.session_user_select !== "undefined") {
            let obj = JSON.parse(sessionStorage.session_user_select);
            this.avatar = obj
        }
    }
}
</script>
<style scoped>
li{
    list-style-type: none;
    margin-right: 2vh;
    color: rgb(255, 255, 255);
}
.Avatar{
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    height: 10vw;
    max-height: 10px;
    max-width: 10px;
    min-height: 40px;
    min-width: 40px;
    position: relative;
    text-decoration: none;
    width: 10vw;
}
</style>