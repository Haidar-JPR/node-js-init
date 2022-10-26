'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Suyud',
        profession: 'Administrator',
        role: 'admin',
        email: 'ohmyud@gmial.com',
        pass: await bcrypt.hash('123456',10),
        created_at: new Date(),
      },
      {
        name: 'Widodo',
        profession: 'Operator',
        role: 'operator',
        email: 'widow@gmial.com',
        pass: await bcrypt.hash('123456',10),
        created_at: new Date(),
      }
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
