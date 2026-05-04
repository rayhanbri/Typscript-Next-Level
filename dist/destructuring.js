"use strict";
// object destructuring
// array destructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 123,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "forhan",
    },
    gender: "male",
    favouritecolor: "black",
};
// const myfavourtieColor = user.favouritecolor
// destructuring
// const { favouriteColor } = user;
// name alias
// const { favouriteColor: myfavouritecolor } = user;
// const {
//   favouriteColor: myfavouritecolor,
//   name: { middleName: mymiddleName },
// } = user;
const friends = ["karim", "Rahim", "Mahin"];
const BestFriend = friends[1];
// const [, B] = friends;
const [, , B] = friends;
//# sourceMappingURL=destructuring.js.map