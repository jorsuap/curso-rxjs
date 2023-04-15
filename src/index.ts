import { fromEvent, range, of, from } from 'rxjs'; // algo para crear observables
import { filter,map } from 'rxjs/operators'; 

//tap puede disparar efectos secundarios ejemplo disparar acciones

const number$ = range(1,5)

number$.subscribe(val => console.log('subsw', val))