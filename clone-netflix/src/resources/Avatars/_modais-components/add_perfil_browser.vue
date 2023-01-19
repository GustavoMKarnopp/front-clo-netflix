<template>
    <div>
        <a class="modalBtn" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <img class="iconsAvatars adicionaHoverSelecionado" src="../../../assets/icons/add.png">
            <strong class="name adicionaHoverSelecionadotext" style="color: grey;">Adicionar perfil</strong>
        </a>
        <!-- <button class="modalBtn">Alternar modal</button>  -->
        <div class="modal" >
            <div class="content" style="display: flex; align-items: center; justify-content: center;">
                <div class="modalBtn" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div style="display: flex; align-items: flex-start;flex-direction: column; text-align: left; justify-content: flex-start; width: 100%;">
                        <span style=" font-size: 50px;" class="title">Adicionar perfil</span>
                        <span style="color: grey; font-size: 18px;">Adicione um perfil Netflix para outra pessoa.</span>
                        <hr  class="solid">
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div style="display: flex; align-items: center; justify-content: center; margin: 20px 0px; ">
                            <div class="iconsAvatars" style="background-color: #caca1e; "></div>
                            <div class="profile-add-parent">
                                <div class="profile-entry-inputs" style="margin: 20px; display: flex;" >
                                    <input type="text" id="add-profile-name" class="" v-model="name" placeholder="Nome" style=" background-color: #666;">
                                    <div style="margin: 10px;">
                                        <div> 
                                            <input type="checkbox" id="add-kids-profile ">
                                            <label for="add-kids-profile"></label>
                                            <span role="checkbox" aria-checked="false" tabindex="0" style="color: white;">Criança?</span>
                                            <!-- <span class="kids-profile-tooltip" style="color: white;">Se selecionado, este perfil só terá acesso a séries e filmes com classificação etária até 12 anos.</span> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="solid">
                    </div>
                    <div style="display: flex; align-items: flex-start; justify-content: flex-start; width: 100%;">
                        <a style=" margin: 15px 0px;" @click="addClassificationData(name)">
                            <div class="continuar" style="background-color: aliceblue; padding: 10px 25px;">
                                <span style="" >Continuar</span>
                            </div>
                        </a>
                        <a style="">
                            <div class="cancelar" style="border: 1px solid grey; padding: 10px 25px; margin: 15px 15px;">
                                <span class="cancelarText" style="color: grey;">Cancelar</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default{
    data(){
        return {
            name: null
        }
    },
    computed: {
    },
    methods:{
        ...mapState(['postTarefa', 'resposta']),
        addClassificationData() {
            let newUser = {
                id: '',
                name: this.name,
                avatar: 'http://occ-0-1740-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e',
                idioma: '',
                infantil: false,
                inicio_automatico: false,
                reproducao_automatico: false,
                titulo: null,
                concluido: true,
                deletar: false
            }
        this.$store.dispatch('postTarefa', {newUser})
        },
    },
    mounted(){
        const switchModal = () => {
            const modal = document.querySelector('.modal');
            const actualStyle = modal.style.display

            if(actualStyle == 'block') {
                modal.style.display = 'none'
            }
            else {
                modal.style.display = 'block'
            }
        }
        const btn = document.querySelector('.modalBtn')
        btn.addEventListener('click', switchModal)
        
        const cancelar = document.querySelector('.cancelar')
        cancelar.addEventListener('click', switchModal)
        
        window.onclick = function(event) {
            const modal = document.querySelector('.modal')
            if (event.target == modal) {
                switchModal()
            }
        }
    }
}
</script>
<style scoped>
.continuar:hover{
    background: #c00 !important;
    color: white;
}
.cancelar:hover{
    border: 1px solid white !important;
    color: white !important;
}
.cancelarText:hover{
    color: white !important;
}
hr.solid {
  border-top: 0px solid rgba(187, 187, 187, 0.562);
  width: 100%;
  margin: 10px 0px;
}
input::placeholder {
  color: rgba(255, 255, 255, 0.671);
  padding: 10px;
}

body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    background-color: #f3f5f7;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    color: #ffffff;
    margin-bottom: 5%;
}



.text {
    margin-top: 0;
    font-size: 1.1em;
}

.modal {
    display: none; 
    position: fixed;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

.modal .content {
    background-color: black;
    /* margin: 15% auto;  */
    /* padding: 20px; */
    border-radius: 5px;
    /* width: 100vh;*/ 
    height: 100%;  

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'LexendDeca-Regular';
    color: var(--title);
}
</style>