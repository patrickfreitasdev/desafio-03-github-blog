import axios from "axios";

const token = '';

export const apiUser = axios.create({
    baseURL: 'https://api.github.com/users',
    // headers: {
    //     'Authorization': `Bearer ${token}`
    // },
})

export const apiSearch = axios.create({
    baseURL: 'https://api.github.com/search/issues',
    // headers: {
    //     'Authorization': `Bearer ${token}`
    // },
})

export const apiRepo = axios.create({
    baseURL: 'https://api.github.com/repos/',
    // headers: {
    //     'Authorization': `Bearer ${token}`
    // },
})
