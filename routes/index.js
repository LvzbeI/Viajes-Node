import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje
 } from '../controllers/paginasController.js';

 import { guardarTestimonial } from '../controllers/testimonialController.js';
const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:id', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


//router.get('/', (req, res) => {

    // render muestra una vista

//    res.render('inicio', {
  //      pagina: 'Inicio'
   // });

    // res.send('Hola mundo!');
    // res.json({
    //     id: 1
    // });
    
//});


export default router;
