module.exports = (sequelize, dataTypes) => {

    const alias = 'Products';

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
        title: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'products',
        timeStamps: true
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}