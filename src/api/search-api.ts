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



export const searchAPI = {
    getRestaurantList(search: string) {
        return instance.get(`/search`).then(res => res.data)
    }
}
