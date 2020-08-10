'use strict';

var response = require('./res');
var connection = require('./db_config');

exports.song = function(req, res) {
    let sql = "SELECT * FROM favorite_songs";
    connection.all(sql, (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        if(rows){
            response.ok(rows, res)
        } else {
            response.ok(null, res);
        }
    });
};

exports.detailSong = function(req, res) {
    var id = req.params.id
    let sql = "SELECT * FROM favorite_songs WHERE id=?";
    connection.get(sql,[id], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        if(rows){
            response.ok(rows, res)
        } else {
            response.ok(null, res);
        }
    });
};

exports.createSong = function(req, res) {
    var title = req.body.title
    var artist = req.body.artist
    let sql = "INSERT INTO favorite_songs (title, artist) VALUES (?,?)";
    connection.run(sql, [title, artist], (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        response.ok("Berhasil tambah data", res)
    });
};

exports.deleteSong = function(req, res) {
    var id = req.body.id
    let sql = "DELETE FROM favorite_songs WHERE id = ?";
    connection.run(sql, [id], (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        response.ok("Berhasil Hapus data", res)
    });
};

exports.updateSong = function(req, res) {
    var id = req.body.id
    var title = req.body.title
    var artist = req.body.artist
    let sql = "UPDATE favorite_songs SET title = ?, artist = ? WHERE id = ?";
    connection.run(sql, [title, artist, id], (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }

        response.ok("Berhasil Update data", res)
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful asd!", res)
};

