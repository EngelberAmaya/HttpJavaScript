import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro, olList;

const crearChistesHtml = () => {

    const html =  `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary">Otro Chiste</button>

        <ol class="list-group mt-2">
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        //console.log('hola mundo');
        btnOtro.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    })
}

const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);
}

export const init = () => {
    crearChistesHtml();
    eventos();
}