import {  from, fromEvent, interval, of } from 'rxjs'; // algo para crear observables
import {  reduce, scan,take,tap,first, takeWhile , map, takeUntil, skip, distinct, distinctUntilChanged} from 'rxjs/operators'; 

//distinct emite los valores distintos a los que ya ha emitido
//distinctUntilChange valida si el valor anterior es diferente que el anterior

const numeros$ = of(1,2,3,2,1,2,3,4,6,5,5,4,23,2);

numeros$
.pipe(
    // distinct(),// === usa el comparador stricto de js
    distinctUntilChanged() //compara que el valor anterior no sea igual, si es diferente lo emite
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
    }
]

from(personajes).pipe(
    // distinct(p=>p.nombre),// se le indica de cual campo debe estar pendiente que no se haya emitido
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre) // si es true no lo emite
).subscribe(console.log)

