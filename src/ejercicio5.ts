// Descripción: Crea un programa que gestione las reservas de un hotel. El
// programa debe permitir agregar reservas, buscar reservas por nombre del
// huésped y calcular el ingreso total del hotel.
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('SIGINT', () => {
    console.log("\nSaliendo del programa...");
     Salir();
});

interface Reserva {
    NombrePropietario: string,
    Habitacion: string
    Total: number
}
interface Hotel{
    Nombre:string,
    Reservas:Reserva[]
}
const hotel: Hotel = {
    Nombre:'Maraavilla',
    Reservas:[{
        NombrePropietario:'Alex',
        Habitacion:'Habitacion 102',
        Total: 5000

    },
    {
        NombrePropietario:'Alex',
        Habitacion:'Habitacion 103',
        Total: 5000

    }]
}
function Menu() {
    rl.question('Que opcion desea 1.Agregar Reserva 2.Buscar Reservas 3.Total de ingresos del hotel 4.Salir', (opc) => {
        switch (opc) {
            case '1':
                SolicitarInformacion()
                break;
            case '2':
                BuscarReservas()
                break;
            case '3':
                CalcularIngreso()
                break;
            case '4':
                Salir()
                break;
            default:
                break;
        }
    })
}
function SolicitarInformacion() {
    rl.question('Ingrese el nombre del quien hace la reserva: ', (NombrePropietario) => {
        rl.question('Ingrese que producto va a reservar: ', (Habitacion) => {
            rl.question('Total', (Total) => {
                AgregarReservas(NombrePropietario, Habitacion, Total)
                Menu()
            })
        })
    })
}
function AgregarReservas(NombrePropietario: string, Habitacion: string, total: string) { 
    const Total = parseInt(total)
    if(!isNaN(Total)){
        hotel.Reservas.push({NombrePropietario,Habitacion,Total})
        console.log(`Reserva agregada a nombre de: ${NombrePropietario} Habitacion: ${Habitacion} Total: ${Total}`)
    }else{
        console.log('El total debe ser un numero intentelo de nuevo')
    }
    Menu()
}
function BuscarReservas() {
    rl.question('Escriba el nombre de la persona de la reserva que desea consultar',(NombrePropietario)=>{
        const ReservaEncontrada = hotel.Reservas.filter(reserva => reserva.NombrePropietario.toLowerCase().includes(NombrePropietario.toLowerCase()))
        
        
        if(ReservaEncontrada.length > 0){
            console.log('Reserva encontrada:')
            ReservaEncontrada.forEach(reserva=>{
                console.log(`Nombre de propietario: ${reserva.NombrePropietario} Habitacion: ${reserva.Habitacion} Total: ${reserva.Total}`)
            })
        }
    })
    Menu()
 }
function CalcularIngreso() {
    let total:number = 0
hotel.Reservas.forEach(reserva =>{
    total += reserva.Total
})
console.log(`Èl total de los ingresos del Hotel es: ${total}`)
}
function Salir() {
console.log('Saliendo del programaa...')
rl.close()
}
Menu()