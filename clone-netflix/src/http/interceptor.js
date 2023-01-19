import axios from 'axios'

let api = 'http://localhost:3000'
const http = axios.create({
    baseURL: api
})
http.get("/Todo_user").then(response => {
    return console.log(response.data)
    let dados = response.data
    // if(dados. == )
    const token = localStorage.getItem('user-token')
    
          if (token) {
            response.headers.Authorization = `Bearer ${token}`
          }
        
          return response
    }, (err) => {
        return Promise.reject(err)
    }
)

// http.get("/Todo_user").then((response) => {
//           return response
//         }, (error) => {
//           if (error.response.status === 401) {
//             window.location = '#/home'
//           }
//           return Promise.reject(error)
//         })
// http.get("/Todo_user").then((response) => {
//     response.interceptors.request.use((config) => {
//         console.log(config,'teste1')
//       const token = localStorage.getItem('user-token')
    
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//       }
    
//       return config
//     }, (err) => {
//       return Promise.reject(err)
//     })

// })

// http.get("/Todo_user").then((response) => {
//     response.interceptors.response.use((response) => {
//         console.log(response, 'teste')
//       return response
//     }, (error) => {
//       if (error.response.status === 401) {
//         window.location = '#/home'
//       }
    
//       return Promise.reject(error)
//     })

// })

export default http