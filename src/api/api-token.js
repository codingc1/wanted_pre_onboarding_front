import axios from 'axios';
import { LOCALSTORAGE_TOKEN } from '../constants';
import { BASE_URL } from './api';

const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN)
const headers = {
    "Content-Type": "application/json",
    Authorization: token?'Bearer '+String(window.localStorage.getItem(LOCALSTORAGE_TOKEN)):'',
  };

export const axiosWithToken = axios.create({
  baseURL: BASE_URL, headers ,
});


