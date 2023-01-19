<template>
    <div style=" background-color: black; height: 100vh;">
        <div  style="height: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center;">
            <h1 style="width: 100%; text-align: center; color: white; margin: 20px; ">Gerenciar perfis:</h1>
            <!-- <h1 style="width: 100%; text-align: center; color: white; margin: 20px; ">{{$store.state.click}}</h1> -->
            <div style="display: flex; flex-wrap: wrap;  justify-content: center; margin-right: 0px;">
                <div class="" v-for="(user, index) in get_users" :key="index" style="margin: 10px 10px;">
                    <a @click="abreModal(user)" style="color: red !important; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div class="iconsAvatars adicionaHoverSelecionado" :style="`background-image: url( ${user.avatar} ); background-repeat: round;` + 'display: flex; align-items: center; justify-content: center;'">
                            <svg width="8vh" id="Layer_1" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="m7.4 7h8.6v9.5h-8.6z" transform="matrix(.707 -.708 .708 .707 -4.858 11.748)" fill="#000000" style="fill: rgb(255, 255, 255);"></path>
                                    <path d="m8.4 2.3c-.4-.4-1.1-.4-1.5 0l-4.6 4.6c-.4.4-.4 1.1 0 1.5l1.5 1.5 6.1-6.1z" fill="#000000" style="fill: rgb(255, 255, 255);"></path>
                                    <path d="m22 22-2.2-8.6-6.4 6.4z" fill="#000000" style="fill: rgb(255, 255, 255);"></path>
                                </g>
                            </svg>
                        </div>
                        <strong class="name adicionaHoverSelecionadotext" style="color: grey;">{{ user.name }}</strong>
                    </a>
                </div>
                <div v-if="get_users.length < 5" style="margin: 10px 10px;">
                    <addPefil />
                </div>
            </div>
            <div class="adicionaHoverSelecionado hoverConc" style="width: auto; display: flex; align-items: center; justify-content: center; margin: 30px; background-color: white;" >
                <a class="adicionaHoverSelecionadotext" @click="$router.push({name:'Browser'})" style=" height: 50px; width: 150px; text-align: center; display: flex; align-items: center; justify-content: center;">Concluído</a>
            </div>
            <EditPefil :dadosUser="dadosUser" v-if="$store.state.click"/> 
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            dadosUser: []
        }
    },
    components:{
        EditPefil: () => import("../_modais-components/editarPerfis.vue"),
        addPefil: () => import("../_modais-components/add_perfil_browser.vue"),
    },

    methods:{
        abreModal(user){
            // console.log(user, 'gustavoTeste666')
            this.dadosUser.push(user)
            this.$store.dispatch('selectUser', user)
            this.$store.dispatch('abre_Modal', true)
        }
    },
    mounted(){
        this.$store.dispatch('loadUsers')
        
    },
    computed: {
        ...mapState(['get_users']),
        // ...mapState(['click'],
        //     console.log(this.$store.state.count)
        // ),

        // console.log('click')
    },
}

</script>
<style>
.hoverConc:hover{
    background-color: #c00 !important;
}
.adicionaHoverSelecionado:hover{
    margin: 0px;
    padding: 0px;
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