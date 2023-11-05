const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require('./database/database'); // Importe a instância do Sequelize que você configurou
const AppointmentService = require("./services/AppointmentService");
const AppointmentFactory = require("./factories/AppointmentFactory");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

// Substitua a configuração do banco de dados Mongoose pelo Sequelize
// Lembre-se de configurar o arquivo 'sequelize.js' adequadamente
// Exemplo:
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

sequelize.authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro na conexão com o banco de dados:', err);
  });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cadastro", (req, res) => {
  res.render("create");
});

app.post("/create", async (req, res) => {
  const { name, email, description, cpf, date, time } = req.body;

  try {
    await AppointmentService.Create(name, email, description, cpf, date, time);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.send("Ocorreu uma falha!");
  }
});

app.get("/getcalendar", async (req, res) => {
  const appointments = await AppointmentService.GetAll(false);
  res.json(appointments);
});

app.get("/event/:id", async (req, res) => {
  const appointment = await AppointmentService.GetById(req.params.id);
  console.log(appointment);
  res.render("event", { appo: appointment });
});

app.post("/finish", async (req, res) => {
  const id = req.body.id;
  const result = await AppointmentService.Finish(id);
  res.redirect("/");
});

app.get("/list", async (req, res) => {
  const appos = await AppointmentService.GetAll(true);
  res.render("list", { appos });
});

app.get("/searchresult", async (req, res) => {
  const appos = await AppointmentService.Search(req.query.search);
  res.render("list", { appos });
});

const pollTime = 1000 * 60 * 5;

setInterval(async () => {
  // Verifique e atualize a função 'SendNotification' no seu serviço, conforme necessário.
  // await AppointmentService.SendNotification();
}, pollTime);

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
