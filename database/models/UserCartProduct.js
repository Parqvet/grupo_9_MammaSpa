module.exports = (sequelize, dataTypes) => {

    const alias = 'UserCartProduct';

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
        tableName: 'userscartproducts',
        timeStamps: true
    }

    const UserCartProduct = sequelize.define(alias, cols, config);

    return UserCartProduct;
}