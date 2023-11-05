class AppointmentFactory {
    Build(simpleAppointment) {
        var day = simpleAppointment.date.getDate();
        var month = simpleAppointment.date.getMonth();
        var year = simpleAppointment.date.getFullYear();
        var hour = Number.parseInt(simpleAppointment.time.split(":")[0]);
        var minutes = Number.parseInt(simpleAppointment.time.split(":")[1]);

        // No Sequelize, o ID está na propriedade 'id' em vez de '_id'
        var appo = {
            id: simpleAppointment.id,
            title: simpleAppointment.name + " - " + simpleAppointment.description,
            // Lembre-se de que o mês em JavaScript é baseado em zero, então adicionamos 1
            start: new Date(year, month, day, hour, minutes, 0, 0),
            end: new Date(year, month, day, hour, minutes, 0, 0),
            notified: simpleAppointment.notified,
            email: simpleAppointment.email
        }

        return appo;
    }
}

module.exports = new AppointmentFactory();
