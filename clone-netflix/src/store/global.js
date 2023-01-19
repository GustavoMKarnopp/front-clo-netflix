import axios from "axios";

const apiDBTeste = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        Accept: 'application/json',
        'Content-type':'application/json' 
    }
})

export default {
    async Auth(){
        return await apiDBTeste.get("/Todo_user")
    },
    getUsers(){
        return apiDBTeste.get('/Users')
    },
    getAvatars(){
        return apiDBTeste.get('/Avatars')
    },
    async postUsersBrouser(newWUser){
        return await apiDBTeste.post('/Users', newWUser
            // {
            //     id:                     '',
            //     name:                   newWUser.name,
            //     avatar:                 newWUser.avatar,
            //     idioma:                 newWUser.idioma,
            //     infantil:               newWUser.infantil,
            //     inicio_automatico:      newWUser.inicio_automatico,
            //     reproducao_automatico:  newWUser.reproducao_automatico,
            //     titulo:                 newWUser.titulo,
            //     concluido:              newWUser.concluido,
            //     deletar:                newWUser.deletar
            // }
        )
    }
}

