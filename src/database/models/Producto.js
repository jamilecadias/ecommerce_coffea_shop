const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) =>{
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        } ,
        name: {
            type: dataTypes.STRING 
        }, 
        origin_id: {
            type: dataTypes.INTEGER
        }, 
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        }, 
        image: {
            type: dataTypes.STRING
        } 
    }; 
    let config = {
        tableName : "products",
        timestamps : false
    }

    const Product = sequelize.define(alias , cols , config)

    return Product;
}