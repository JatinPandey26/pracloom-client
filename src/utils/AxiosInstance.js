import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'http://localhost:9191/api/v1',
    timeout: 5000,
    headers: {
        'X-TenantID': 'placloom-1001',
        'Authorization': 'Bearer ' + localStorage.getItem('pracloom-token'),
        'Content-Type': 'application/json'
    }
});

export const AxiosInstanceMultipart = axios.create({
    baseURL: 'http://localhost:9191/api/v1',
    timeout: 5000,
    headers: {
        'X-TenantID': 'placloom-1001',
        'Authorization': 'Bearer ' + localStorage.getItem('pracloom-token'),
        'Content-Type': 'multipart/form-data'
    }
})

export const AxiosInstanceToTenant = axios.create({
    baseURL: 'http://localhost:9191/api/v1',
    timeout: 5000,
    headers: {
        'X-TenantID': localStorage.getItem('X-TenantID'),
        'Authorization': 'Bearer ' + localStorage.getItem('pracloom-token')
    }
});

export const AxiosInstanceMultipartToTenant = axios.create({
    baseURL: 'http://localhost:9191/api/v1',
    timeout: 5000,
    headers: {
        'X-TenantID': localStorage.getItem('X-TenantID'),
        'Authorization': 'Bearer ' + localStorage.getItem('pracloom-token'),
        'Content-Type': 'multipart/form-data'
    }
})