const users = [{
        id: 123,
        username: "anisul islam",
        email: "lalalal@yahoo.com",
    },
    {
        id: 123,
        username: "rakibul islam",
        email: "lalalal@yahoo.com",
    },
    {
        id: 234,
        username: "rakibul islam",
        email: "lalalal@yahoo.com",
    },
];

const userId =  users.filter(user => user.id == user.id)
userId.map(u => console.log(u))
// console.log(userId)