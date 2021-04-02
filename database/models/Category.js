module.exports = (sequelize, dataTypes) => {

    const alias = 'Category';

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
        type: {
            type: dataTypes.STRING,
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