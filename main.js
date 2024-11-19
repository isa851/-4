let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
users.map((item) => {
    item.name === "Маша" ? item.admin = true : item.admin = false
})
console.log(users);