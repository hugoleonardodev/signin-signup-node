'use strict'

var bcrypt = require('bcryptjs')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('users', [
            {
                username: 'user_1',
                password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8),
                email: 'user_1@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'user_2',
                password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8),
                email: 'user_2@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                username: 'user_3',
                password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8),
                email: 'user_3@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('users', null, {})
    },
}
