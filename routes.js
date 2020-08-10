'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/song')
        .get(todoList.song);

    app.route('/song/:id')
        .get(todoList.detailSong);

    app.route('/song/create')
        .post(todoList.createSong);

    app.route('/song/delete')
        .post(todoList.deleteSong);

    app.route('/song/update')
        .post(todoList.updateSong);
};