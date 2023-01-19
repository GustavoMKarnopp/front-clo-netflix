<template>
    <div>
      <div class="modal-mask">
          <div class="modal-container">
            <BarraNav/>
          <div style="padding: 1rem 0rem;">
            <div style="">
                <strong style="color: white;">Hitórico</strong>
                <a style="">
                  <div style="background-color: red; height: 80px; width: 80px; border-radius: 10px; margin: 1rem 0rem;"></div>
                </a>
            </div>
            <div style="" v-for="(value, index) in separaCategoriaAvatar" :key="index">
                <strong style="color: white;">{{index}}</strong>
                <div class="" style="display: flex; flex-direction: row;" >
                  <a style="" v-for="(items, resp) in value" :key="resp">
                    <img :src="items.icone_avatar" alt="" style=" height: 100px; width: 100px; border-radius: 10px; margin: 1rem 1rem;">
                  </a>
                </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>

  export default {
      name: 'todosAvatarsUser',
      data(){
        return{
          	separaCategoriaAvatar : []
        }
      },
      props: ['avatars'],
      components:{
        BarraNav: () => import("../../Nav_bar/_components/navBar.vue"),
      },
      methods:{
        filtraRepetido(){
          this.avatars.reduce((obj, categoria) => {
              if(!obj[categoria.categoria]) obj[categoria.categoria] = [];
              obj[categoria.categoria].push(categoria);
              return this.separaCategoriaAvatar = obj
          },{})
          console.log(this.separaCategoriaAvatar, 'teste')
          // return [...new Set(value)]
        }
      },
      mounted(){
        this.filtraRepetido()
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