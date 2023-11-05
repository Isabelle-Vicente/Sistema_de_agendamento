const Sequelize = require("sequelize");
const connection = require("./database");

const Appointment = connection.define('Appointment', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  finished: {
    type: Sequelize.BOOLEAN,
    defaultValue: false, // Define um valor padrão para o campo finished
  },
  notified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false, // Define um valor padrão para o campo notified
  },
});

Appointment.sync({force: false}).then(() => {});

module.exports = Appointment;
