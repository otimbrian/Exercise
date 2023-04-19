import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const create = async newObject => {
    const reponse = await axios.post(baseUrl, newObject)
    return reponse.data
}

export default {create: create}
