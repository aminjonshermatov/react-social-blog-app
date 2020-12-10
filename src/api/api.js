import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "23ebb49d-93e2-42ce-8588-d1ca3023b81e"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 50) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
                .then(response => response.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
                .then(response => response.data);
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId || 12991}`)
                .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId || 12991}`)
            .then(response => response.data);;
    },
    updateStatus(status) {
        return instance.put('profile/status', { status })
            .then(response => response.data);;
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(response => response.data);
    }
}