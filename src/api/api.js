import axios from "axios"


export const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1'
})

export const usersAPI = {
    getUsers(page = 1, count = 5, offset) {
        return instance.get(`/users?page=${page}&count=${count}&`).then(res => res.data)
    },
    getPositions() {
        return instance.get('/positions').then(res => res.data)
    },
    getToken() {
        return instance.get('/token').then(res => res.data)
    },
    registerUser(data, token) {
        const formData = new FormData()
        formData.append('email', data.email)
        formData.append('name', data.name)
        formData.append('phone', data.phone)
        formData.append('position_id', data.position_id)
        formData.append('photo', data.photo)
        return instance.post('/users', formData, {
            headers: {
                'Token': token,
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}