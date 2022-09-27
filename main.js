function miCeluUy() {
    let saludoDeBienvenida = alert('Bienvenido a MICELU.UY');

    let elegir = alert('Porfavor a continuacion elija un producto');

    let producto = prompt('Elije tu marca de celular: Samsung - iphone');

    while (
        producto !== 'Samsung' &&
        producto !== 'samsung' &&
        producto !== 'Iphone' &&
        producto !== 'iphone'
    ) {
        alert('NO TENEMOS ESA MARCA DE CELULAR');
        producto = prompt('Elije tu marca de celular: Samsung - iphone');
    }

    if (
        producto !== 'Samsung' &&
        producto !== 'samsung' &&
        producto !== 'Iphone' &&
        producto !== 'iphone'
    ) {
        alert('No tenemos ese producto');
        producto = prompt('Elije tu marca de celular: Samsumg - iphone');
    } else if (producto === 'Samsung' || producto === 'samsung') {
        alert('FELICIDADES ACABAS DE ADQUIRIR ' + producto);
    } else if (producto === 'Iphone' || producto === 'iphone') {
        alert('FELICIDADES ACABAS DE ADQUIRIR ' + producto);
    }

    alert('Gracias por visitar nuestra tienda');
}

miCeluUy();