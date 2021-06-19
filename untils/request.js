import axios from 'axios';
import { BASE_URI } from '../untils/mockApi';

const instance = axios.create({
  baseURL: BASE_URI
})

export default {
  get: instance.get,
  post: instance.post
}