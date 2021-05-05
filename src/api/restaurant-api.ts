import { instance } from "./index";

// mocks
import MockAdapter from "axios-mock-adapter"

var mock = new MockAdapter(instance);

mock.onGet("/restaurants").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
});


mock.onGet("/restaurant").reply(200, {
    loggedInUser: [{ id: 1, name: "John fucking 23Smith" }],
});



export const restaurantAPI = {
    getRestaurantList(search: string) {
        return instance.get(`/restaurant`).then(res => res.data)
    }
}
