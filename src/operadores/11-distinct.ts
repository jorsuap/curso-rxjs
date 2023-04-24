import {  from, fromEvent, interval, of } from 'rxjs'; // algo para crear observables
import {  reduce, scan,take,tap,first, takeWhile , map, takeUntil, skip, distinct} from 'rxjs/operators'; 

//distinct emite los valores distintos a los que ya ha emitido

const numeros$ = of(1,2,3,2,1,2,3,4,6,5,5,4,23,2);

numeros$
.pipe(
    distinct()// === usa el comparador stricto de js
)
.subscribe(console.log)

interface Personaje {
    nombre : string,
}

const personajes:Personaje[] = [
    {
        nombre : 'IronMan',
    },
    {
        nombre : 'SpiderMan',
    },
    {
        nombre : 'BlackPanter',
    },
    {
        nombre : 'Thor',
    },
    {
        nombre : 'AntMan',
    },
    {
        nombre : 'IronMan',
    }
]

from(personajes).pipe(
    distinct(p=>p.nombre)// se le indica de cual campo debe estar pendiente que no se haya emitido
).subscribe(console.log)