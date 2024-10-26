import api from './apiConfig'

const formApi ={
    signUp: (data) => api.post('/user/signup', data),
    login: (email, password) => api.post('/user/login', {email, password}),
    changePassword: (data) => api.post('/user/changePassword', data),
}

export default formApi