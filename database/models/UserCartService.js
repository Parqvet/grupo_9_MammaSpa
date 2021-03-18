module.exports = (sequelize, dataTypes) => {

    const alias = 'UserCartService';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'userscartservices',
        timeStamps: true
    }

    const UserCartService = sequelize.define(alias, cols, config);

    return UserCartService;
}