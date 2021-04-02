module.exports = (sequelize, dataTypes) => {

    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstname: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING(30),
            allowNull: false
        }
    }

    const config = {
        tableName: 'users',
        timeStamps: true
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}