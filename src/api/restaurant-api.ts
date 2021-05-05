import { instance } from "./index";

// import { mock } from "../utils/apicmock";

import MockAdapter from "axios-mock-adapter"


const mock = new MockAdapter(instance);


mock.onGet("/restaurant").reply(200, {
    restaurant:
        {
            id: 'myid',
            title: "Lite dragon",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, reiciendis.',
            address: 'Тамбов, ул Ленина д 5',
            workingTime: [
                {
                    days: 'Пн - Пт',
                    value: '09.00 - 18.00'
                },
                {
                    days: 'Сб - Вс',
                    value: '10.00 - 20.00'
                }
            ]
        },
});


mock.onGet("/restaurants").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
});

export const restaurantAPI = {
    getRestaurantList(search: string) {
        return instance.get(`/restaurants`).then(res => res.data)
    },
    getCurrentRestaurant(id: string) {
        return instance.get("/restaurant").then(res => res.data)
    }
}
