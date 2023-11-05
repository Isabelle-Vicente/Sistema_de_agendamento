const sequelize = require('../database/database'); // Importe a instância do Sequelize que você configurou
const Appointment = require('../database/Apponitment');
var AppointmentFactory = require("../factories/AppointmentFactory");


class AppointmentService {
    async Create(name, email, description, cpf, date, time) {
        try {
            await Appointment.create({
                name,
                email,
                description,
                cpf,
                date,
                time,
                finished: false,
                notified: false
            });
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async GetAll(showFinished) {
        if (showFinished) {
            return await Appointment.findAll();
        } else {
            const appos = await Appointment.findAll({
                where: {
                    finished: false
                }
            });

            const appointments = appos
                .filter(appointment => appointment.date !== undefined)
                .map(appointment => AppointmentFactory.Build(appointment));


            return appointments;
        }
    }

    async GetById(id) {
        try {
            return await Appointment.findByPk(id);
        } catch (err) {
            console.log(err);
        }
    }

    async Finish(id) {
        try {
            const [updatedRows] = await Appointment.update(
                { finished: true },
                {
                    where: {
                        id
                    }
                }
            );
            return updatedRows > 0;
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    async Search(query) {
        try {
            return await Appointment.findAll({
                where: {
                    [Op.or]: [
                        { email: query },
                        { cpf: query }
                    ]
                }
            });
        } catch (err) {
            console.log(err);
            return [];
        }
    }

      // async SendNotification(){
    //     var appos = await this.GetAll(false);
        
    //     var transporter = mailer.createTransport({
    //         host: "smtp.mailtrap.io" ,
    //         port: 25,
    //         auth: {
    //             user: "3edb05efa41bb6",
    //             pass: "f4d4d2222c6acd"
    //         }
    //      });

    //     appos.forEach(async app => {
            
    //         var date = app.start.getTime(); 
    //         var hour = 1000 * 60 * 60;
    //         var gap = date-Date.now();

    //         if(gap <= hour){
                
    //             if(!app.notified){

    //                 await Appo.findByIdAndUpdate(app.id,{notified: true});
                    
    //                 transporter.sendMail({
    //                     from: "Victor Lima <victor@guia.com.br>",
    //                     to: app.email,
    //                     subject: "Sua consulta vai acontecer em breve!",
    //                     text: "Conteúdo qualquer!!!!! Sua consulta vai acontecer em 1h"
    //                 }).then( () => {

    //                 }).catch(err => {

    //                 })

    //             }
    //         }

    //     })
    // }
}

module.exports = new AppointmentService();
