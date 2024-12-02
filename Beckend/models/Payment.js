const { DataTypes } = require('sequelize');
const sequalizeDb = require('../sequalizeDb'); // Adjust path if necessary

const Payment= sequalizeDb.define('payment', {
    userid: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
   
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false, // Ensure usernames are unique
    },
    cardno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false, // Ensure usernames are unique
    },
date: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },   
    
    CVV: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },   
});

// Sync the model with the database
(async () => {
    try {
        await Payment.sync(); // Creates the table if it doesn't exist
        console.log('User table has been created (if it didn\'t already exist).');
    } catch (error) {
        console.error('Unable to create table:', error);
    }
})();

module.exports =Payment;
