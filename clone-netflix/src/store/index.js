//TODOS OS DADOS QUE SERRÃO COMPARTILHADO NA APLICACAO DEVERÃO SEM COLOCANDOS AQUI.
import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'
import router from '../router/index'
import saveSession  from '../sesssionStorage/session'

Vue.use(Vuex)

const state = {
    get_users : [],
    USER_SELECT : [],
    get_avatar : [],
    newUserState: [],
    PEGA_user_escolhido:[],
    click: false,
    new_avatar: false,
}

const getters = {
    get_users(state){
        return state.get_users
    },
    get_avatar(state){
        console.log(state)
        return state.get_avatar
    },
    post_users(state){
        return state.newUserState
    },
    muda_valor(state){
        return state.click
    },
}

const mutations = {
    SET_users(state, users){
        console.log(users, 'get_users')
        state.get_users = users
    },
    SET_avatars(state, avatars){
        state.get_avatar = avatars
    },
    CRIAR_newWUser (state, {newWUser}) {
        state.get_users.push(newWUser)
    },
    Event_muda_valor (state) {
        state.click = true
    },
    Event_muda_valor_avatars (state) {
        state.new_avatar = true
    },
    SET_user_Session (state, userSelect) {
        saveSession.sessionUserSelect(userSelect)
    },
}
const actions = {
   authUsers(){
    global.Auth().then((response) => {

        if (typeof sessionStorage.dados_login !== "undefined") {
            let obj = JSON.parse(sessionStorage.dados_login);
            let valida = response.data.find( value => value.email === obj.email && value.password === obj.password )
            if(valida){
                saveSession.saveSession(valida)
                router.push({name: 'Browser'})
            }else{
                window.alert('Barro voce nao tem um usuario')
            }
          }
    })
   },
   loadUsers({commit}){
        if (typeof sessionStorage.session !== "undefined") {
            let obj = JSON.parse(sessionStorage.session);
            commit('SET_users', obj.Users)
        }
   },
   postTarefa({commit}, state){
       let dados = state.newUser
       return new Promise((resolve, reject) => {  
           global.postUsersBrouser(dados)
           .then(resp => {
               let dados = resp.data
               resolve(dados)
               if(resp.status == 201){
                   location.reload()
                }
                commit('CRIAR_newWUser', dados)
            })
        })
    },
    abre_Modal({commit}, state){
         commit('Event_muda_valor', state)
    },
    selectUser({commit},state){
         commit('SET_user_Session', state)
    },
    abre_Modal_avatars({commit}, state){
        global.getAvatars().then((response) => {
            commit('SET_avatars', response.data)
            commit('Event_muda_valor_avatars', state)
        })
    },
}





const store =  new Vuex.Store({ //TODO: 
    strict : true,// STRICT:  nos ajuda a identificar caso estejamos tentando executar mutacoes de estados fora das mutations mas importante nunca ulizarmos dela em producao pois pode ocasionar erros.
    // STRICT: process.env.NODE_ENV !== 'production',//STRICT  nos ajuda a identificar caso estejamos tentando executar mutacoes de estados fora das mutations mas importante nunca ulizarmos dela em producao pois pode ocasionar erros.
    state,
    getters,
    actions,
    mutations,
})

// console.log(store)
export default store