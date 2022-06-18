
import express, { Router } from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'});

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(  () => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

// Definir puerto // confiuracion antigua
//const port =  process.env.PORT || 4000;

//  Habilitar PUG
app.set('view engine', 'pug');

// Obtener el anio actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
})

// Agregar bodyParser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
// .use soporta (get,post,delete,push)
app.use('/', router);




// COnfiguracion anterior
// app.listen(port, () => {
//     console.log(`El server esta funcionando en el puerto ${port}`);  
// })



// CONFIGURACION NUEVA

// Definiendo el host
const host = process.env.HOST || '0.0.0.0' ; 
// Definiendo el puerto
const portENV = process.env.PORT || 4000;

app.listen(portENV, host, () => {
    console.log(`El server esta funcionando en el host ${host}, y en el puerto ${portENV}`);
});


