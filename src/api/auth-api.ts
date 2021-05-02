import { instance } from "./index";

type CurrentUserDataType = {

}

type LoginResponseDataType = {

}

export const authAPI = {
    login(email: string, password: string, rememberMe?: boolean) {
        return instance.post(`/auth/phys`, {email, password}).then(res => res.data)
    },

    logout() {
        return instance.delete(`auth/phys/login`)
    },

    register(email: string, password: string, phone: string, username: string) {
        return instance.post(`/registration/phys`, {email, password, phone, username}).then(res => res.data)
    }
}