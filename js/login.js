
let recuerdame = document.getElementById('checkbox__recuerdame');
let botonLogin = document.getElementById('boton__login');
let botonBorrarLocalStorage = document.getElementById('boton__borrarLocalStorage');
let botonBorrarSessionStorage = document.getElementById('boton__borrarSessionStorage');

function guardarDatosUsuario(storage) {

    let nombreUsuario = document.getElementById('input__nombre').value;
    let emailUsuario = document.getElementById('input__email').value;
    let contraseniaUsuario = document.getElementById('input__contraseña').value;

    const usuario = {
        'nombre': nombreUsuario,
        'email': emailUsuario,
        'contraseña': contraseniaUsuario
    }

    storage === 'sessionStorage' && sessionStorage.setItem('usuario', JSON.stringify(usuario));

    storage === 'localStorage' && localStorage.setItem('usuario', JSON.stringify(usuario));

}

function borrarDatosUsuario(storage) {
    storage.clear()
}

botonLogin.addEventListener('click', () => {
    recuerdame.checked ? guardarDatosUsuario('localStorage') : guardarDatosUsuario('sessionStorage')
});

botonBorrarLocalStorage.addEventListener('click', ()=>{
    borrarDatosUsuario(localStorage);
    borrarDatosUsuario(sessionStorage);
});

botonBorrarSessionStorage.addEventListener('click', ()=>{
    borrarDatosUsuario(sessionStorage);
});


