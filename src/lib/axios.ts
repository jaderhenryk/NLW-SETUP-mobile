import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.50.126:3333'
})