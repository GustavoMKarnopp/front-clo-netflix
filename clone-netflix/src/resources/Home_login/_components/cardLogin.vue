<template>
    <div class="card" style="display: flex; align-items: center; justify-content: center;">
        <div>
            <form action="#" class="container">
                <h1>Entrar</h1>
                <div class="form-element">
                    <input type="text" name="username" id="username" required />
                    <label class="floating-label" for="username">Email ou número de telefone</label>
                </div>
                <div class="form-element">
                    <input type="password" name="password" id="password" required />
                    <label class="floating-label" for="password">Senha</label>
                </div>
                <button class="btn" @click="login()">Entrar</button>
                <!-- <button class="btn" @click="$router.push({name : 'Browser'})">Entrar</button> -->
                <div class="" style="display: flex; align-items: center; justify-content: space-between; margin: 5px 0px;">
                    <div style="display: flex; align-items: center; justify-content: center;">
                        <input type="checkbox" class="" name="rememberMe" id="bxid_rememberMe_true" value="true" tabindex="0" data-uia="rememberMe" >
                        <label for="bxid_rememberMe_true" data-uia="label+rememberMe">
                            <span class="login-remember-me-label-text" style="color: #737373;">Lembre-se de mim</span>
                        </label>
                        <div class="helper"></div>
                    </div>
                    <a class="login-help-link link" target="_self" data-uia="login-help-link" href="/LoginHelp" style="color: #737373; text-decoration: none;">Precisa de ajuda?</a>
                </div>
                <div class="" style="display: flex; flex-direction: column;">
                    <div class="" style="display: flex; align-items: center; margin: 5px 0px;" data-uia="login-signup-now">
                        <p style="padding: 0px; margin-right: 5px; color: #737373;">Novo por aqui?</p> 
                        <a class="" target="_self" href="/" style="text-decoration: none; color: white; font-weight: bold;"> Assine agora</a>.
                    </div>
                    <div class="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
                        <p>
                            <span>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</span>&nbsp;
                            <a class="recaptcha-terms-of-use--link-button" data-uia="recaptcha-learn-more-button">Saiba mais.</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
    }
  },
  mounted(){
        
    },
  computed: {
      ...mapState(['get_users'])
  },
  methods:{
    login(){
      let dados = {
        email: document.getElementById('username').value,
        password: document.getElementById('password').value
      }
      sessionStorage.setItem("dados_login", JSON.stringify(dados))
      this.$store.dispatch('authUsers')

      // setTimeout(() => {
      //   this.$store.dispatch('authUsers')
      // }, 1000)
      // console.log(dados)
      
    }
  }
}

</script>
<style scoped>
.container {
    position: relative;
    display: block;
    width: 320px;
    margin: 50px auto;
    padding: 60px;
    background-color: #000000c2;
    color: #ffffff;
    border-radius: 4px;
    border-radius: 10px;
  }
  .container h1 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 28px;
  }
  .container .form-element {
    position: relative;
    margin: 0 auto;
    padding-bottom: 16px;
  }
  .form-element input {
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    padding: 16px 20px 0 20px;
    height: 50px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #444;
    color: #ffffff;
  }
  .floating-label {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 25%;
    left: 20px;
    font-size: 14px;
    cursor: text;
    color: #8c8c8c;
    transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
    transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease,
      -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
      -o-transform 0.1s ease;
  }
  .btn {
    width: 100%;
    height: 50px;
    margin-top: 24px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    background-color: #e50914;
  }
  input:focus ~ .floating-label,
  input:valid ~ .floating-label {
    font-size: 11px;
    top: 7px;
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
    
}
@media (max-width: 480px){
    .floating-label {
        font-size: 14px;
    }
    .container {
    padding: 40px;
    width: 220px;
  }
}

</style>