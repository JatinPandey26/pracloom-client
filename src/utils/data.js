import toast from "react-hot-toast";

export const BASE_URL = 'http://localhost:9191/api/v1';

export const getBearerToken = () => {
    return 'Bearer ' + localStorage.getItem('pracloom-token');
}

export const getTenantId = () => {
    return localStorage.getItem('X-TenantID');
}