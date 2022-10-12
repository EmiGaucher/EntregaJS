//Array con objetos
let celulares = [
    { marca: "Samsung", modelo: "A32", precio: 13400 },
    { marca: "Xiaomi", modelo: "Redmi note 11", precio: 10240 },
    { marca: "Iphone", modelo: "14", precio: 52000 },
    { marca: "Huawei", modelo: "P40", precio: 9600 },
    { marca: "Nokia", modelo: "G21", precio: 13690 },
];

let carrito = [];


let userName = prompt("Por favor ingrese su nombre");
alert(
    `Hola ${userName} \nSigua los pasos para realizar una compra!`
);

function menu() {
    let seleccionar = parseInt(
        prompt(
            `Seleccione el numero de la opcion que desea:\nOpcion 1 - Comprar celular \nOpcion 2 - SALIR `
        )
    );
    while (seleccionar !== 1 && seleccionar !== 2) {
        alert("No esta dentro de las opciones");
        seleccionar = parseInt(
            prompt(
                `Seleccione el numero de la opcion que desea:\nOpcion 1 - Comprar celular \nOpcion 2 - SALIR `
            )
        );
    }
    return seleccionar;
}

const seleccionar = menu();
switch (seleccionar) {
    case 1: celularesDisponibles();
        break;
    case 2:
        salir();
        break;
}

//SECCION CELULARES
function celularesDisponibles() {
    celulares.map((celu) => {
        alert(
            `Tenemos: ${celu.marca} ${celu.modelo} PRECIO: ${celu.precio}`
        );
    });

    let comprarCelular = parseInt(
        prompt(
            'Elija su Producto\nOpcion 1 - Samsung\nOpcion 2 - Xiaomi\nOpcion 3 - Iphone\nOpcion 4 - Huawei\nOpcion 5 - Nokia'
        )
    );

    if (comprarCelular === 1 || comprarCelular === 2 || comprarCelular === 3 || comprarCelular === 4 || comprarCelular === 5) {
        switch (comprarCelular) {
            case 1:
                modelo = 'Samsung A32';
                precio = 13400;
                break;
            case 2:
                modelo = 'Xiaomi Redmi note 11';
                precio = 10240;
                break;
            case 3:
                modelo = 'Iphone 14';
                precio = 52000;
                break;
            case 4:
                modelo = 'Huawei P40';
                precio = 9600;
                break;
            case 5:
                modelo = 'Nokia G21';
                precio = 13690;
                break;
        }

        carrito.push({ modelo, precio });
    } else {
        alert('No contamos con stock');
    }

    let seguirComprando = prompt(
        userName + ' Deseas seguir comprando?\n SI o NO'
    );

    if (seguirComprando === 'SI' || seguirComprando === 'si') {
        return celularesDisponibles();
    } else if (seguirComprando === 'NO' || seguirComprando === 'no') {
        alert('Compra finalizada');
    }

    let totalProductos = carrito.forEach((cel) => {
        alert(
            `Compraste: ${cel.modelo} Debe abonar $${cel.precio
            }.`
        );
    });

    alert(`${userName} Muchas gracias por tu compra! vuelve pronto!`);
}


function salir() {
    alert(
        `Gracias ${userName} por usar MICELU \nVUELVE PRONTO!`
    );
}

