import axios from 'axios'

const API_URL = '/api/products/'

// Products user
const products = async(userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    products
}

export default authService