import {  from, fromEvent, interval, of } from 'rxjs'; // algo para crear observables
import {  reduce, scan,take,tap,first, takeWhile , map, takeUntil, skip} from 'rxjs/operators'; 

//takeUntil emite los valores ahsta que se emita el primer valor de un segundo observable
//skip este salta la cantidad de emiciones que se le  pasan

const boton = document.createElement('button');
boton.innerHTML ='Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(()=>console.log('antes skip')),
    skip(1),
    tap(()=>console.log('despues skip')),
);

counter$
.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next:val=>console.log('nex', val),
    complete:()=>console.log('complete')
})