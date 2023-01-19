<template>
  <div >
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-wrapper">
          <div style="" class="primeiroContainer">
            <div>
              <strong style="color: white;">Editar perfil</strong>
              <hr  class="solid">
            </div>
            <div >
              <div class="componenteCentral" style="display: flex;">
                <div class="iconsEditPerfil" :style="`background-image: url( ${user.avatar} ); background-repeat: round; padding: 10px; margin: 10px; ` + 'display: flex; align-items: end;'">
                  <a @click="abreModal">
                    <div style="background-color: black; border-radius: 100%; padding: 2px;">
                     <svg width="3vh" id="Layer_1" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <g>
                             <path d="m7.4 7h8.6v9.5h-8.6z" transform="matrix(.707 -.708 .708 .707 -4.858 11.748)" fill="#000000" style="fill: rgb(255, 255, 255);"></path>
                             <path d="m8.4 2.3c-.4-.4-1.1-.4-1.5 0l-4.6 4.6c-.4.4-.4 1.1 0 1.5l1.5 1.5 6.1-6.1z" fill="#000000" style="fill: rgb(255, 255, 255);"></path>
                             <path d="m22 22-2.2-8.6-6.4 6.4z" fill="#000000" style="fill: rgb(255, 255, 255);"></path>
                         </g>
                     </svg>
                    </div>
                  </a>
                  </div>
                <div style="width: 100%; margin: 10px; display: flex; flex-direction: column;">
                  <input type="text" class="editPerfil" v-model="user.name" placeholder="Nome" style=" background-color: #666; color: white !important;">
                  <div style="margin: 10px 0px;">
                    <div style="margin: 5px 0px;">
                      <span style="color: white;">Idioma</span>
                    </div>
                    <select name="linguagem">
                      <option value="Portugues">Portugues</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <span style="font-weight: bold; color: white;">Game ID:</span>
                    </div>
                    <small style="color: white;">Seu ID é um nome exclusivo que será usado ao jogador com outros assinantes na Netflix Games. <a><strong>Saiba mais</strong></a></small>
                    <input type="text" class="editPerfil" placeholder="Nome" style="margin: 10px 0; background-color: #666; color: white !important;">
                    <hr  class="solid" style="margin: 20px 0;">
                  </div>
                  <div>
                    <div>
                      <span style="font-weight: bold; color: white;">Configurações de classificação etária:</span>
                    </div>
                    <div style="margin: 10px 0; ">
                      <small style="background-color: #666; color: white; padding: 5px 10px; ">Todas as classificações etárias</small>
                    </div>
                    <div style="margin: 10px 0; ">
                      <small style="color: white;">todas as classificações etárias</small>
                      <small style="color: white;"> para este perfil.</small>
                    </div>
                    <div style="margin: 10px 0; ">
                      <a style="border: 1px solid #666; padding: 5px 15px; color: #666;">
                        <small >Editar</small>
                      </a>
                      <hr  class="solid" style="margin: 30px 0;">
                    </div>
                  </div>
                  <div>
                    <div>
                      <span style="font-weight: bold; color: white;">Controles de início automático</span>
                    </div>
                    <div style="display: flex; margin: 10px 0px; " >
                      <input type="checkbox" v-model="user.inicio_automatico" placeholder="Nome" style="width: 50px; background-color: black; border: 2px solid grey; color: white !important;">
                      <small style="color: white;">Iniciar automaticamente o próximo episódio de uma série em todos os aparelhos.</small>
                    </div>
                    <div style="display: flex; margin: 10px 0px; " >
                      <input type="checkbox" v-model="user.reproducao_automatico" placeholder="Nome" style="width: 50px; background-color: black; border: 2px solid grey; color: white !important;">
                      <small style="color: white;">Reproduzir automaticamente as prévias ao navegar em todos os aparelhos.</small>
                    </div>
                  </div>
                </div>
              </div>
              <hr  class="solid" style="margin: 20px 0;">
            </div>
            <div class="margimBotoes" style="display: flex; flex-wrap: wrap;  justify-content: center; margin-right: 0px;">
                <a class="" style="background-color: white; padding: 10px 20px;">
                  Salvar
                </a>
                <a class="cancelaEdit" @click="$store.state.click = false">
                  Cancelar
                </a>
                <a class="" style="border: 1px solid #666; color: #666; padding: 10px 20px;">
                  Excluir perfil
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TodosAvatars :avatars="$store.state.get_avatar" v-if="$store.state.new_avatar"/>
  </div>
