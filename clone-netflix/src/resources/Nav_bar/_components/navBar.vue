<template>
    <div>
        <div class="div-main" v-if="$route.name != 'gerenciaPerfil'">
            <div class="container" style="padding: 15px 0px;">
                <a @click="$router.push({name: 'Home'})"><img src="../../../assets/netflix-logo-5.png" alt="" width="120vh"></a>
                <div class="" v-if="$route.name != 'pageLogin'" style="display: flex; align-items: center; justify-content: center;">
                    <select name="linguagem">
                        <option value="Portugues">Portugues</option>
                        <option value="English">English</option>
                    </select>
                    <div class="active" style="float:right">
                        <a style=" color: white; text-decoration: none;" @click="$router.push({name: 'pageLogin'})" >Entrar</a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; " class="navBarAvatars">
                <a @click="$store.state.new_avatar = false">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Arrow_Left.svg/700px-Red_Arrow_Left.svg.png" width="50px" alt="" srcset="" >
                </a>
                <div class="navAvatar">
                    <strong style="color: aliceblue;">Editar perfil</strong>
                    <strong style="color: aliceblue;">Escolha o ícone do seu perfil</strong>
                </div>
            </div>
            <div style=" display: flex; align-items:center">
                <strong style="color: white; padding: 0rem 1rem;">{{avatar.name}}</strong>
                <img style="color: aliceblue;" width="60px" :src="avatar.avatar">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            avatar : ''
        }
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
.navAvatar{
    display: flex;
    flex-direction: column;
    padding: 0px 1rem;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* li a:hover:not(.active) {
  background-color: #111;
} */
select {
    height: 30px !important;
    background: #0000008c !important;
    color: white !important;
    padding: 5px !important;
    width: 115px !important;
    margin: 10px;
}
.active{
    background-color: #e50914;
    border-radius: 5px;
    /* height: 30px; */
    padding: 5px 10px;

    
}
.div-main { 
    background-color: transparent;
    background-image:  linear-gradient( to bottom, #000, #000000b0,#00000070, transparent ); 
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