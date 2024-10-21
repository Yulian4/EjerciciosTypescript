// Crea un programa que gestione productos de una tienda. El
// programa debe permitir agregar productos, buscar productos por nombre y
// calcular el valor total del inventario.
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('SIGINT', () => {
    console.log("\nSaliendo del programa...");
     Salir();
});
interface Producto{
    Nombre:string,
    Marca : string,
    Descripcion: string,
    Precio: number,
    Cantidad: number
}
interface Tienda{
    Nombre:string,
    Productos: Producto[]
}
const tienda : Tienda ={
    Nombre:'El paisa',
    Productos:[{
        Nombre: 'Arroz',
        Descripcion:'El grano viene mas entero',
        Marca: 'Roa',
        Precio: 2000,
        Cantidad: 3

    }]
}
function Menu (){
    rl.question('Digite la opcion que desea 1. Agregar Productos 2.Buscar productos por nombre 3.Calcular el total Inventario ',(opc)=>{
        switch(opc){
            case '1':
                SolicitarInformacion()
                break;
            case '2':
                BuscarProductos()
                break;
            case '3':
                CalcularInventario()
                break;
            case '4':
                Salir()
                break;
        }
    })
}
function SolicitarInformacion(){
    rl.question('Nombre del Producto: ', (Nombre)=>{
        rl.question('Descripcion del producto: ',(Descripcion)=>{
            rl.question('Marca del producto: ',(Marca)=>{
                rl.question('Precio del producto: ',(Precio)=>{
                    rl.question('Cantidad del producto: ',(Cantidad)=>{

                        AgregarProductos(Nombre,Descripcion,Marca,Precio,Cantidad)
                        Menu()
                    })
                })
            })
        })
    })
}
function AgregarProductos(Nombre:string, Descripcion:string, Marca:string, Precion:string, Cantidadd:string){
const Precio = parseInt(Precion)
const Cantidad = parseInt(Cantidadd)
if(!isNaN(Precio) && !isNaN(Cantidad)){
tienda.Productos.push({Nombre,Descripcion,Marca,Precio,Cantidad})
console.log(`Producto Agregado: ${Nombre} Descripcion: ${Descripcion} Marca: ${Marca} Precio: ${Precio} Cantidad: ${Cantidad}`)
}else{
    console.log('Informacion invalida intentelo de nuevo')
}
}
function BuscarProductos(){
    rl.question('ingrese el nombre del Producto que desea Bucar: ',(Nombre)=>{
        const ProductoEncontrado = tienda.Productos.filter(producto=> producto.Nombre.toLocaleLowerCase().includes(Nombre.toLowerCase()))
    if (ProductoEncontrado.length>0 ){
        console.log('Producto Encontrado')
        ProductoEncontrado.forEach(producto => {
            console.log(`Nombre: ${Nombre} Descripcion: ${producto.Descripcion} Marca: ${producto.Marca} Precio: ${producto.Precio} Cantidad: ${producto.Cantidad}`)
        })
    }else{
        console.log('producto no encontrado')
    }
    })
}
function CalcularInventario(){
 const total = tienda.Productos.reduce((total , producto)=> total +(producto.Precio * producto.Cantidad ),0)
 return console.log(`El total del inventario es: ${total}`)
}
function Salir(){
    console.log('Saliendo del programa.....')
    rl.close()
}
Menu()