</template>
<script>

export default {
    name: 'modalEditPerfil',
    data(){
        return{
          user: ''
        }
    },
    props: ['dadosUser'],
    components:{
      TodosAvatars: () => import("../_modais-components/todos_avatars.vue"),
    },
    methods:{
        abreModal(){
            this.$store.dispatch('abre_Modal_avatars', true)
        }
    },
    mounted(){
      this.dadosUser.forEach(element => {
        this.user = element
      });
    }
}
</script>
<style scoped>
.cancelaEdit{
  border: 1px solid #666;
  color: #666;
  padding: 10px 20px;
  margin: 0px 20px;
}
.primeiroContainer{
  width: 50%; margin: 10vh 1vh;
}
select {
    height: 30px !important;
    background: #0000008c !important;
    color: white !important;
    width: 115px !important;
}
.iconsEditPerfil{
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
.editPerfil{
  width: 100%;
  height: 3vh;
}
input::placeholder {
  color:white;
  padding: 10px;
}
.modal-mask {
  position: absolute;
  /* position: fixed; */
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-container {
  width:auto;
  height: 130vh;
  margin: 0px auto;
  padding: 20px 30px;
  /* background-color: rgb(247, 246, 246); */
  background-color: rgb(2, 2, 2);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-wrapper{
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
}
@media (max-width: 1280px){
  
}
@media (max-width: 992px){
  
}
@media (max-width: 600px){
  .modal-wrapper[data-v-7793218c] {
    width: 93%;
    height: 100vh;
}
  .primeiroContainer{
    width: 75%;
    margin: 10vh 1vh;
  }
  .modal-container{
    width: 100%;
    height: 120vh;
    /* margin: 0px auto; */
    /* padding: 20px 30px; */
    /* background-color: rgb(247, 246, 246); */
    background-color: rgb(2, 2, 2);
    border-radius: 2px;
    -webkit-box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
    box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
  
}
@media (max-width: 480px){
      .cancelaEdit{
        border: 1px solid #666;
        color: #666;
        padding: 10px 20px;
        margin: 0px 20px;
      }
      .margimBotoes{
        margin: 0px 0px;
      }
      .componenteCentral{
        display: flex;
        flex-direction: column;
      }
      .modal-container {
        width:auto;
        height: 100vh;
        margin: 0px auto;
        padding: 20px 10px;
        /* background-color: rgb(247, 246, 246); */
        background-color: rgb(2, 2, 2);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
      }
      .primeiroContainer{
        width: 100%; 
        margin: 10vh 1vh;
      }
      .mob{
          display: flex;
          align-items: center;
          text-align: center;
          padding: 0px 20px;
      }
      .modal-wrapper{
        width: 83%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
      }
    }
    @media (max-width: 320px){
      .cancelaEdit{
        border: 1px solid #666; color: #666; padding: 10px 20px; margin:10px 20px;
      }
      .margimBotoes{
        margin: 0px 0px;
      }
      .componenteCentral{
        display: flex;
        flex-direction: column;
      }
      .modal-container {
        width:auto;
        height: 115vh;
        margin: 0px auto;
        padding: 20px 10px;
        /* background-color: rgb(247, 246, 246); */
        background-color: rgb(2, 2, 2);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
      }
      .primeiroContainer{
        width: 100%; 
        margin: 10vh 1vh;
      }
      .mob{
          display: flex;
          align-items: center;
          text-align: center;
          padding: 0px 20px;
      }
      .modal-wrapper{
        width: 77%;
        height: 115vh;
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
      }
      
  }
</style>