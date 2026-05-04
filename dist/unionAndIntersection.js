"use strict";
//union types
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboarad = (role) => {
    if (role === "admin") {
        return "Admin dashboard";
    }
    else if (role === "user") {
        return "user dashboard";
    }
    else {
        return "guest dasboard v ";
    }
};
const chowdhury = {
    name: "rayhan",
    id: "123",
    phoneNO: "012",
    description: "heelo",
    teamSize: 2
};
//# sourceMappingURL=unionAndIntersection.js.map