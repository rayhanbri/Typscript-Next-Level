//spread operator

const friends = ["rayhim", "shamim"];

const schoolFriends = ["akash", "arman"];

const colleageFriends = ["rocky", "socky"];

// friends.push(schoolFriends)

friends.push(...schoolFriends);

const user = { name: "Mezba", phoneNo: "0170000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// rest opeartor

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`),
  );
};

sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");
