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

    Category.associate = function(models) {
        Category.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }

    Category.associate = function(models) {
        Category.hasMany(models.Services, {
            as: 'services',
            foreignKey: 'category_id'
        })
    }

    return Category;
}