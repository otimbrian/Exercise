import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const create = async newObject => {
    const reponse = await axios.post(baseUrl, newObject)
    return reponse.data
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const deleteContact = id =>{
    return axios.delete(`${baseUrl}/${id}`)
}

const updateContact =(id, newObject) =>{
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const personService = {create, getAll, deleteContact, updateContact}
export default personService
