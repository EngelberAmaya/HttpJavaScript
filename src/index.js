// import { obtenerChiste } from "./js/http-provider";

//import { init } from "./js/usuarios-page";

// obtenerChiste().then(console.log);


//init();

 import * as CRUD from './js/crud-provider';

 //CRUD.getUsuario(1).then(console.log);

// CRUD.crearUsuario({
//     name: 'Engelber',
//     job: 'Desarrollar paginas web'
// }).then(console.log);

CRUD.actualizarUsuario(1,{
    name: 'Engelber Amaya',
    job: 'Desarrollar paginas web con JavaScript'
}).then(console.log);