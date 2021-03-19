module.exports = (sequelize, dataTypes) => {

    const alias = 'Category';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        rostro: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        manos: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }

    const config = {
        tableName: 'categories',
        timeStamps: true
    }

    const Category = sequelize.define(alias, cols, config);

    return Category;
}