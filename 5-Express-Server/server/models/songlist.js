module.exports = function (sequelize, DataTypes) {
    let Songlist = sequelize.define('songlist', {
        artist: DataTypes.STRING,
        songTitle: DataTypes.STRING
    })
    return Songlist;
};