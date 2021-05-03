import axios from "axios"
import MockAdapter from "axios-mock-adapter"

var mock = new MockAdapter(axios);

mock.onGet("/restaurants").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
});


mock.onPost("/auth/phys").reply(200, {
    loggedInUser: [{ id: 1, name: "John Smith" }],
});

// axios.get("/restaurants").then(function (response) {
//     console.log(response.data);
// });