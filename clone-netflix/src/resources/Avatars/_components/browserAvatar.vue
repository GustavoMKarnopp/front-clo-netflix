<template>
    <div  style=" background-color: black; height: 100vh;">
        <div  style="height: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center;">
            <h1 style="width: 100%; text-align: center; color: white; margin: 20px; ">Quem está assistindo?</h1>
            <div style="display: flex; flex-wrap: wrap;  justify-content: center; margin-right: 0px;">
                <div class="" v-for="(user, index) in get_users" :key="index" style="margin: 10px 10px;">
                    <a @click="selectUserOTT(user)" style="color: red !important; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div class="iconsAvatars adicionaHoverSelecionado" :style="`background-image: url( ${user.avatar} ); background-repeat: round;`"></div>
                        <strong class="name adicionaHoverSelecionadotext" style="color: grey;">{{ user.name }}</strong>
                    </a>
                </div>
                <div v-if="get_users.length < 5" style="margin: 10px 10px;">
                    <addPefil />
                </div>
            </div>
            <div class="adicionaHoverSelecionado" style="width: auto; display: flex; align-items: center; justify-content: center; margin: 30px; border: 1px solid grey;" >
                <a class="adicionaHoverSelecionadotext" @click="$router.push({name: 'gerenciaPerfil'})" style="cursor: pointer; height: 50px; width: 150px; color: grey; text-align: center; display: flex; align-items: center; justify-content: center;">Gerenciar perfis</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
        }
    },
    methods:{
        selectUserOTT(user){
            this.$store.dispatch('selectUser', user)
            this.$router.push({name: 'Ott'})
            console.log(user)
        }
    },
    components:{
        addPefil: () => import("../_modais-components/add_perfil_browser.vue"),
    },
    mounted(){
        this.$store.dispatch('loadUsers')
    },
    computed: {
        ...mapState(['get_users'])
    },
}

</script>
<style>
.adicionaHoverSelecionado:hover{
    margin: 0px;
    padding: 0px;
    border: 1px solid white !important;
    color: white !important;
}
.adicionaHoverSelecionadotext:hover{
    color: white !important;
}

.iconsAvatars{
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    height: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    position: relative;
    text-decoration: none;
    width: 10vw;
}
.name{
    text-align: center;
    max-width: 80px;
    margin: 10px;
}
</style>
<style scoped>
@media (min-width: 992px) and (max-width: 1280px) and (orientation: landscape) {
    .responsividadeCOLS{
        
    }
    /* .container{
        padding: 0px 0px !important;
    } */
}
@media (min-width: 600px) and (max-width: 992px) and (max-aspect-ratio: 4 / 3){
    .responsividadeCOLS{
        
    }
    /* .container{
        padding: 0px 0px !important;
    } */
}
@media (min-width: 480px) and (max-width: 600px )and (max-aspect-ratio: 4 / 3){
    .responsividadeCOLS{
        
    }
    /* .container{
        padding: 0px 0px !important;
    } */
}
@media (min-width: 320px) and (max-width: 480px) and (max-aspect-ratio: 4 / 3){
    .responsividadeCOLS{
        
    }
    /* .container{
        padding: 0px 0px !important;
    } */
}
@media (min-width: 0px) and (max-width: 480px) and (max-aspect-ratio: 4 / 3){
    .teste{
        
    }
    /* .container{
        padding: 0px 0px !important;
    } */
}

</style>