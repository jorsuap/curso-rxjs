import { asyncScheduler } from 'rxjs'; // algo para crear observables


asyncScheduler // crea una subscripcion

setTimeout(() => {}, 3000);

setInterval(()=>{}, 3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola Mundo ${nombre}`);
// asyncScheduler.schedule(saludar, 2000)//1er argumneto es la funcion q se quiere ejecutar sin parantesis, 2do el tiempo de ejecucion

// asyncScheduler.schedule(saludar2, 2000, 'jorddi')//el tercer argumento es un estado, si es mas d eun valor requiere un objeto

const subs = asyncScheduler.schedule(function(state:number) {// para Setinterval recibe una funcion, tiempo y estado
    console.log(state);
    this.schedule(state+1, 1000)
}, 2000, 0)//

// setTimeout(() => {
//     subs.unsubscribe()
// }, 5000);

asyncScheduler.schedule(()=>subs.unsubscribe(),6000)