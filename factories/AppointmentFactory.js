class AppointmentFactory {
    Build(simpleAppointment) {
        var day = simpleAppointment.date.getDate();
        var month = simpleAppointment.date.getMonth();
        var year = simpleAppointment.date.getFullYear();
        var hour = Number.parseInt(simpleAppointment.time.split(":")[0]);
        var minutes = Number.parseInt(simpleAppointment.time.split(":")[1]);

        var appo = {
            id: simpleAppointment.id,
            title: simpleAppointment.name + " - " + simpleAppointment.description,
            start: new Date(year, month, day, hour, minutes, 0, 0),
            end: new Date(year, month, day, hour, minutes, 0, 0),
            notified: simpleAppointment.notified,
            email: simpleAppointment.email
        }

        return appo;
    }
}

module.exports = new AppointmentFactory();
