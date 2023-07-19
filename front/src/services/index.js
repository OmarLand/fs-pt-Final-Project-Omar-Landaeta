import axios from 'axios';

// Users
import { login, register, logout } from "./auth";
import { info } from "./user";

// Productos
import { infoProd, registerProd, editingProd, deleteProd } from "./products"

// Proveedores
import { infoSup, registerSup } from "./suppliers"


const client = axios.create({
    baseURL         : import.meta.env.VITE_API_URL,
    withCredentials : true,
});

const auth = {
    login    : login( client ),
    register : register( client ),
    logout   : logout(client),
};

const user = {
    info  : info(client),
};

const products = {
    infoProd     : infoProd( client ),
    registerProd : registerProd( client ),
    editingProd  : editingProd( client ),
    deleteProd   : deleteProd( client ),
}

const suppliers = {
    infoSup      : infoSup( client ),
    registerSup  : registerSup( client ),
}


export { auth, user, products, suppliers };