const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
},
];
const router = app => {
    app.get('/users', (request, response) => {
        response.send(users);
    });
}

//Export the router
// Export the router
module.exports = router;