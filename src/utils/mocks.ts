import axios from "axios"
import MockAdapter from "axios-mock-adapter"

import { instance } from "../api";


var mock = new MockAdapter(instance);

mock.onGet("/restaurants").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
});


mock.onPost("localhost:3000/auth").reply(200, {
    loggedInUser: [{ id: 1, name: "John 23213Smith" }],
});

// axios.get("/restaurants").then(function (response) {
//     console.log(response.data);
// });