const botonListar = document.getElementById('btn-listar');
const botonAgregar = document.getElementById('btn-agregar');

window.addEventListener('load',obtener);
botonAgregar.addEventListener('click',agregar);

async function obtener(){

    const listado = document.getElementById('listaCursos');

    const usuarios = await fetch('http://localhost:3000/users');
    const usuario = await usuarios.json();
    console.log(usuario);
    let template = '';
    usuario.forEach((user) => {
        template += `
        <article class="curso">
            <p hidden>${user.id}<p>
            <img src="./images/user.png" alt="">
            <p><span>Usuario :</span> ${user.username}</p>
            <p><span>Nombre :</span> ${user.name}</p>
            <p><span>Telef :</span> ${user.phone}</p>
            <p><span>Correo :</span> ${user.email}</p>
            <p><p>
            <button class="boton boton-eliminar" onclick="eliminar(event)">Eliminar</button>
        </article>
        `
    });

    listado.innerHTML = template;
}

async function agregar(){
    const body = {
        username: 'myance',
        name: 'Miguel Yance',
        phone: '994156400',
        email: 'miguelygonzales@gmail.com',
    };

    const usuarios = await fetch('http://localhost:3000/users',  {method:'POST',body:JSON.stringify(body), headers: { 'Content-Type': 'application/json' }});
    const usuario = await usuarios.json();
    console.log(usuario);
}

async function eliminar(e){
    const idBorrar = e.target.parentElement.parentElement.firstElementChild.textContent;
    console.log(idBorrar);

    const config = {
        method: 'DELETE',
    }

    const usuarios = await fetch('http://localhost:3000/users/'+idBorrar,config);
    const usuario = await usuarios.json();
    console.log(usuario);

}