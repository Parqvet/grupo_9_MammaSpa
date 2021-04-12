module.exports = (sequelize, dataTypes) => {

    const alias = 'Services';

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
        img: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'services',
        timeStamps: true
    }

    const Service = sequelize.define(alias, cols, config);

    return Service;
}