module.exports = app => {
    const controller = app.controllers.users;

    app.route('/api/v1/users')
        .get(controller.listUsers);
}