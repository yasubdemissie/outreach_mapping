import api from './apiConfig'

const formApi ={
    createNewForm: (data) => api.post('/form/createNewForm', data),
    getReachedPeoples: () => api.get('/form/getReachablePeoples'),
    getIndividual: () => api.get('/form/getIndividual'),
    updateIndividual: (data) => api.put('/form/updateIndividual', data),
}

export default formApi