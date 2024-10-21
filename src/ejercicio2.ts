import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('SIGINT', () => {
    console.log("\nSaliendo del programa...");
     Salir();
});

interface Empresa {
    Nombre: string,
    Empleados: Empleado[]
};
interface Empleado {
    Nombre: string,
    Edad: string,
    Cargo: string,
    Salario: number
};
const empresa: Empresa = {
    Nombre: "Empresa1",
    Empleados: [{
Nombre:'Andres',
Edad:'18',
Cargo: 'Desarrollador',
Salario: 1200000
}]
}
function menu(): void {
    rl.question('Elige la opcion que deseas 1. Agregar empleados 2. Buscar empleados por su nombre 3.Consultar salario promedio de todos los empleados 4.salir', (opcion) => {
        switch(opcion){
            case '1':
                SolicitarInformacionEmpleado()
                break;
                case '2':
                BuscarEmpleado()
                break;
                case '3':
                 const promedio:number =CalcularSalario()
                 console.log(`El promedio del salario de todos lo empleeados es: ${promedio}`)
                 menu()
                break;
                case '4':
                    Salir()
                    break;
                    default:
                        console.log ('Opcion no valida')
                menu()
                break;
        }

    })
    function SolicitarInformacionEmpleado(){
        rl.question('Escribe el nombre del Empleado: ',(Nombre)=>{
            rl.question('Escribe la edad del Empleado: ', (Edad)=>{
                rl.question('Escriba el cargo de Empleado: ', (Cargo)=>{
                    rl.question('Escriba el salario del Empleado: ',(Salario)=>{
                        AgregarEmpleado(Nombre,Edad,Cargo,Salario)
                        menu()
                    })
                })
            })

        })
    }
}
function AgregarEmpleado(Nombre:string, Edad:string, Cargo:string, Salarion:string){
    const Salario:number = parseInt(Salarion)
    if(!isNaN(Salario)){
        empresa.Empleados.push({Nombre,Edad,Cargo,Salario})
        console.log(`Empleado agregado: ${Nombre} Edad: ${Edad} Cargo: ${Cargo} Salario: ${Salario}`)
    }else{
        console.log('Salario invalido vuelva a intentarlo')
    }
}
function BuscarEmpleado (){
    rl.question('Ingrese el nombre del empleado que necesita buscar: ',(Nombre)=>{
        const Empleadoencontrado= empresa.Empleados.filter(empleado=> empleado.Nombre.toLocaleLowerCase().includes(Nombre.toLowerCase()))
    if(Empleadoencontrado.length>0){
        console.log('Empleado encontrado')
        Empleadoencontrado.forEach(empleado => {
            console.log(`Nombre: ${Nombre} Edad: ${empleado.Edad} Cargo: ${empleado.Cargo} Salario: ${empleado.Salario}`)

        })
    }else{
        console.log('Libro No encontrado')
    }
    menu()
})
}
function CalcularSalario(){
    if (empresa.Empleados.length === 0 ){
        return 0;
    }
    const sumarSalarios = empresa.Empleados.reduce((suma,empleado)=>suma + empleado.Salario, 0);
    const promedio = sumarSalarios/empresa.Empleados.length
    return promedio;
}
function Salir(){
    console.log('saliendo del programa....')
    rl.close()
}
rl.on('SIGINT', () => {
    console.log("\nSaliendo del programa...");
    Salir();
});
menu()

