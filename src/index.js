// import { obtenerChiste } from "./js/http-provider";

//import { init } from "./js/usuarios-page";

// obtenerChiste().then(console.log);


//init();

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then(console.log);