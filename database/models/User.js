module.exports = (sequelize, dataTypes) => {

    const alias = 'Users';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
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
        password2: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        role: {
            type: dataTypes.STRING(30),
            allowNull: true,
            defaultValue: 'user'
        }
    }

    const config = {
        tableName: 'users',
        timeStamps: true
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}