import { instance } from "./index";
//
import '../utils/mocks'



// mocks


import MockAdapter from "axios-mock-adapter"

var mock = new MockAdapter(instance);

mock.onGet("/restaurants").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
});


mock.onPost("/auth").reply(200, {
    loggedInUser: [{ id: 1, name: "John fucking 23Smith" }],
});

mock.onPost("/registration/phys").reply(401, {
    error: 'This mail is exist'
});





type CurrentUserDataType = {

}

type LoginResponseDataType = {

}

export const authAPI = {
    login(email: string, password: string, rememberMe?: boolean) {
        return instance.post(`/auth`, {email, password}).then(res => res.data)
    },

    logout() {
        return instance.delete(`auth/phys/login`)
    },

    register(email: string, password: string, phone: string, username: string) {
        return instance.post(`/registration/phys`, {email, password, phone, username}).then(res => res.data)
    }
}
