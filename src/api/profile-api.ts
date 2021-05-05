import { instance } from "./index";

import { mock } from "../utils/apicmock";




mock.onGet("/bookingHistory").reply(200, {
    bookings: [
            { id: 1, title: "Delmar", time: "12.00 - 13.00" },
            { id:2, title: "Delmar2", time: "22.00 - 13.00" },
        ],
});


// mock.onPost("/auth").reply(200, {
//     loggedInUser: [{ id: 1, name: "John fucking 23Smith" }],
// });
//
// mock.onPost("/registration/phys").reply(401, {
//     error: 'This mail is exist'
// });



export const profileAPI = {
    getBookingsHistory(personToken: string) {
        return instance.get(`/bookingHistory`).then(res => res.data)
    },
}
