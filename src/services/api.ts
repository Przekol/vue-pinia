import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default http
