'use strict';
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fileName: {
        type: Sequelize.STRING
      },
      fileSize: {
        type: Sequelize.INTEGER
      },
      width: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      uploaded: {
        type: Sequelize.DATE
      },
      sourceIp: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable('Images');
  }
};