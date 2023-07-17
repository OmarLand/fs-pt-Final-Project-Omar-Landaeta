import axios from 'axios';
import { login, register, logout } from "./auth";
import { info } from "./user";

import { infoProd } from "./products"


const client = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const auth = {
    login    : login( client ),
    register : register( client ),
    logout   : logout(client),
};

const user = {
    info : info(client),
};

const products = {
    infoProd : infoProd( client ),
}


export { auth, user, products };