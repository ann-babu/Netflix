import axios from "axios";
import {baseUrl} from './const.js'
const instance = axios.create({
    baseURL: baseUrl,

   
  });
  export default instance;